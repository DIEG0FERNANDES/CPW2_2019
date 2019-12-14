class Item {

    /**
     * Ao construir um novo objeto de
     * Item, devem ser informadas
     * a descricao, a unidadeDeMedida
     * e o id do novo item.
     * @param {*} descricao Descricao do item
     * @param {*} unidadeDeMedida Unidade de medida do item
     */
    constructor(descricao, unidadeDeMedida, id) {
        /**
         * Estou me referindo
         * ao descricao deste objeto
         * que está sendo construído
         * aqui (this)
         */
        this.descricao = descricao;
        this.unidadeDeMedida = unidadeDeMedida;
        this.id = id;
    }
}