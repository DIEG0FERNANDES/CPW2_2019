class Contato {

    /**
     * Ao construir um novo objeto de
     * Contato, devem ser informados
     * o nome, telefone, e-mail e
     * data de nascimento do novo contato.
     * @param {*} nome Nome do contato
     * @param {*} telefone Telefone do contato
     * @param {*} email E-mail do contato
     * @param {*} dataNascimento Data de nascimento do contato
     */
    constructor(nome, telefone, email, dataNascimento) {
        /**
         * Estou me referindo
         * ao nome deste objeto
         * que está sendo construído
         * aqui (this)
         */
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.dataNascimento = dataNascimento;
    }
}
