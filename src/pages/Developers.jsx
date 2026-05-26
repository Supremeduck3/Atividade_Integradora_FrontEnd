import { useEffect, useState } from 'react';
import "../style/App.css";
import Footer from '../components/footer/footer';
import Header from "../components/header/header";

function Developers() {
    const [dados, setDados] = useState(null);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function carregarDados() {
            try {
                const api = await fetch("/api/equipe"); //ajustar a rota conforme beckend
                const json = await api.json();

                setDados(json);
            } catch (e) {
                setErro("Erro ao carregar os dados da equipe.");
                console.error(e);
            }
        }

        carregarDados();
    }, []);

    if (erro) return <div>{erro}</div>;
    if (!dados) return <div>Carregando...</div>

    const membros = dados.data.membros;
    const mascotes = dados.data.mascotes;

    return (
        <div className='container'>
            <Header />

            <section className='title-section'>
                <img src='/img/icones.png' alt='icones decorativos' />

                <h2>
                    sobre os <br />
                    <span className='verde'>integrantes</span>
                </h2>

                <p>
                    Conheça a equipe responsável pelo desenvolvimento da Bookly
                </p>
            </section>

            <section className='grid'>
                {membros.map((membro, index) => (
                    <div key={index} className='card'>
                        <img
                            className='avatar'
                            src={membro.foto}
                            alt={membro.nome}
                            />
                            <p>{membro.nome}</p>
                    </div>
                ))}
            </section>

            <section className='mascotes'>
    {mascotes.map((mascote, index) => (
        <div key={index} className={`mascote ${mascote.cor}`}>
            <img
                className='avatar'
                src={mascote.foto}
                alt={mascote.nome}
            />
            <p>{mascote.nome}</p>
            </div>
            ))}
            </section>

            <section className='mascotes'>
                {mascotes.map((mascote, index) => (
                <div key={index} className={`mascote ${mascote.cor}`}>
                <p>{mascote.nome}</p>
                    </div>
                ))}
            </section>

            <Footer />
        </div>
    )
}

export default Developers;
