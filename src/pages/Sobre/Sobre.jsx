
import { Link } from 'react-router-dom';
import styles from './sobre.module.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

export default function Sobre() {
  return (
      <div className={styles.tela}>
          <Header/>

      <main className={styles.conteudo}>
        <section className={styles.secaoDestaque}>
          <div className={styles.textoDestaque}>
            <h1 className={styles.tituloDestaque}>
              Aprofundando o vínculo entre a <span className={styles.corVerde}>literatura</span> e o <span className={styles.corAzul}>leitor</span>.
            </h1>
            <p className={styles.descricaoDestaque}>
              Esse projeto nasceu da união entre SESI e SENAI com um objetivo claro: transformar a leitura dos livros obrigatórios dos vestibulares em uma experiência mais leve e interativa. Unimos a tecnologia do desenvolvimento web com a análise literária para criar um guia de estudos completo.
            </p>
           <Link to="/dev" className={styles.botaoMembros}>
              Ver Membros
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
              Nossa <span className={styles.corLaranja}>Missão</span>:
            </h2>
            <p>
              Nossa missão principal é facilitar a vida dos estudantes que estão encarando a maratona dos vestibulares. Sabemos que entender o contexto histórico, os personagens e as críticas sociais de uma obra clássica pode ser um desafio. Por isso, estruturamos resumos detalhados, análises profundas e simulados práticos para dar aquele gás nos estudos.
            </p>
            <p>
              Além disso, este site funciona como um espaço de colaboração entre as turmas. Através da integração de APIs, reunimos os trabalhos de várias equipes em uma biblioteca centralizada, mostrando o poder da programação em conectar conhecimentos de desenvolvimento de sistemas, língua portuguesa e inglês.
            </p>
            <ul className={styles.listaMissao}>
              <li>
                <strong>Foco no Vestibular:</strong> Conteúdos direcionados para as principais questões e temas de redação.
              </li>
              <li>
                <strong>Tecnologia Avançada:</strong> Sistema construído em React, Node.js e banco de dados PostgreSQL.
              </li>
              <li>
                <strong>Plataforma Bilíngue:</strong> Conteúdo totalmente adaptado para o inglês, sem traduções automáticas.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className={styles.rodape}>
        <div className={styles.rodapeEsquerda}>
          <div className={styles.logoRodape}>Bookly</div>
          <p>© 2026 Bookly Education. All rights Reserved.</p>
          <p>Tornando o conhecimento acessível para todos.</p>
        </div>
        <div className={styles.rodapeCentro}>
          <span>Termos de serviço</span>
          <span>Contato</span>
          <span>Sobre</span>
        </div>
        <div className={styles.rodapeDireita}>
          <div className={styles.iconeSocial}></div>
          <div className={styles.iconeSocial}></div>
        </div>
      </footer>
    </div>
  );
}
