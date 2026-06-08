
import { LiaLanguageSolid } from 'react-icons/lia';
import Carregamento from '../carregamento/carregamento';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { LanguageProvider, useLang } from '../../contexts/LanguageContext';
import styles from './header.module.css';

export default function Header() {
    const { lang, toggleLang } = useLang();



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
                    {lang === 'pt-BR' ? 'Equipe' : 'Team'}
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
                    {lang === 'pt-BR' ? 'Personagens' : 'Characters'}
                </NavLink>

                <NavLink
                    to="/sobre"
                    className={({ isActive }) =>
                        isActive ? styles['pagina_ativa'] : styles['pagina_desativa']
                    }>
                    {lang === 'pt-BR' ? 'Sobre' : 'About'} 
                </NavLink>

                <NavLink
                    to="/videoAula"
                    className={({ isActive }) =>
                        isActive ? styles['pagina_ativa'] : styles['pagina_desativa']
                    }>
                    {lang === 'pt-BR' ? 'Video Aula' : 'Video class'} 
                </NavLink>
                <NavLink to="/login" className={styles.signin_btn}>
                    Login
                </NavLink>
                <button onClick={toggleLang} className={styles.buttonIdioma}>
                    <LiaLanguageSolid size={20} />  
                    {lang === 'pt-BR' ? 'PT' : 'EN'}    </button>
            </nav>
        </header>
    );
}
