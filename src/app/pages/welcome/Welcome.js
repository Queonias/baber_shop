import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Welcom.module.css";

export default function Navbar() {
    return (
        <div className={styles.welcome_container}>
            <div>
                <div className={styles.sub_title}>
                    <h3>AQUI NOSSOS CLIENTES TEM ATENDIMENTO DE QUALIDADE</h3>
                </div>
                <div className={styles.title} >
                    <h2>CONHEÇA SEU BARBEIRO</h2>
                </div>
            </div>
            <div className={styles.body_container}>
                <div className={styles.body_text}>
                    <div>
                        <h5>Olá, me chamo Davi Nunes.</h5>
                        <p>A minha barbearia, não é apenas um corte, é uma experiência. Com estilo moderno e técnicas precisas, transformo seu visual em uma obra de arte. Venha descobrir o poder de um corte de cabelo feito por quem entende do assunto. Estou aqui para elevar seu estilo e sua confiança. Vamos nessa?</p>
                    </div>
                    <div className={styles.button_container}>
                        <button>Agende seu horário</button>
                    </div>
                </div>
                <div className={styles.image_container}>
                    <div className={styles.imagem}></div>
                </div>
            </div>
        </div>
    );
};