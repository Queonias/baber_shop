import Link from "next/link";
import styles from "../../styles/Card.module.css";
import { FiTrash, FiEdit, FiCheck } from "react-icons/fi";
import { auth, db } from '../../services/firebase';
import { collection, doc, deleteDoc } from "firebase/firestore";

export default function Card({ client }) {

    async function deleteDocument(documentId) {
        const docRef = doc(db, 'agendamentos', documentId);

        try {
            await deleteDoc(docRef);
            console.log('Documento deletado com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar documento: ', error);
        }
    }

    async function handleDelete() {
        await deleteDocument(client.id);
        console.log(client.id);
    }

    return (
        <div className={styles.card}>
            <p className={styles.id}>#{client.nomeCompleto}</p>
            <h3 className={styles.title}>{client.horarioAgendamento}</h3>
            {/* <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>Detalhes</Link> */}
            <div className={styles.containerButton}>
                <button className={styles.btn}>
                    <FiEdit />
                </button>
                <button className={styles.btn}>
                    <FiCheck />
                </button>
                <button className={styles.btn} onClick={handleDelete}>
                    <FiTrash />
                </button>
            </div>
        </div>
    );
}
