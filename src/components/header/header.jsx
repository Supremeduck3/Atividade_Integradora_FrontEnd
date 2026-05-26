import { useState, useEffect } from 'react';
import styles from './header.module.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
export default function Header() {
    const [dados, setDados] = useState(null);
    const [erro, setErro] = useState(null);

    const logado = true
    useEffect(() => {
        async function carregarDados() {
            try {
                const api = await fetch(
                    'https://atividade-portugues-backend.onrender.com/api/upload/2/imagem',
                    {
                        headers: {
                            'x-api-key': 'chaveSecreta',
                        },
                    },
                );
                const json = await api.json();

                setDados(json);
            } catch (e) {
                setErro('Erro ao carregar os dados da equipe.');
                console.error(e);
            }
        }

        carregarDados();
    }, []);

    if (erro) return <div>{erro}</div>;
    if (!dados) return <div>Carregando...</div>;

    const img = dados.url;
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
                    to="/equipe"
                    className={({ isActive }) =>
                        isActive ? styles['pagina_ativa'] : styles['pagina_desativa']
                    }>
                    Equipe
                </NavLink>

                <NavLink to="/simulado" className={logado ? styles['logado'] : styles['naoLogado']}>
                    Simulado
                </NavLink>

                <NavLink
                    to="/videoaulas"
                    className={({ isActive }) =>
                        isActive ? styles['pagina_ativa'] : styles['pagina_desativa']
                    }>
                    Vídeo Aulas
                </NavLink>

                <NavLink to="/sobre" className={({ isActive }) =>
            isActive ? styles['pagina_ativa'] : styles['pagina_desativa']}>
                   Sobre
                </NavLink>
                <img src={img.url} classname={styles.imagem}></img>
            </nav>
        </header>
    );
}
