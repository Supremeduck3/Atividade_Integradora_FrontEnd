import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './home.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Carregamento from '../../components/carregamento/carregamento';

// Extrai apenas o PRIMEIRO livro de cada API (cada backend = um livro)
function extrairPrimeiroLivro(json) {
    if (Array.isArray(json) && json.length > 0) return json[0];
    if (Array.isArray(json?.data) && json.data.length > 0) return json.data[0];
    if (json?.data?.titulo || json?.data?.capa) return json.data;
    if (json?.titulo || json?.capa) return json;
    return null;
}
const ICONES_URL = 'https://atividade-portugues-backend.onrender.com/api/upload/19/imagem';
const ICONES_API_KEY = 'chaveSecreta';

function Home() {
    const [livros, setLivros] = useState([]);
    const [erro, setErro] = useState(null);
    const [icones, setIcones] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function carregarLivros() {
            try {
                const respostas = await Promise.all([
                    fetch('https://atividade-portugues-backend.onrender.com/api/livro', {
                        headers: { 'x-api-key': 'chaveSecreta' },
                    }),
                    fetch('https://ratsjs.onrender.com/api/livros', {
                        headers: {
                            'x-api-key':
                                'Fq0CotClRneRPJAeCakJsrSwGyVCJU58tQrPWYgLCK3ei9HT-Ygajl2KXCLiZTPO',
                        },
                    }),
                    fetch('https://clubelivro-backend.onrender.com/api/livros', {
                        headers: { 'x-api-key': 'entreLinhas123' },
                    }),
                    fetch('https://olhosdagua.onrender.com/api/livro', {
                        headers: {
                            'x-api-key':
                                '6uztY7YTa2Dcgnf2ovDC2Kqmwvq2PdTMOlkx1bLwmhO2HQpQoXHMhk1cBcIjzHj9lztTbW7I83UZ91C8uSos-n8kOx3UuqU8n0BIDVm1venccSH0QVyNYKkLTZboaUpd',
                        },
                    }),
                    fetch('https://devstones-backend.onrender.com/api/livro/', {
                        headers: {
                            'x-api-key': ' livr0',
                        },
                    }),
                ]);
                if (ICONES_URL) {
                    const respostaIcones = await fetch(ICONES_URL, {
                        headers: { 'x-api-key': ICONES_API_KEY },
                    });
                    const jsonIcones = await respostaIcones.json();
                    setIcones(jsonIcones);
                }

                const jsons = await Promise.all(respostas.map((r) => r.json()));
                const todosLivros = jsons.map(extrairPrimeiroLivro).filter(Boolean);
                setLivros(todosLivros);
            } catch (e) {
                console.error(e);
                setErro('Erro ao carregar livros');
            } finally {
                setCarregando(false);
            }
        }

        carregarLivros();
    }, []);

    if (carregando) {
        return (
            <div className={styles.container}>
                <Header />
                <main style={{ display: 'flex', justifyContent: 'center', padding: '80px 0' }}>
                    <Carregamento />
                </main>
                <Footer />
            </div>
        );
    }

    if (erro) {
        return (
            <div className={styles.container}>
                <Header />
                <main style={{ textAlign: 'center', padding: '80px 0', color: '#c95d5d', fontWeight: 'bold' }}>
                    {erro}
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Header />

            <section className={styles.hero}>
                <img src={icones.url} alt="icones" />
                <h1>Estude <span>livros</span> de forma inteligente</h1>
                <p>Explore resumos, análises e conteúdos para estudar melhor.</p>
                <button>Começar Agora</button>
            </section>

            <section className={styles.booksSection}>
                <h2>Explore os livros disponíveis</h2>

                <div className={styles.booksGrid}>
                    {livros.map((livro, index) => (
                        <Link
                            key={index}
                            to="/livro"
                            state={{ livro }}
                            className={styles.card}
                            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                        >
                            <img src={livro.capa} alt={livro.titulo} />
                            <h3>{livro.titulo}</h3>
                            <p>{livro.autor}</p>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Home;
