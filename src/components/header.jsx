import style from "../style/header.module.css"

export default function Header(){
    return (
        <header className={style.header}>
                <h1 className={style.logo}>Bookly</h1>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Developers</a>
                    <a href="#">Sobre</a>
                </nav>

                <a href="/login" className={style.signin_btn}>
                    Sign in
                </a>
            </header>
    )
}