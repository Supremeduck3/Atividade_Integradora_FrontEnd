import { useEffect, useState } from 'react';
import { LanguageProvider, useLang } from '../../contexts/LanguageContext';
import Footer from '../../components/footer/footer';
import Header from "../../components/header/header";
import styles from './desenvolvedores.module.css';
import Carregamento from '../../components/carregamento/carregamento';
const ICONES_URL = "https://atividade-portugues-backend.onrender.com/api/upload/19/imagem";
const ICONES_API_KEY = "chaveSecreta";

const APIS_MEMBROS = [
    {
        url: "https://atividade-portugues-backend.onrender.com/api/upload/adicionar",
        key: "chaveSecreta",
    },

];

function Developers() {
    const { lang, } = useLang();
    const [membros, setMembros] = useState([]);
    const [icones, setIcones] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
    async function carregarDados() {
        try {
            // membros
            const respostasMembros = await Promise.all(
                APIS_MEMBROS.map((api) =>
                    fetch(api.url, { headers: { "x-api-key": api.key } })
                )
            );
            const jsonsMembros = await Promise.all(
                respostasMembros.map((r) => r.json())
            );
            const equipe = jsonsMembros.flat().filter((i) => i.id >= 7 && i.id <= 18);
            setMembros(equipe);


            if (ICONES_URL) {
                const respostaIcones = await fetch(ICONES_URL, {
                    headers: { "x-api-key": ICONES_API_KEY },
                });
                const jsonIcones = await respostaIcones.json();
                setIcones(jsonIcones);
            }

        } catch (e) {
            setErro("Erro ao carregar os dados da equipe.");
            console.error(e);
        } finally {
            setCarregando(false);
        }
    }

    carregarDados();
}, []);

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
    if (erro) return <div>{erro}</div>;

    return (
        <div className={styles.container}>
            <Header />

            <section className={styles.titleSection}>
                {icones && (
                    <img src={icones.url} alt='icones decorativos' />
                )}
                <h2>
                    {lang === 'pt-BR' ? 'Sobre os' : 'About the'} <br />
                    <span className={styles.verde}>{lang === 'pt-BR' ? 'Integrantes' : 'Integrants'}</span>
                </h2>

                <p>
                    {lang === 'pt-BR' ? 'Conheça a equipe responsável pelo desenvolvimento da Bookly' : 'Meet the team behind development Bookly'}
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
