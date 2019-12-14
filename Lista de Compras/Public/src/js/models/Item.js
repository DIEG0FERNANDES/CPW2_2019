class Item {

    /**
     * Ao construir um novo objeto de
     * Lista, devem ser informados
     * o nome do item, unidade de medida do novo item.
     * @param {*} descricao Nome do item
     * @param {*} unidade Unidade de Medida
     * 
     */
    constructor(descricao, unidade) {
        /**
         * Estou me referindo
         * ao nome deste objeto
         * que está sendo construído
         * aqui (this)
         */
        this.descricao = descricao;
        this.unidade = unidade;
        
    }
}