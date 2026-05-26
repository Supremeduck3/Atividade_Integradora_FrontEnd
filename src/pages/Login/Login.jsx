import styles from './login.module.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    function handleLogin() {
        alert('Login realizado com sucesso!');
        navigate('/');
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginLeft}>
                <div className={styles.loginNavbar}>
                    <nav>
                        <Link to="/">Home</Link>

                        <Link to="/dev">Developers</Link>

                        <Link to="/personagens">Personagens</Link>

                        <Link to="/login">Login</Link>
                    </nav>
                </div>

                <div className={styles.leftOverlay}>
                    <p>MEU PAINEL</p>

                    <h1>LOGIN BOOKLY</h1>
                </div>
            </div>

            <div className={styles.loginRight}>
                <div className={styles.loginCard}>
                    <h1 className={styles.booklyLogo}>Bookly</h1>

                    <h2>Entrar</h2>

                    <p>Acesse a conta para continuar</p>

                    <div className={styles.loginInputs}>
                        <input
                            className={styles.loginInput}
                            type="email"
                            placeholder='Digite seu email'
                        />

                        <input
                            className={styles.loginInput}
                            type="password"
                            placeholder="Digite sua senha"
                        />

                        <button className={styles.loginButton} onClick={handleLogin}>
                            Entrar
                        </button>
                    </div>

                    <span className={styles.loginText}>Ainda não tem conta ? Cadastra-se</span>
                </div>
            </div>
        </div>
    );
}

export default Login;
