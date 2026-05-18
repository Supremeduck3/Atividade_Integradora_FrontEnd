import styles from "../style/home.module.css";

import Header from "../components/header";
import Footer from "../components/footer";

const livros = [
    {
        id: 1,
        titulo: "Canção Para Ninar Menino Grande", autor: "Conceição Evaristo",
        capa: "/public/img/livro.png",
  },
    {
        id: 2,
        titulo: "A Moreninha",
        autor: "Joaquim Manuel de Macedo",
        capa: "/public/img/moreninha.png"
  },
    {
        id: 3,
        titulo: "Caminho de Pedras",
        autor: "Rachel de Queiroz",
        capa: "/public/img/caminho_das_pedras.png"
  },
    {
        id: 4,
        titulo: "Os Ratos",
        autor: "Dyonelio Machado",
        capa: "/public/img/ratos.png"
  },
];

function Home() {
    return (
        <div className={styles.container}>
            <Header />

            <section className={styles.hero}>
                <img src="/public/img/icones.png" alt='icones' />

                <h1>
                    Estude <span>livros</span> de forma inteligente
                </h1>

                <p>
                    Explore resumos, análises e conteúdos para estudar melhor.
                </p>

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
                        </div>))}
                </div>
            </section>

            <Footer />
            </div>
    );
}

export default Home;
