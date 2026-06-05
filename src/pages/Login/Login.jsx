import styles from './login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageProvider, useLang} from '../../contexts/LanguageContext';

function Login() {
    const { lang, } = useLang();
    const navigate = useNavigate();

    function handleLogin() {
        alert('Login realizado com sucesso!');
        navigate('/');
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginLeft}>
                <div className={styles.leftOverlay}>
                    <p>{lang === 'pt-BR' ? 'MEU PAINEL' : 'MY PAINEL'}
                        </p>

                    <h1>LOGIN BOOKLY</h1>
                </div>
            </div>

            <div className={styles.loginRight}>
                <div className={styles.loginCard}>
                    <h1 className={styles.booklyLogo}>Bookly</h1>

                    <h2>{lang === 'pt-BR' ? 'Entrar' : 'Join'}</h2>

                    <p>{lang === 'pt-BR' ? 'Acesse a conta para continuar' : 'Log in to your account to continue'}</p>

                    <div className={styles.loginInputs}>
                        <input
                            className={styles.loginInput}
                            type="email"
                            placeholder={lang === 'pt-BR' ? 'Digite sue e-mail' : 'Enter your e-mail'}
                        />

                        <input
                            className={styles.loginInput}
                            type="password"
                            placeholder={lang === 'pt-BR' ? 'Digite sua senha' : 'Enter your password'}
                        />

                        <button className={styles.loginButton} onClick={handleLogin}>
                            {lang === 'pt-BR' ? 'Entrar' : 'Join'}
                        </button>
                    </div>

                    <span className={styles.loginText}>
                        {lang === 'pt-BR' ? 'Ainda não tem conta ? Cadastra-se' : 'Don t have an account yet? Sign up'}</span>
                </div>
            </div>
        </div>
    );
}

export default Login;
