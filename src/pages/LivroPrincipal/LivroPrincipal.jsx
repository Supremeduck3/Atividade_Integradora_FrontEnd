import { useLocation, Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from './livroPrincipal.module.css';

function LivroPrincipal() {
    const { state } = useLocation();
    const livro = state?.livro;

    const dadosExtras = {
        contextoHistorico:
            'Canção para Ninar Menino Grande, romance lançado por Conceição Evaristo em 2018, investiga as complexas contradições do afeto e da masculinidade negra no Brasil contemporâneo. A narrativa acompanha a trajetória de Fio Jasmim, um ferroviário que cruza o país deixando um rastro de paixões e abandonos, encarnando o mito do "Príncipe Negro" e do sedutor invulnerável. No entanto, o verdadeiro núcleo histórico e social da obra reside na desconstrução desse arquétipo, revealing como a herança do patriarcado e do machismo molda o comportamento dos homens negros, muitas vezes hipersexualizados pelo racismo estrutural. O livro desloca o foco do conquistador para dar voz e profundidade às diversas mulheres que cruzaram o seu caminho, transformando o enredo em uma crônica densa sobre a solidariedade, a dor e a resiliência feminina diante da solidão e da rejeição amorosa.',
        tagsPeriodo: ['Anos 70 - 80'],
    };

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
                            {livro.resumo_curto ??
                                'Canção para Ninar Menino Grande é uma novela publicada originalmente em 2018 pela editora Unipalmares, escrita por Conceição Evaristo, que explora profundamente questões de gênero, raça e relações afetivas.'}
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
                            {livro.resumo_longo ??
                                'Canção para ninar menino grande, de Conceição Evaristo, narra a trajetória de Fio Jasmim, um homem negro sedutor que, ao trabalhar na ferrovia, coleciona amores e abandonos entre diversas mulheres. A obra, pautada na escrevivência, foca na subjetividade dessas mulheres negras, revelando suas dores e o processo de cura e sororidade após o abandono do protagonista. O enredo desconstrói o mito da masculinidade ao evidenciar a covardia emocional do protagonista, focando na superação feminina e no cuidado mútuo.'}
                        </p>
                    </div>
                </section>

                <section className={styles.contexto_section}>
                    <div className={styles.contexto_info}>
                        <div className={styles.detalhe_linha_branca}></div>
                        <h2>Contexto Histórico</h2>
                        <p>{dadosExtras.contextoHistorico}</p>

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

                    <div className={styles.contexto_midia}></div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default LivroPrincipal;
