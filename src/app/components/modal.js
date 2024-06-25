import styles from "../../styles/Modal.module.css";

export default function Modal({ onClose, client }) {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Editar Cliente</h2>
                <p>Nome Completo: {client.nomeCompleto}</p>
                <p>Horário de Agendamento: {client.horarioAgendamento}</p>
                {/* Adicione aqui o formulário ou os inputs necessários para editar as informações do cliente */}
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}
