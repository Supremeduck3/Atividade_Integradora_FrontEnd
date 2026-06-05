import { Link } from 'react-router-dom';
import { LanguageProvider, useLang} from '../../contexts/LanguageContext';
import styles from './sobre.module.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

export default function Sobre() {
    const { lang, } = useLang();

    return (
        <div className={styles.tela}>
            <Header />

            <main className={styles.conteudo}>
                <section className={styles.secaoDestaque}>
                    <div className={styles.textoDestaque}>
                        <h1 className={styles.tituloDestaque}>
                            {lang === 'pt-BR' ? 'Aprofundando o vínculo entre a' : 'Deepening the bond between'}
                            {' '}
                            <span className={styles.corVerde}>
                                {lang === 'pt-BR' ? 'literatura' : 'Literature'}</span> {lang === 'pt-BR' ? 'e o' : 'and the'}{' '}
                            <span className={styles.corAzul}>{lang === 'pt-BR' ? ' Leitor' : ' reader'}</span>.
                        </h1>
                        <p className={styles.descricaoDestaque}>
                            {lang === 'pt-BR' ? 'Esse projeto nasceu da união entre SESI e SENAI com um objective claro: transformar a leitura dos livros obrigatórios dos vestibulares em umaexperiência mais leve e interativa. Unimos a tecnologia dodesenvolvimento web com a análise literária para criar um guia de estudos completo.' : ' This project was born from the partnership between SESI and SENAI with a clear objective: to transform the reading of mandatory university entrance exam books into a lighter and more interactive experience. We combined web development technology with literary analysis to create a complete study guide.'}
                            
                        </p>
                        <Link to="/dev" className={styles.botaoMembros}>
                            {lang === 'pt-BR' ? ' Ver Membros' : ' see members'}
                        </Link>
                    </div>
                    <div className={styles.ladoImagem}>
                        <div className={styles.blocoCinzaGrande}></div>
                    </div>
                </section>

                <section className={styles.secaoMissao}>
                    <div className={styles.ladoGrid}>
                        <div className={styles.containerGrid}>
                            <div className={`${styles.blocoGrid} ${styles.bloco1}`}></div>
                            <div className={`${styles.blocoGrid} ${styles.bloco2}`}></div>
                            <div className={`${styles.blocoGrid} ${styles.bloco3}`}></div>
                            <div className={`${styles.blocoGrid} ${styles.bloco4}`}></div>
                        </div>
                    </div>

                    <div className={styles.textoMissao}>
                        <h2 className={styles.tituloMissao}>
                            {lang === 'pt-BR' ? ' Nossa' : ' Our'} <span className={styles.corLaranja}>{lang === 'pt-BR' ? ' Missão' : 'Mission'}</span>:
                        </h2>
                        <p>
                            {lang === 'pt-BR' ? ' Nossa missão principal é facilitar a vida dos estudantes que estãoencarando a maratona dos vestibulares. Sabemos que entender o contextohistórico, os personagens e as críticas sociais de uma obra clássicapode ser um desafio. Por isso, estruturamos resumos detalhados, análisesprofundas e simulados práticos para dar aquele gás nos estudos.' : 'Our main mission is to make life easier for students facing the university entrance exam marathon. We know that understanding the historical context, characters, and social critiques of a classic work can be a challenge. That s why we have structured detailed summaries, in-depth analyses, and practical mock exams to give that extra boost to your studies.'}
                        </p>
                        <p>
                            {lang === 'pt-BR' ? ' Além disso, este site funciona como um espaço de colaboração entre asturmas. Através da integração de APIs, reunimos os trabalhos de váriasequipes em uma biblioteca centralizada, mostrando o poder da programaçãoem conectar conhecimentos de desenvolvimento de sistemas, línguaportuguesa e inglês.' : ' In addition, this website functions as a collaborative space between classes. Through API integration, we gather the work of multiple teams into a centralized library, showcasing the power of programming in connecting knowledge from systems development, Portuguese, and English.'}
                        </p>
                        <ul className={styles.listaMissao}>
                            <li>
                                <strong> 
                                    {lang === 'pt-BR' ? ' Foco no Vestibular:' : ' Focus on the Vestibular:'}</strong>
                                    {lang === 'pt-BR' ? ' Conteúdos direcionados para asprincipais questões e temas de redação.' : ' Content tailored to the main exam questions and essay topics.'} 
                            </li>
                            <li>
                                <strong>
                                    {lang === 'pt-BR' ? ' Tecnologia Avançada:' : ' Advanced Technology:'}</strong> 
                                    {lang === 'pt-BR' ? ' Sistema construído em React, Node.js e banco de dados PostgreSQL.' : ' System built with React, Node.js, and a PostgreSQL database.'}
                            </li>
                            <li>
                                <strong>
                                    {lang === 'pt-BR' ? ' Plataforma Bilíngue:' : ' Bilingual Platform:'}
                                    </strong> 
                                    {lang === 'pt-BR' ? ' Conteúdo totalmente adaptado para o inglês, sem traduções automáticas.' : ' Content fully adapted into English, without automatic translations.'}
                            </li>
                        </ul>
                    </div>
                </section>
            </main>

            {                                                                                                      }

            <Footer />
        </div>
    );
}
