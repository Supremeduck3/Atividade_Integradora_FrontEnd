import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './../style/personagens.module.css';

function DetalhePersonagem() {
    const { id } = useParams();

    const [dados, setDados] = useState(null);
    const [erro, setErro] = useState(null); 

    useEffect(() => {
        async function carregarDados() {
            try {
                const api = await fetch(`/api/personagens/${id}`); // ajusta a rota do back
                const json = await api.json();

                setDados(json);
            } catch (e) {
                setErro("Erro ao carregar os dados do personagem");
                console.error(e);
            }
            }

            carregarDados();
        }, [id]);

        if (erro) return <div>{erro}</div>;
        if (!dados) return <div>Carregando...</div>

        const personagem = dados.data;

        return (
            <div className={styles.pagina_completa}>
                <Header />
                <main className={styles.conteudo_detalhe}>
                    <Link to="/personagens" className="btn-voltar">
                    </Link>
                    <div className={styles.layout_detalhe}>
                        <div className={styles.detalhe_foto}>
                            <img src={personagem.imagem} alt={personagem.nome} />
                        </div>
                        <div className={styles.detalhe_info}>
                            <span classnAME={styles.obra_tag}>{personagem.obra}</span>
                            <h1>{personagem.nome}</h1>
                            <p className={styles.texto_detalhado}>{personagem.detalhes}</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
};

export default DetalhePersonagem;



