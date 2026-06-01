import { useState, useEffect } from 'react';
import { LiaLanguageSolid } from 'react-icons/lia';
import Carregamento from '../carregamento/carregamento';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { LanguageProvider, useLang } from '../../contexts/LanguageContext';
import styles from './header.module.css';

export default function Header() {
    const { lang, toggleLang } = useLang();
    const [dados, setDados] = useState(null);
    const [erro, setErro] = useState(null);


    const logado = true;
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
    if (!dados) return <Carregamento />;


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
                    {lang === 'pt-BR' ? 'equipe' : 'team'}
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
                    {lang === 'pt-BR' ? 'personagens' : 'characters'}
                </NavLink>

                <NavLink
                    to="/sobre"
                    className={({ isActive }) =>
                        isActive ? styles['pagina_ativa'] : styles['pagina_desativa']
                    }>
                    {lang === 'pt-BR' ? 'sobre' : 'about'} 
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
