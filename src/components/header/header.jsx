import { useState, useEffect } from 'react';
import styles from './header.module.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
export default function Header() {
    const [logado, setLogado] = useState(false);
    const [dados, setDados] = useState(null);
    useEffect(() => {
        // 2. Função assíncrona dentro do useEffect
        async function carregarDados() {
            try {
                const api = await fetch('/api/exemplos/1');
                if (!api.ok) return;
                const json = await api.json(); // Adicionado o await aqui!
                // 3. Salvamos no estado em vez de manipular o DOM direto
                setDados(json);
                if (dados.data.logado === true) {
                    setLogado(true);
                }
            } catch (e) {
                console.error(e);
            }
        }
        carregarDados();
    }, []);
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Bookly</h1>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? styles['pagina_ativa'] : styles['pagina_desativa']
                    }>
                    Home
                </NavLink>
                <NavLink
                    to="/dev"
                    className={({ isActive }) =>
                        isActive ? styles['pagina_ativa'] : styles['pagina_desativa']
                    }>
                    Devs
                </NavLink>


        <NavLink
          to="/personagens"
          className={({ isActive }) =>
            isActive ? styles["pagina_ativa"] : styles
            ["pagina_desativa"]
          }
         >
         Personagens
        </NavLink>


        <NavLink
        to="/login"
        className={logado ? styles["logado"] : styles["naoLogado"]}
      >
        Sing in
      </NavLink>
      </nav>
    </header>
  );
}
