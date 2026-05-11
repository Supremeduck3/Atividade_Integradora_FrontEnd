import { Link } from 'react-router-dom';
import styles from './error.module.css';

function NotFound() {
    return (
        <div className={styles.caixa}>
            <div className={styles.errorWrapper}>
                <h1>404 ❌</h1>
                <p>Opa! Essa página não existe.</p>
                <Link to="/">Voltar para a Home</Link>
            </div>
        </div>
    );
}
export default NotFound;
