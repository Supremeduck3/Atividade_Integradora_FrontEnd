import styles from './header.module.css';
import Carregamento from '../carregamento/carregamento';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
export default function Header() {
    const logado = true;

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
                    Equipe
                </NavLink>

                <NavLink to="/login" className={logado ? styles['logado'] : styles['naoLogado']}>
                    Questionarios
                </NavLink>

                <NavLink
                    to="/questionarios"
                    className={({ isActive }) =>
                        isActive ? styles['pagina_ativa'] : styles['pagina_desativa']
                    }>
                    Quiz
                </NavLink>
                <NavLink
                    to="/personagens"
                    className={({ isActive }) =>
                        isActive ? styles['pagina_ativa'] : styles['pagina_desativa']
                    }>
                    Personagens
                </NavLink>

                <NavLink
                    to="/sobre"
                    className={({ isActive }) =>
                        isActive ? styles['pagina_ativa'] : styles['pagina_desativa']
                    }>
                    Sobre
                </NavLink>
                <NavLink to="/login" className={styles.signin_btn}>
                    Login
                </NavLink>
            </nav>
        </header>
    );
}
