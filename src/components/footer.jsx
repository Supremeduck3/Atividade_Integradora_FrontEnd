import styles from "../style/footer.module.css"

export default function Footer(){
    return(
        <footer className={styles.footer}>
                <div className={styles.footer_content}>

                    <div className={styles.footer_left}>
                        <h3>Bookly</h3>

                        <p>© 2026 Bookly Education. All rights reserved.</p>

                        <p>
                            Tornando o conhecimento acessível para todos.
                        </p>
                    </div>

                    <div className={styles.footer_center}>
                        <a href="#">Termos de serviço</a>
                        <a href="#">Contato</a>
                        <a href="#">Sobre</a>
                    </div>

                    <div className={styles.footer_right}>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>

                </div>
            </footer>
    )
}