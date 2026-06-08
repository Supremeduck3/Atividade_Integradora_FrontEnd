import { useState } from 'react';
import { useLang } from '../../contexts/LanguageContext';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from './videos.module.css';

const VIDEO = {
    youtubeId: '_l313_z3W24',
    livroPt: 'Canção para Ninar Menino Grande',
    livroEn: 'Canção para Ninar Menino Grande',
    tituloPt: 'Conceição Evaristo — Escrevivência e Literatura Negra',
    tituloEn: 'Conceição Evaristo — Escrevivência and Black Literature',
    descricaoPt: 'Análise aprofundada da obra de Conceição Evaristo, explorando o conceito de escrevivência e a representação da mulher negra na literatura brasileira.',
    descricaoEn: "In-depth analysis of Conceição Evaristo's work, exploring the concept of escrevivência and the representation of Black women in Brazilian literature.",
    tag: 'Análise',
    tagEn: 'Analysis',
};

 function Videos() {
    const { lang } = useLang();
    const [tocando, setTocando] = useState(false);

    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.heroTexto}>
                        <span className={styles.badge}>
                            ▶ {lang === 'pt-BR' ? 'Conteúdo em Vídeo' : 'Video Content'}
                        </span>
                        <h1 className={styles.titulo}>
                            {lang === 'pt-BR' ? 'Vídeo' : 'Video'}{' '}
                            <span className={styles.destaque}>
                                {lang === 'pt-BR' ? 'Aulas' : 'Lessons'}
                            </span>
                        </h1>
                        <p className={styles.subtitulo}>
                            {lang === 'pt-BR'
                                ? 'Assista análises e aulas sobre os livros do vestibular.'
                                : 'Watch analyses and lessons about the exam books.'}
                        </p>
                    </div>
                    <div className={styles.heroDecoracao}>
                        <div className={styles.playGrande}>▶</div>
                    </div>
                </section>

                <div className={styles.card}>
                    <div className={styles.playerWrapper}>
                        {tocando ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${VIDEO.youtubeId}?autoplay=1&rel=0`}
                                title={lang === 'pt-BR' ? VIDEO.tituloPt : VIDEO.tituloEn}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className={styles.iframe}
                            />
                        ) : (
                            <div className={styles.thumbWrapper} onClick={() => setTocando(true)}>
                                <img
                                    src={`https://img.youtube.com/vi/${VIDEO.youtubeId}/maxresdefault.jpg`}
                                    alt={lang === 'pt-BR' ? VIDEO.tituloPt : VIDEO.tituloEn}
                                    className={styles.thumb}
                                />
                                <div className={styles.playOverlay}>
                                    <div className={styles.playBtn}>▶</div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={styles.cardInfo}>
                        <span className={styles.tag}>
                            {lang === 'pt-BR' ? VIDEO.tag : VIDEO.tagEn}
                        </span>
                        <h2 className={styles.cardTitulo}>
                            {lang === 'pt-BR' ? VIDEO.tituloPt : VIDEO.tituloEn}
                        </h2>
                        <p className={styles.cardDescricao}>
                            {lang === 'pt-BR' ? VIDEO.descricaoPt : VIDEO.descricaoEn}
                        </p>
                        <span className={styles.cardLivro}>
                            📖 {lang === 'pt-BR' ? VIDEO.livroPt : VIDEO.livroEn}
                        </span>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
export default Videos