import "../style/App.css";

const membros = [
    { nome: 'Maria Eduarda Braga Ferreira', foto: '/img/maria.png' },
    { nome: 'Manuela Maestro', foto: '/img/manu.png' },
    { nome: 'Yasmin Isabele Porto', foto: '/img/porto.png' },
    { nome: 'Nicolly Rodrigues de Souza Santos', foto: '/img/nick.png' },
    { nome: 'Ana Beatriz de Souza Gomes', foto: '/img/bea.jpg' },
    { nome: 'Kaique Alves de Souza', foto: '/img/kaique.png' },
    { nome: 'Vinícius Machado de Souza', foto: '/img/viko.png' },
    { nome: 'Danilo Martins Silva', foto: '/img/danilo.png' },
    { nome: 'Rafaela Simonetti Trajano Silva', foto: '/img/rafa.png' },
    { nome: 'Pedro Moreira Garavalli', foto: '/img/pedro.png' },
    { nome: 'Emilio Henrique dos Santos Favoretto', foto: '/img/emilio.png' },
    { nome: 'João Pedro Rodrigues Stopiglia', foto: '/img/joao.png' },
    { nome: 'Pedro Otávio Braga', foto: '/img/pedroo.png' },
];

function Home() {
    return (
        <div className="container">
            <header className="header">
                <h1 className="logo">Bookly</h1>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Developers</a>
                    <a href="#">Sobre</a>
                </nav>

                <a href="/login" className="signin-btn">
                    Sign in
                </a>
            </header>

            <section className="title-section">
                <img src="/img/icones.png" alt="icones decorativos" />

                <h2>
                    Sobre os <br />
                    <span className="verde">integrantes</span>
                </h2>

                <p>
                    Conheça a equipe responsável pelo desenvolvimento da Bookly
                </p>
            </section>

            <section className="grid">
                {membros.map((membro, index) => (
                    <div key={index} className="card">
                        <img
                            className="avatar"
                            src={membro.foto}
                            alt={membro.nome}
                        />

                        <p>{membro.nome}</p>
                    </div>
                ))}
            </section>

            <section className="mascotes">
                <div className="mascote azul">
                    <img src="/img/Claudinho.png" alt="Claudinho" />
                    <p>Claudinho</p>
                </div>

                <div className="mascote laranja">
                    <img src="/img/Claudinei.png" alt="Claudinei" />
                    <p>Claudinei</p>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">

                    <div className="footer-left">
                        <h3>Bookly</h3>

                        <p>© 2026 Bookly Education. All rights reserved.</p>

                        <p>
                            Tornando o conhecimento acessível para todos.
                        </p>
                    </div>

                    <div className="footer-center">
                        <a href="#">Termos de serviço</a>
                        <a href="#">Contato</a>
                        <a href="#">Sobre</a>
                    </div>

                    <div className="footer-right">
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>

                </div>
            </footer>
        </div>
    );
}

export default Home;