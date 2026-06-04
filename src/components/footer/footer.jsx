import styles from "./footer.module.css"
import { LanguageProvider, useLang } from '../../contexts/LanguageContext';

export default function Footer(){
    const { lang, } = useLang();

    return(
        <footer className={styles.footer}>
                <div className={styles.footer_content}>

                    <div className={styles.footer_left}>
                        <h3>Bookly</h3>

                        <p>© 2026 Bookly Education. All rights reserved.</p>

                        <p>
                            {lang === 'pt-BR' ? 'Tornando o conhecimento acessível para todos.' : '"Making knowledge accessible to everyone."'}
                        </p>
                    </div>

                    <div className={styles.footer_center}>
                        <a href="#">{lang === 'pt-BR' ? 'Termos de serviço' : 'Terms of service'}</a>
                        <a href="#">{lang === 'pt-BR' ? 'Contato' : 'Contact'}</a>
                        <a href="#">{lang === 'pt-BR' ? 'Sobre' : 'About'}</a>
                    </div>

                    <div className={styles.footer_right}>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>

                </div>
            </footer>
    )
}
