import { useEffect, useState } from 'react';
import Header from "../../components/header/header";
import Footer from "../components/footer";
import styles from "../style/home.module.css";

function LivroPrincipal() {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarDados() {
      try {
        const api = await fetch("/api/exemplos/1");
        const json = await api.json();
        setDados(json);
      } catch (e) {
        setErro("Erro ao carregar");
        console.error(e);
      }
    }

    carregarDados();
  }, []);

  if (erro) return (
    <div className={styles.container}>
      <Header />
      <main style={{ padding: '50px', textAlign: 'center' }}>{erro}</main>
      <Footer />
    </div>
  );

  if (!dados) return (
    <div className={styles.container}>
      <Header />
      <main style={{ padding: '50px', textAlign: 'center' }}>Carregando...</main>
      <Footer />
    </div>
  );

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main_content} style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>

          <div style={{ flex: '1', minWidth: '300px' }}>
            <img
              src={dados.data.capa}
              alt={dados.data.titulo}
              style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
            />
          </div>

          <div style={{ flex: '2', minWidth: '300px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{dados.data.titulo}</h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#444', marginBottom: '20px' }}>
              {dados.data.resumo}
            </p>

            <button style={{
              padding: '15px 30px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              Confirmar Leitura
            </button>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default LivroPrincipal;
