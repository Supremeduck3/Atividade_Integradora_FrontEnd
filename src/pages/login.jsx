import "../style/App.css";

function Login() {
    return (
        <div className="login-page">
            <div className="login-card">
                <h1>Bookly</h1>

                <h2>Entrar</h2>
                <p>Acesse sua conta para continuar</p>

                <div className="login-inputs">
                    <input type="email" placeholder="Digite seu e-mail"/>

                    <input type="password" placeholder="Digite sua senha" />

                    <button>Sign in</button>
                </div>

                    <span>Ainda não tem conta? Cadastra-se</span>
            </div>
        </div>

    );

}

export default Login;