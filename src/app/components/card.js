import Link from "next/link";
import styles from "../../styles/Card.module.css"


export default function Card({ client }) {

    return (
        <div className={styles.card}>
            <p className={styles.id}>#{client.nomeCompleto
            }</p>
            <h3 className={styles.title}>{client.horarioAgendamento}</h3>
            {/* <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>Detalhes</Link> */}
        </div>
    )
}