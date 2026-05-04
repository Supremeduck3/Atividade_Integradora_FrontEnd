import './style/App.css';

const membros = [
    { nome: 'Maria Eduarda Braga', foto: '/public/img/maria.png' },
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
