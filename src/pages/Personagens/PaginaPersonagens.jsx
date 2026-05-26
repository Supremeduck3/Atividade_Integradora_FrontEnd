import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./../style/personagens.module.css";

function PaginaPersonagens() {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarDados() {
      try {
        const api = await fetch("/api/personagens");
        const json = await api.json();

        setDados(json);
      } catch (e) {
        setErro("Erro ao carregar os personagens");
        console.error(e);
      }
    }

    carregarDados();
  }, []);

  if (erro) return <div>{erro}</div>;
  if (!dados) return <div>Carregando...</div>;

  const personagens = dados.data.personagens;

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
            <h2>Canção para Ninar</h2>
            <h2 className={styles.destaque_laranja}>Menino Grande</h2>
          </div>
          <h1>Personagens</h1>
        </div>

        <div className={styles.grid_personagens}>
          {personagens.map((p, index) => (
            <div key={index} className={styles.card_personagem}>
              <div className={styles.foto_container}>
                <img
                  src={p.capa} // vem do backend
                  alt={p.nome}
                  className={
                    p.nome === "Pérola Maria" || p.nome === "Irene"
                      ? "foto-ajustada"
                      : ""
                  }
                />
              </div>
              <div className={styles.info_personagem}>
                <h3>{p.nome}</h3>
                <p>{p.resumo}</p>

                <Link
                  to={`/personagem/${p.nome}`}
                  className={styles.btn_ler_sobre}
                >
                  Ler Sobre <span className={styles.seta}>→</span>
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
