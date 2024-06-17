import Link from "next/link";
import styles from "../../styles/MobileMenu.module.css";

export default function MobileMenu({ isOpen, toggleMenu }) {
    return (
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
            <button className={styles.closeButton} onClick={toggleMenu}>×</button>
            <ul className={styles.linkItems}>
                <li>
                    <Link className={styles.link} href={`/`}>Inicio</Link>
                </li>
                <li>
                    <Link className={styles.link} href={`/#services`}>Serviços</Link>
                </li>
                <li>
                    <Link className={styles.link} href={`/about`}>Galeria</Link>
                </li>
                <li>
                    <Link className={styles.link} href={`/about`}>Localização</Link>
                </li>
                <li>
                    <Link className={styles.link} href={`/#schedule`}>Agende seu horário</Link>
                </li>
            </ul>
        </div>
    );
}
