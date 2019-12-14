class ItemController {

    constructor(itens) {
        this.itens = itens;
        this.compras = [];
        this.itensFiltrados = [];
    }

    salvar(compra) {
        this.compras.push(compra);
    }

    alterarQuantidade(filtro, quantidade) {
        for (let i = 0; i < this.compras.length; i++) {
            if (this.compras[i].item.descricao == filtro || this.compras[i].item.id == filtro) {
                this.compras[i].quantidade = Number(quantidade) + Number(this.compras[i].quantidade);
                if (this.compras[i].check == true) {
                    this.compras[i].check = false;
                }
            }
        }
    }

    removerCompra(compra) {
        for (let i = 0; i < this.compras.length; i++) {
            if (this.compras[i].item.descricao == compra.item.descricao || this.compras[i].item.id == compra.item.id) {
                this.compras.splice(i, 1);
            }
        }
    }

    filtrar(filtro) {
        if (this.compras.length > 0) {
            this.comprasFiltradas = this.compras.filter(function (compra) {
                let descricao = compra.item.descricao.toLowerCase();
                let id = compra.item.id.toLowerCase();

                /**
                 * Se descrição do item
                 * conter o filtro do usuário, retorno
                 * o item
                 */
                return descricao.includes(filtro) || id.includes(filtro);
            });
        }

        return this.comprasFiltradas;
    }

    buscarUnidadeDeMedida(itemSelecionado) {

        let unidadeDeMedida = this.itens.filter(function (item) {
            let descricao = item.descricao.toLowerCase();
            //let email = item.email.toLowerCase();

            /**
             * Se descrição do item
             * conter o filtro do usuário, retorno
             * o item
             */
            return descricao.includes(itemSelecionado) /* || email.includes(filtro)*/ ;
        });

        return unidadeDeMedida[0].unidadeDeMedida;
    }

    buscarItem(itemSelecionado) {

        let itemProcurado = this.itens.filter(function (item) {
            let descricao = item.descricao.toLowerCase();
            //let email = item.email.toLowerCase();

            /**
             * Se descrição do item
             * conter o filtro do usuário, retorno
             * o item
             */
            return descricao.includes(itemSelecionado) /* || email.includes(filtro)*/ ;
        });

        return itemProcurado[0];
    }

    buscarCompra(filtro) {

        let compra = this.compras.filter(function (compra) {
            let id = compra.item.id;
            let descricao = compra.item.descricao;

            return id.includes(filtro) || descricao.includes(filtro);
        });

        if (compra.length == 0) {
            return false;
        } else {
            return compra[0];
        }
    }


    recuperarTodas() {
        return this.compras;
    }

    checarCompra(id) {
        let compra = this.buscarCompra(id);

        compra.check = true;
    }

    carrinhoVazio() {
        if(this.compras.length == 0) {
            return true;
        } else {
            return false;
        }
    }
}