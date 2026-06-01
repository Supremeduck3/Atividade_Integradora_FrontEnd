import { useLocation, Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from './livroPrincipal.module.css';

function LivroPrincipal() {
    const { state } = useLocation();
    const livro = state?.livro;

    if (!livro) {
        return (
            <div className={styles.container}>
                <Header />
                <main className={styles.main_content} style={{ textAlign: 'center' }}>
                    <p style={{ color: '#999', marginBottom: '20px' }}>Nenhum livro selecionado.</p>
                    <Link
                        to="/"
                        style={{ color: '#ff5a00', fontWeight: 'bold', textDecoration: 'none' }}>
                        ← Voltar para a Home
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    const dadosExtras = {
        contextoHistorico: livro.contexto ?? 'Contexto histórico não informado para este livro.',
        tagsPeriodo: livro.anoPublicacao ? [`Ano ${livro.anoPublicacao}`] : ['Não informado'],
    };

    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.main_content}>
                <Link to="/" className={styles.btn_voltar}>
                    ← Voltar
                </Link>

                <section className={styles.book_section}>
                    <div className={styles.image_container}>
                        <img src={livro.capa} alt={livro.titulo} className={styles.capa_livro} />
                    </div>

                    <div className={styles.info_container}>
                        <h1 className={styles.titulo}>{livro.titulo}</h1>

                        {livro.autor && (
                            <p className={styles.autor}>
                                Por: <span>{livro.autor}</span>
                            </p>
                        )}

                        <div className={styles.rating_container}>
                            <span className={styles.stars}>☆☆☆☆☆</span>
                        </div>

                        <p className={styles.sinopse_curta}>
                            {livro.resumo
                                ? `${livro.resumo.substring(0, 180)}...`
                                : 'Sem resumo disponível.'}
                        </p>

                        <button className={styles.btn_avaliar}>
                            <span className={styles.seta}>→</span> Avaliar O Livro
                        </button>
                    </div>
                </section>

                <section className={styles.resumos_grid}>
                    <div className={styles.card_resumo_completo}>
                        <div className={styles.card_header}>
                            <span className={styles.marcador_laranja}></span>
                            <span className={styles.icon_resumo}>🔖</span>
                            <h2>Resumo Completo</h2>
                        </div>

                        <p className={styles.texto_resumo}>
                            {livro.resumo ?? 'Nenhum resumo detalhado disponível.'}
                        </p>

                    </div>
                </section>

                <section className={styles.contexto_section}>
                    <div className={styles.contexto_info}>
                        <div className={styles.detalhe_linha_branca}></div>
                        <h2>Contexto Histórico</h2>

                        <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                            {dadosExtras.contextoHistorico}
                        </p>

                        <div className={styles.tags_grid}>
                            {dadosExtras.tagsPeriodo.map((tag, idx) => (
                                <div key={idx} className={styles.tag_card}>
                                    <span className={styles.tag_ano}>{tag}</span>
                                    <span className={styles.tag_legenda}>
                                        Período de referência
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default LivroPrincipal;
