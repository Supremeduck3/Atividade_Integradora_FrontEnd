import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LanguageProvider, useLang} from '../../contexts/LanguageContext';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from './detalhePersonagem.module.css';

const API_URL = "https://atividade-portugues-backend.onrender.com";
const API_KEY = "chaveSecreta";

function DetalhePersonagem() {
    const { lang, } = useLang();
    const { id } = useParams();
    const [personagem, setPersonagem] = useState(null);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function carregarPersonagem() {
            try {
                const response = await fetch(`${API_URL}/api/upload/adicionar/${id}`, {
                    headers: {
                        "x-api-key": API_KEY,
                    },
                    cache:"no-cache",
                });

                const json = await response.json();

                // retorna { data: { id, foto, descricao } }
                setPersonagem(json.data);
            } catch (e) {
                setErro("Erro ao carregar os dados do personagem");
                console.error(e);
            }
        }
        carregarPersonagem();
    }, [id]);

    if (erro) return <div>{erro}</div>;
    if (!personagem) return <div>Carregando...</div>;

    return (
        <div className={styles.pagina_completa}>
            <Header />
            <main className={styles.conteudo_detalhe}>
                <Link to="/personagens" className={styles.btn_voltar}>
                    {lang === 'pt-BR' ? '← Voltar' : '← Go back'}
                </Link>
                <div className={styles.layout_detalhe}>
                    <div className={styles.detalhe_foto}>
                        <img src={personagem.foto} alt={personagem.descricao} />
                    </div>
                    <div className={styles.detalhe_info}>
                        <span className={styles.obra_tag}>{lang === 'pt-BR' ? 'Canção para Ninar Menino Grande' : 'Lullaby for a Big Boy'}</span>
                        <h1>{personagem.descricao}</h1>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default DetalhePersonagem;
