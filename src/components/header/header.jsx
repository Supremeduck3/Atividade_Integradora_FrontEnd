import { useState, useEffect } from 'react';
import { LiaLanguageSolid } from 'react-icons/lia';
import Carregamento from '../carregamento/carregamento';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import styles from './header.module.css';

const texts = {
    'pt-br': {
        equipe: "Equipe",
        personagens: 'personagens',
        sobre: 'sobre-nós',
    },

    en: {
        equipe: 'Team',
        personagens: 'characters',
        sobre: 'About Us',
    },
};

export default function Header() {
    const { lang, toggleLanguage } = useContext(LanguageContext);
    const [dados, setDados] = useState(null);
    const [erro, setErro] = useState(null);

    {
        texts[lang].contato;
    }

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
                    {texts[lang].equipe}
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
                    {texts[lang].personagens}
                </NavLink>

                <NavLink
                    to="/sobre"
                    className={({ isActive }) =>
                        isActive ? styles['pagina_ativa'] : styles['pagina_desativa']
                    }>
                    {texts[lang].sobre}
                </NavLink>
                <NavLink to="/login" className={styles.signin_btn}>
                    Login
                </NavLink>
                <button onClick={toggleLanguage} className={styles.buttonIdioma}>
                    <LiaLanguageSolid size={20} />
                    {lang === 'pt-br' ? 'PT' : 'EN'}
                </button>
            </nav>
        </header>
    );
}
