import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLang } from '../../contexts/LanguageContext';
import styles from './home.module.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Carregamento from '../../components/carregamento/carregamento';

const ICONES_URL = 'https://atividade-portugues-backend.onrender.com/api/upload/19/imagem';
const ICONES_API_KEY = 'chaveSecreta';

const FONTES_ORIGINAIS = [
    { url: 'https://atividade-portugues-backend.onrender.com/api/livro', apiKey: 'chaveSecreta' },
    { url: 'https://ratsjs.onrender.com/api/livros', apiKey: 'Fq0CotClRneRPJAeCakJsrSwGyVCJU58tQrPWYgLCK3ei9HT-Ygajl2KXCLiZTPO' },
    { url: 'https://clubelivro-backend.onrender.com/api/livros', apiKey: 'entreLinhas123' },
    { url: 'https://olhosdagua.onrender.com/api/livro', apiKey: '6uztY7YTa2Dcgnf2ovDC2Kqmwvq2PdTMOlkx1bLwmhO2HQpQoXHMhk1cBcIjzHj9lztTbW7I83UZ91C8uSos-n8kOx3UuqU8n0BIDVm1venccSH0QVyNYKkLTZboaUpd' },
    { url: 'https://devstones-backend.onrender.com/api/livro/', apiKey: 'livr0' },
];

const FONTES_BIBLIOTECA = [
    {
        id: 7,
        url: 'https://readflow-m8o6.onrender.com/api/livros',
        apiKey: 'capitaes123',
        authHeader: 'x-api-key'
    },
    {
        id: 8,
        url: 'https://bookpedia-backend-4ab3.onrender.com/livros',
        apiKey: 'guarani123',
        authHeader: 'x-api-key'
    },
    {
        id: 9,
        url: 'https://backend-projeto-integrador-rana.onrender.com/api/livro',
        apiKey: null,
        authHeader: 'x-api-key'
    },
    {
        id: 10,
        url: 'https://projeto-clubyx.onrender.com/livros',
        apiKey: 'clubyx123',
        authHeader: 'x-api-key'
    },
];

function extrairLivro(json, lang) {
    if (!json) return null;
    const dados = json.data ?? json;
    const livro = Array.isArray(dados) ? dados[0] : dados;
    
    if (!livro) return null;

    return {
        ...livro,
        titulo: lang === 'pt-BR' 
            ? (livro.tituloPT || livro.titulo || livro.nomeLivro) 
            : (livro.tituloEN || livro.titulo_en || livro.titulo || livro.nomeLivro),
        autor: livro.autor || livro.nomeAutor || 'Autor Desconhecido',
        capa: livro.capaURl || livro.capaUrl || livro.capa || livro.urlCapa || 'vazio',
        resumo: lang === 'pt-BR'
            ? (livro.resumo || livro.descricaoPT || livro.descricao || livro.sinopse)
            : (livro.resumo_en || livro.descricaoEN || livro.descricao_en || livro.sinopse_en || livro.resumo || livro.descricaoPT),
        contexto: lang === 'pt-BR'
            ? (livro.contexto || livro.contextoHistoricoPT || livro.contextoHistorico)
            : (livro.contexto_en || livro.contextoHistoricoEN || livro.contextoHistorico_en || livro.contexto || livro.contextoHistoricoPT)
    };
}

function Home() {
    const { lang } = useLang();
    const [livros, setLivros] = useState([]);
    const [erro, setErro] = useState(null);
    const [icones, setIcones] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function carregarDados() {
            try {
                setCarregando(true);

                const fetchComTimeout = (url, options, timeout = 5000) => {
                    return Promise.race([
                        fetch(url, options),
                        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))
                    ]);
                };

                const promisesOriginais = FONTES_ORIGINAIS.map(fonte => 
                    fetchComTimeout(`${fonte.url}?lang=${lang}`, {
                        headers: { 'x-api-key': fonte.apiKey }
                    }).then(r => r.ok ? r.json() : null).catch(() => null)
                );

                const promisesBiblioteca = FONTES_BIBLIOTECA.map(fonte => {
                    const headers = { 'Accept': 'application/json' };
                    if (fonte.apiKey) headers[fonte.authHeader] = fonte.apiKey;
                    return fetchComTimeout(`${fonte.url}?lang=${lang}`, { headers })
                        .then(r => r.ok ? r.json() : null)
                        .catch(() => null);
                });

                const [resOriginais, resBiblioteca, resIcones] = await Promise.all([
                    Promise.all(promisesOriginais),
                    Promise.all(promisesBiblioteca),
                    fetchComTimeout(ICONES_URL, { headers: { 'x-api-key': ICONES_API_KEY } }).then(r => r.ok ? r.json() : null).catch(() => null)
                ]);

                setIcones(resIcones);

                const listaLivros = [
                    ...resOriginais.map(j => extrairLivro(j, lang)),
                    ...resBiblioteca.map(j => extrairLivro(j, lang))
                ].filter(l => l && (l.titulo || l.capa !== 'vazio'));

                setLivros(listaLivros);
            } catch (e) {
                console.error(e);
                setErro('Erro ao carregar livros');
            } finally {
                setCarregando(false);
            }
        }

        carregarDados();
    }, [lang]);

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
                {icones && <img src={icones.url} alt="icones" />}
                <h1>
                    {lang === 'pt-BR' ? 'Estude' : 'Study'}{' '}
                    <span>{lang === 'pt-BR' ? 'livros' : 'books'}</span>{' '}
                    {lang === 'pt-BR' ? ' de forma inteligente' : ' In a smart way'}
                </h1>
                <p>
                    {lang === 'pt-BR'
                        ? 'Explore resumos, análises e conteúdos para estudar melhor'
                        : 'Explore summaries, analyses, and learning materials to improve your study habits.'}
                </p>
                <NavLink
                    to="/questionarios"                
                className={styles.buttonstart}>
                    {lang === 'pt-BR' ? 'Começar agora' : 'start now'}
                </NavLink>
            </section>

            <section className={styles.booksSection}>
                <h2>{lang === 'pt-BR' ? 'Explore os livros disponíveis' : 'Explore the available books'}</h2>

                <div className={styles.booksGrid}>
                    {livros.map((livro, index) => (
                        <Link
                            key={index}
                            to="/livro"
                            state={{ livro }}
                            className={styles.card}
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