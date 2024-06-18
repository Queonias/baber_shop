import Image from "next/image";
import styles from "../../../styles/About.module.css";

export default function About() {
    return (
        <div className={styles.about_container}>
            <div className={styles.about_title}>
                <h3>UM POUCO SOBRE</h3>
                <h1>NOSSOS SERVIÇOS</h1>
            </div>
            <div className={styles.services_container}>
                <div className={styles.services}>
                    <div className={styles.text_box}>
                        {/* <h3>BARBA</h3> */}
                        <Image className={styles.imagem} src={`/images/barba.png`} width="400" height="400" />
                    </div>
                    <p>Na DN Barber Shop, oferecemos cortes de barba personalizados para cada cliente. Nossos barbeiros especializados garantem um estilo impecável. </p>
                </div>
                <div className={styles.services}>
                    <Image className={styles.imagem} src={`/images/cabelo.png`} width="400" height="400" />
                    <p>Na DN Barber Shop, oferecemos cortes de cabelo personalizados, cuidadosamente executados por um profissional experiente.</p>
                </div>
                <div className={styles.services}>
                    <Image className={styles.imagem} src={`/images/completo.png`} width="400" height="400" />
                    <p>Experimente o nosso pacote completo , onde você pode desfrutar de cortes de cabelo, tratamentos de barba e contornos de sobrancelha, tudo em um só lugar.</p>
                </div>
                <div className={styles.services}>
                    <Image className={styles.imagem} src={`/images/domiciliar.png`} width="400" height="400" />
                    <p>Não há necessidade de sair de casa para ter um estilo impecável. Com o nosso serviço de barbearia domiciliar, a DN Barber Shop traz o estilo até você.</p>
                </div>
            </div>
        </div>
    );
}