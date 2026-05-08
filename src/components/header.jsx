import style from "../style/header.module.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function Header(){
    return (
        <header className={style.header}>
                <h1 className={style.logo}>Bookly</h1>

                <nav>
                    <a href="#">Início</a>
                    <a href="#">Equipe</a>
                    <a href="#">Simulado</a>
                    <a href="#">Video Aulas</a>
                    <a href="#">Sobre</a>
                </nav>

                <a href="/login" className={style.signin_btn}>
                    Sign in
                </a>
            </header>
    )
}
