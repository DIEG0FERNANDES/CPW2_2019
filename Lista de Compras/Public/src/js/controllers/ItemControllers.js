class ItemController {

    constructor(itens) {
        this.itens = itens;
        this.itensFiltrados = [];
    }

    salvar(item) {
        this.itens.push(item);
    }

    filtrar(filtro) {
        if (this.itens.length > 0) {
            this.itensFiltrados = this.itens.filter(function (item) {
                let descricao = item.descricao.toLowerCase();
                let unidade = item.unidade.toLowerCase();

                /**
                 * Se o nome ou o e-mail do contato
                 * conter o filtro do usuário, retorno
                 * o contato
                 */
                return descricao.includes(filtro) || unidade.includes(filtro);
            });
        }

        return this.itensFiltrados;
    }

    recuperarTodos() {
        return this.itens;
    }
}