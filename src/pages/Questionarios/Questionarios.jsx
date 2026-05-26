import { Link } from "react-router-dom";
import styles from "./questionarios.module.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
const livros = [
    {
        id: 1,
        titulo: 'Canção para Ninar Menino Grande',
        progresso: '2/5',
        capa: '/img/livro.png',
    },
    {
        id: 2,
        titulo: 'A Moreninha',
        progresso: '3/5',
        capa: '/img/moreninha.png',
    },
    {
        id: 3,
        titulo: 'Os Ratos',
        progresso: '5/5',
        capa: '/img/ratos.png',
    },
    {
        id: 4,
        titulo: 'Caminho das Pedras',
        progresso: '4/5',
        capa: 'img/caminho_das_pedras.png',
    },
];

function Questionarios() {
    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.content}>
                <div className={styles.box}>
                    <h1>Questionários</h1>

                    <p>
                        Escolha um livro para começar seu quiz e testar seus conhecimentos.
                    </p>

                    <div className={styles.booksGrid}>
                        {livros.map((livro) => (
                            <div
                                key={livro.id}
                                className={styles.card}
                            >

                                <img
                                    src={livro.capa}
                                    alt={livro.titulo}
                                    className={styles.bookImage}
                                />

                                <div className={styles.cardContent}>
                                    <h2>{livro.titulo}</h2>

                                    <span>
                                        Progresso: {livro.progresso}
                                    </span>

                                    <Link
                                     to={'/quiz/${livro.id}'}
                                     className={styles.botaoQuiz}
                                     >
                                          Iniciar Quiz
                                     </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Questionarios;
