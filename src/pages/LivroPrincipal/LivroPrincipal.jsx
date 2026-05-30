import { useLocation, Link } from 'react-router-dom';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./livroPrincipal.module.css";

function LivroPrincipal() {
  const { state } = useLocation();
  const livro = state?.livro;

  // Se o usuário acessar /livro diretamente sem vir da Home
  if (!livro) {
    return (
      <div className={styles.container}>
        <Header />
        <main className={styles.main_content} style={{ textAlign: 'center' }}>
          <p style={{ color: '#999', marginBottom: '20px' }}>
            Nenhum livro selecionado.
          </p>
          <Link to="/" style={{ color: '#ff5a00', fontWeight: 'bold', textDecoration: 'none' }}>
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
        <Link to="/" className={styles.btn_voltar} style={{
          display: 'inline-block',
          marginBottom: '24px',
          color: '#ff5a00',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}>
          ← Voltar
        </Link>

        <section className={styles.book_section}>
          <div className={styles.image_container}>
            <img
              src={livro.capa}
              alt={livro.titulo}
              className={styles.capa_livro}
            />
          </div>

          <div className={styles.info_container}>
            <h1 className={styles.titulo}>{livro.titulo}</h1>

            {livro.autor && (
              <p style={{ color: '#ff5a00', fontWeight: 'bold', marginBottom: '16px', fontSize: '1.1rem' }}>
                {livro.autor}
              </p>
            )}

            {(livro.resumo || livro.sinopse) && (
              <p className={styles.resumo}>
                {livro.resumo ?? livro.sinopse}
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default LivroPrincipal;