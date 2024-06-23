class Agendamento {
    /**
     * @param {string} id
     * @param {string} servico
     * @param {string} dataAgendamento
     * @param {string} horarioAgendamento
     * @param {string} nomeCompleto
     * @param {string} telefone
     * @param {string} data
     * @param {number} mes
     */
    constructor(id, servico, dataAgendamento, horarioAgendamento, nomeCompleto, telefone, data, mes) {
        this.id = id;
        this.servico = servico;
        this.dataAgendamento = dataAgendamento;
        this.horarioAgendamento = horarioAgendamento;
        this.nomeCompleto = nomeCompleto;
        this.telefone = telefone;
        this.data = data;
        this.mes = mes;
    }

    /**
     * Valida se o objeto possui todos os campos necessários.
     * @returns {boolean}
     */
    isValid() {
        return typeof this.id === 'string' &&
            typeof this.servico === 'string' &&
            typeof this.dataAgendamento === 'string' &&
            typeof this.horarioAgendamento === 'string' &&
            typeof this.nomeCompleto === 'string' &&
            typeof this.telefone === 'string' &&
            typeof this.data === 'string' &&
            typeof this.mes === 'number';
    }
}

export default Agendamento;