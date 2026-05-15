import '../style/App.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    function handleLogin() {
        alert('Login realizado com sucesso!');
        navigate('/');
    }

    return (
        <div className="login-container">
            <div className="login-left">
                <div className="login-navbar">
                    <nav>
                        <Link to="/">Home</Link>

                        <Link to="/dev">Developers</Link>

                        <Link to="/personagens">Personagens</Link>

                        <Link to="/login">Login</Link>
                    </nav>
                </div>

                <div className="left-overlay">
                    <p>MEU PAINEL</p>

                    <h1>LOGIN BOOKLY</h1>
                </div>
            </div>

            <div className="login-right">
                <div className="login-card">
                    <h1 className="bookly-logo">Bookly</h1>

                    <h2>Entrar</h2>

                    <p>Acesse a conta para continuar</p>

                    <div className="login-inputs">
                        <input
                            className="login-input"
                            type="email"
                            placeholder='Digite seu email'
                        />

                        <input
                            className="login-input"
                            type="password"
                            placeholder="Digite sua senha"
                        />

                        <button className='login-button' onClick={handleLogin}>
                            Entrar
                        </button>
                    </div>

                    <span className="login-text">Ainda não tem conta ? Cadastra-se</span>
                </div>
            </div>
        </div>
    );
}

export default Login;
