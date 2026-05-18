import { useState, useEffect } from 'react';
import styles from './header.module.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
export default function Header() {
    const [logado, setLogado] = useState(false);
    const [dados, setDados] = useState(null);
    useEffect(() => {
        async function carregarDados() {
            try {
                const api = await fetch('/api/exemplos/1');
                if (!api.ok) return;
                const json = await api.json();
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


                <NavLink to="/login" className={logado ? styles['logado'] : styles['naoLogado']}>
                    Sing in
                </NavLink>

                <NavLink
                    to="/livros"
                    className={({ isActive }) =>
                        isActive ? styles['pagina_ativa'] : styles['pagina_desativa']
                    }>
                    Livros
                </NavLink>

                <NavLink to="/login" className={logado ? styles['logado'] : styles['naoLogado']}>
                    Sign in
                </NavLink>
            </nav>
        </header>
    );
}
