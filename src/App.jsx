import './style/App.css';

const membros = [
    { nome: 'Maria Eduarda Braga Ferreira', foto: '/public/img/maria.png' },
    { nome: 'Manuela Maestro', foto: '/public/img/manu.png' },
    { nome: 'Yasmin Isabele Porto', foto: '/public/img/porto.png' },
    { nome: 'Nicolly Rodrigues de Souza Santos', foto: '/public/img/nick.png' },
    { nome: 'Ana Beatriz de Souza Gomes', foto: '/public/img/bea.jpg' },
    { nome: 'Kaique Alves de Souza', foto: '/public/img/kaique.png' },
    { nome: 'Vinícius Machado de Souza', foto: '/public/img/viko.png' },
    { nome: ' Danilo Martins Silva', foto: '/public/img/danilo.png' },
    { nome: 'Rafaela Simonetti Trajano Silva', foto: '/public/img/rafa.png' },
    { nome: 'Pedro Moreira Garavalli', foto: '/public/img/pedro.png' },
    { nome: 'Emilio Henrique dos Santos Favoretto', foto: '/public/img/emilio.png' },
    { nome: 'João Pedro Rodrigues Stopiglia', foto: '/public/img/joao.png' },
    {nome:'Pedro Otávio Braga', foto: '/public/img/pedroo.png'}
];

function App() {
    return (
        <div className="container">
            <header className="header">
                <h1 className="logo">Bookly</h1>
                <nav>
                    <a href='#'>Home</a>
                    <a href='#'>Developers</a>
                    <a href='#'>Sobre</a>
                </nav>
            </header>

            <section className='title-section'>
                <h2>Sobre os integrantes</h2>
                <p>Conheça a equipe responsável pelo desenvolvimento da Bookly</p>
            </section>

            <section className='grid'>
                {membros.map((membro, index) => (
                    <div key={index} className='card'>
                        <img className='avatar' src={membro.foto} alt={membro.nome} />
                        <p>{membro.nome}</p>
                    </div>
                ))}
            </section>

            <section className='mascotes'>
                <div className='mascote azul'>
                    <img src="/public/img/Claudinho.png" alt='Claudinho' />
                    <p>Claudinho</p>
                </div>

                <div className='mascote laranja'>
                    <img src='/public/img/Claudinei.png' alt='Claudinei' />
                    <p>Claudinei</p>
                </div>
            </section>
        </div>
    );
}

export default App;
