import { useEffect, useState } from 'react';

import styles from '../style/home.module.css';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function Home() {
    const [livros, setLivros] = useState([]);

    const [erro, setErro] = useState(null);

    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function carregarLivros() {
            try {
                const resposta = await fetch('/api/livros');

                const json = await resposta.json();

                setLivros(json.data);
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
        return <div>Carregando...</div>;
    }

    if (erro) {
        return <div>{erro}</div>;
    }

    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.hero}>
                <img src="/img/icones.png" alt="icones" />
                <h1>
                    Estude <span>livros</span> de forma inteligente{' '}
                </h1>

                <p>Explore resumos, análises e conteúdos para estudar melhor.</p>

                <button>Começar Agora</button>
            </section>

            <section className={styles.booksSection}>
                <h2>Explore os livros disponíveis</h2>

                <div className={styles.booksGrid}>
                    {livros.map((livro, index) => (
                        <div key={index} className={styles.card}>
                            <img src={livro.capa} alt={livro.titulo} />
                            <h3>{livro.titulo}</h3>

                            <p>{livro.autor}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Home;
