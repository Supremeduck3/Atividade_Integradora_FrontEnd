import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Header from "../../components/header/header";
import styles from './desenvolvedores.module.css';

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
  

    return (
        <div className={styles.container}>
            <Header />

            <section className={styles.titleSection}>
                <img src='/img/icones.png' alt='icones decorativos' />

                <h2>
                    sobre os <br />
                    <span className={styles.verde}>integrantes</span>
                </h2>

                <p>
                    Conheça a equipe responsável pelo desenvolvimento da Bookly
                </p>
            </section>

            <section className={styles.grid}>
                {membros.map((membro, index) => (
                    <div key={index} className={styles.card}>
                        <img
                            className={styles.avatar}
                            src={membro.foto}
                            alt={membro.nome}
                            />
                            <p>{membro.nome}</p>
                    </div>
                ))}
            </section>
            <Footer />
        </div>
    )
}

export default Developers;
