import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Header from "../../components/header/header";
import styles from './desenvolvedores.module.css';

const API_URL = "https://atividade-portugues-backend.onrender.com";
const API_KEY = "chaveSecreta";

function Developers() {
    const [membros, setMembros] = useState([]);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function carregarMembros() {
            try {
                const response = await fetch(`${API_URL}/api/upload/adicionar`, {
                    headers: {
                        "x-api-key": API_KEY,
                    },
                });

                const json = await response.json();

                // filtra IDs 7 a 18 que são os membros da equipe
                const equipe = json.filter((item) => item.id >= 7 && item.id <= 18);
                setMembros(equipe);
            } catch (e) {
                setErro("Erro ao carregar os dados da equipe.");
                console.error(e);
            }
        }

        carregarMembros();
    }, []);

    if (erro) return <div>{erro}</div>;
    if (!membros.length) return <div>Carregando...</div>;

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
                {membros.map((membro) => (
                    <div key={membro.id} className={styles.card}>
                        <img
                            className={styles.avatar}
                            src={membro.foto}
                            alt={membro.descricao}
                        />
                        <p>{membro.descricao}</p>
                    </div>
                ))}
            </section>

            <Footer />
        </div>
    );
}

export default Developers;