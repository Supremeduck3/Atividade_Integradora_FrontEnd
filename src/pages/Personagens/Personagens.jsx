import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageProvider, useLang} from '../../contexts/LanguageContext';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./personagens.module.css";
import Carregamento from "../../components/carregamento/carregamento";
const API_URL = "https://atividade-portugues-backend.onrender.com";
const API_KEY = "chaveSecreta";

function PaginaPersonagens() {
    const { lang, } = useLang();
    const [personagens, setPersonagens] = useState([]);
    const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarPersonagens() {
      try {
        const response = await fetch(`${API_URL}/api/upload/adicionar`, {
          headers: {
                "x-api-key": API_KEY,
            },
            cache:"no-cache",
        });

        const json = await response.json();

        const primeiros = json.filter((p) => p.id <= 6);
        setPersonagens(primeiros);
      } catch (e) {
        setErro("Erro ao carregar os personagens");
        console.error(e);
      }
    }

    carregarPersonagens();
  }, []);

  if (erro) return <div>{erro}</div>;
  if (!personagens.length) return ;

  return (
      <div className={styles.pagina_completa}>
          <Header />

          <main className={styles.conteudo_personagens}>
              <div className={styles.banner_personagens}>
                  <img
                      src="/img/icones.png"
                      alt="Decorativo"
                      className={styles.formas_decorativas}
                  />
                  <div className={styles.titulo_obra}>
                      <h2>
                        {lang === 'pt-BR' ? 'Canção para Ninar' : 'Lullaby'}</h2>
                      <h2 className={styles.destaque_laranja}>
                        {lang === 'pt-BR' ? 'Menino Grande' : 'for a Big Boy'}</h2>
                  </div>
                  <h1>{lang === 'pt-BR' ? 'Personagens' : 'Characters'}</h1>
              </div>

              <div className={styles.grid_personagens}>
                  {personagens.map((p) => (
                      <div key={p.id} className={styles.card_personagem}>
                          <div className={styles.foto_container}>
                              <img
                                  src={`${p.foto}?v=${p.updated_at ? encodeURIComponent(p.updated_at) : p.id}`}
                                  alt={p.descricao}
                                  className={
                                      p.descricao === 'Pérola Maria' || p.descricao === 'Irene'
                                          ? styles.foto_ajustada
                                          : ''
                                  }
                              />
                          </div>
                          <div className={styles.info_personagem}>
                              <h3>{p.descricao}</h3>

                              <Link to={`/personagem/${p.id}`} className={styles.btn_ler_sobre}>
                                  {lang === 'pt-BR' ? 'Ler sobre' : 'Read about'} <span className={styles.seta}>→</span>
                              </Link>
                          </div>
                      </div>
                  ))}
              </div>
          </main>

          <Footer />
      </div>
  );
}

export default PaginaPersonagens;
