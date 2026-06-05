import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageProvider, useLang} from '../../contexts/LanguageContext';
import styles from "./questionarios.module.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Carregamento from "../../components/carregamento/carregamento";

// Configuração de cada API — mesma do Home.jsx
// Cada entrada representa um livro/quiz específico
const APIS = [
    
    {
        quizId: 2,
        titulo: 'Canção para Ninar Menino Grande',
        progresso: '1/5',
        url: 'https://atividade-portugues-backend.onrender.com/api/livro',
        apiKey: 'chaveSecreta',
    },
    {
        quizId: 3,
        titulo: 'A Moreninha',
        progresso: '2/5',
        url: 'https://clubelivro-backend.onrender.com/api/livros',
        apiKey: 'entreLinhas123',
    },
    {
        quizId: 4,
        titulo: 'Os Ratos',
        progresso: '3/5',
        url: 'https://ratsjs.onrender.com/api/livros',
        apiKey: 'Fq0CotClRneRPJAeCakJsrSwGyVCJU58tQrPWYgLCK3ei9HT-Ygajl2KXCLiZTPO',
    },
    {
        quizId: 5,
        titulo: 'Olhos da água',
        progresso: '4/5',
        url: 'https://olhosdagua.onrender.com/api/livro',
        apiKey:'6uztY7YTa2Dcgnf2ovDC2Kqmwvq2PdTMOlkx1bLwmhO2HQpQoXHMhk1cBcIjzHj9lztTbW7I83UZ91C8uSos-n8kOx3UuqU8n0BIDVm1venccSH0QVyNYKkLTZboaUpd',
    },
    {
        quizId: 6,
        titulo: 'Caminho das Pedras',
        progresso: '5/5',
        url: 'https://devstones-backend.onrender.com/api/livro/',
        apiKey: 'livr0',
    },
];


function extrairCapa(json) {
    // Formato: array direto
    if (Array.isArray(json) && json.length > 0) return json[0].capa;
    // Formato: { data: [...] }
    if (json?.data && Array.isArray(json.data) && json.data.length > 0) return json.data[0].capa;
    // Formato: { data: { capa } }
    if (json?.data?.capa) return json.data.capa;
    // Formato: { capa }
    if (json?.capa) return json.capa;
    return null;
}

function Questionarios() {
    const { lang, } = useLang();
    const [livros, setLivros] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function carregarCapas() {
            try {
                const respostas = await Promise.all(
                    APIS.map((api) =>
                        fetch(api.url, { headers: { "x-api-key": api.apiKey } })
                            .then((r) => r.json())
                            .catch(() => null)
                    )
                );

                const livrosComCapa = APIS.map((api, i) => ({
                    ...api,
                    capa: extrairCapa(respostas[i]),
                }));

                setLivros(livrosComCapa);
            } catch (e) {
                console.error("Erro ao carregar capas:", e);
                // Fallback: usa os dados sem capa
                setLivros(APIS.map((api) => ({ ...api, capa: null })));
            } finally {
                setCarregando(false);
            }
        }

        carregarCapas();
    }, []);

    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.content}>
                <div className={styles.box}>
                    <h1>
                        {lang === 'pt-BR' ? 'Questionários' : 'Questionnaires'}</h1>
                    <p>
                        {lang === 'pt-BR' ? 'Escolha um livro para começar seu quiz e testar seus conhecimentos.' : 'Choose a book to start your quiz and test your knowledge.'}</p>

                    {carregando ? (
                        <div style={{ display: "flex", justifyContent: "center", padding: "40px 0" }}>
                            <Carregamento />
                        </div>
                    ) : (
                        <div className={styles.booksGrid}>
                            {livros.map((livro) => (
                                <div key={livro.quizId} className={styles.card}>
                                    {livro.capa ? (
                                        <img
                                            src={livro.capa}
                                            alt={livro.titulo}
                                            className={styles.bookImage}
                                        />
                                    ) : (
                                        <div
                                            className={styles.bookImage}
                                            style={{
                                                background: "#e0e0e0",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#999",
                                                fontSize: "0.85rem",
                                            }}
                                        >
                                            {lang === 'pt-BR' ? 'Sem capa' : 'No cover'}
                                        </div>
                                    )}

                                    <div className={styles.cardContent}>
                                        <h2>{livro.titulo}</h2>
                                        <span>{lang === 'pt-BR' ? 'Progresso:' : 'Progress'} {livro.progresso}</span>
                                        <Link
                                            to={`/quiz/${livro.quizId}`}
                                            className={styles.botaoQuiz}
                                        >
                                            {lang === 'pt-BR' ? 'Iniciar quiz' : 'start quiz'}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Questionarios;
