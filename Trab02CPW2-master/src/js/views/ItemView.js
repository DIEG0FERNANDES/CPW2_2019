class ItemView {
    constructor(itens) {
        this.controller = new ItemController(itens);
        this.renderizarCardsCompras(this.compras);
        this.renderizarTabelaCompras(this.compras);
    }

    salvarCompra(event) {
        // Inibe a recarga da página
        event.preventDefault();

        /**
         * $ -> document.querySelector
         * val() -> value
         */
        // Recupera os valores do formulário
        let itemSelecionado = $('#item').val();
        let quantidade = $('#quantidade').val();

        // Cria um objeto de item
        let item = this.controller.buscarItem(itemSelecionado); //new Item(itemSelecionado, quantidade);

        // Cria um objeto de compra
        let compra = new Compra(item, quantidade);

        if (this.controller.buscarCompra(item.id)) {
            this.controller.alterarQuantidade(item.id, quantidade);
        } else {
            // Adiciona o item no nosso BD (no final do vetor)
            this.controller.salvar(compra);
        }

        this.limparFormulario();

        // Limpa o step do input number
        if (compra.item.unidadeDeMedida == 'kg') {
            let inputNumber = document.getElementById('quantidade');
            inputNumber.removeAttribute('step');
        }

        let compras = this.controller.recuperarTodas();

        // Limpa o filtro
        document.getElementById('filtro').value = '';

        // Invoca a renderização da tabela
        this.renderizarTabelaCompras(compras);

        // Invoca a renderização dos cards
        this.renderizarCardsCompras(compras);
    }

    removerCompra(event, id) {
        // Inibe a recarga da página
        event.preventDefault();

        let compra = this.controller.buscarCompra(id);

        this.controller.removerCompra(compra);

        let compras = this.controller.recuperarTodas();

        // Invoca a renderização da tabela
        this.renderizarTabelaCompras(compras);

        // Invoca a renderização dos cards
        this.renderizarCardsCompras(compras);
    }

    /**
     * Limpa o formulário de cadastro de item
     */
    limparFormulario() {
        [
            'item',
            'quantidade'
        ].forEach(id => document.getElementById(id).value = '');

        document.getElementById('unidadeDeMedida').innerText = '';
    }

    renderizarTabelaCompras(compras) {
        let areaListagemCompras = document.getElementById('tabelaCompras');

        /**
         * Limpa a área de listagem
         */
        areaListagemCompras.innerHTML = '';

        if (this.controller.compras.length > 0) {
            /**
             * Cria a tabela
             */
            let tabela = document.createElement('table');

            //let cabecalho = this.criarCabecalhoTabela();
            // Adiciona o cabeçalho dentro da tabela
            //tabela.appendChild(cabecalho);

            let corpoTabela = this.criarCorpoTabela(compras);
            // Adiciona o corpo da tabela na tabela
            tabela.appendChild(corpoTabela);

            // Adiciona a tabela na área de listagem
            areaListagemCompras.appendChild(tabela);
        } else {
            let img = document.createElement('img');
            if (this.controller.carrinhoVazio()) {
                let spanMensagem = document.createElement('span');
                spanMensagem.innerText = 'Sua lista de compras está vazia, adicione itens logo acima!';
                areaListagemCompras.appendChild(spanMensagem);
                img.setAttribute('src', 'src/img/incluir.png');
            } else {
                let spanMensagem = document.createElement('span');
                spanMensagem.innerText = 'Nenhum item foi encontrado com essa descrição.';
                areaListagemCompras.appendChild(spanMensagem);
                img.setAttribute('src', 'src/img/cesta_vazia.png');
            }
            img.setAttribute('alt', 'Imagem de um carrinho de compras vazio.');
            areaListagemCompras.appendChild(img);
        }
    }

    criarCorpoTabela(compras) {
        /**
         * Cria o corpo da tabela
         */
        let corpoTabela = document.createElement('tbody');

        /**
         * Cria a linhas de compras
         */
        for (let i = 0; i < compras.length; i++) {
            /**
             * Cria uma nova linha no corpo da tabela
             */
            let linha = document.createElement('tr');

            let celulaCheck = document.createElement('td');
            if (compras[i].check == false) {
                celulaCheck.innerHTML = '<a href="" id="' + compras[i].item.id + '" onclick="itemView.checar(event, \'' + compras[i].item.id + '\')"><img title="Clique para confirmar que já adicionou ' + compras[i].quantidade + ' ' + compras[i].item.unidadeDeMedida + ' de ' + compras[i].item.descricao + ' ao carrinho de compras" src="src/img/check.png" alt="Carrinho de compra com a opção de confirmar que já pegou ' + compras[i].quantidade + ' ' + compras[i].item.unidadeDeMedida + ' de ' + compras[i].item.descricao + '"></a>';
            } else {
                celulaCheck.innerHTML = '<a id="' + compras[i].item.id + '\')"><img title="' + compras[i].quantidade + ' ' + compras[i].item.unidadeDeMedida + ' de ' + compras[i].item.descricao + ' já adicionado ao carrinho de compras" src="src/img/checked.png" alt="Carrinho de compra com um simbolo de checado"></a>';
            }

            linha.appendChild(celulaCheck);
            let celulaCompra = document.createElement('td');
            celulaCompra.innerText = compras[i].quantidade + ' ' + compras[i].item.unidadeDeMedida +
                ' de ' + compras[i].item.descricao;
            linha.appendChild(celulaCompra);
            let celulaExcluir = document.createElement('td');
            celulaExcluir.innerHTML = '<a href="" id="' + compras[i].item.id + '" onclick="itemView.removerCompra(event, \'' + compras[i].item.id + '\')"><img title="Clique para remover ' + compras[i].quantidade + ' ' + compras[i].item.unidadeDeMedida + ' de ' + compras[i].item.descricao + ' do carrinho de compras" src="src/img/remover.png" alt="Carrinho de compra com simbolo que remete à remoção de ' + compras[i].quantidade + ' ' + compras[i].item.unidadeDeMedida + ' de ' + compras[i].item.descricao + ' da sua lista de compras ">';
            linha.appendChild(celulaExcluir);

            // Adiciona a nova linha no corpo da tabela
            corpoTabela.appendChild(linha);
        }

        return corpoTabela;
    }

    renderizarCardsCompras(compras) {
        let areaListagemCompras = document.getElementById('cardsCompras');

        /**
         * Limpa a área de listagem
         */
        areaListagemCompras.innerHTML = '';

        if (this.controller.compras.length > 0) {
            /**
             * Ao invés de usar um loop,
             * utilizaremos a função forEach
             */
            this.controller.compras.forEach(function (compra) {
                let card = document.createElement('div');
                card.setAttribute('id', 'cardConteudo');

                let celulaCheck = document.createElement('a');
                
                if (compra.check == false) {
                    celulaCheck.setAttribute('id', compra.item.id);
                    celulaCheck.setAttribute('onclick', 'itemView.checar(event, \'' + compra.item.id + '\')');
                    celulaCheck.innerHTML = '<img title="Clique para confirmar que já adicionou ' + compra.quantidade + ' ' + compra.item.unidadeDeMedida + ' de ' + compra.item.descricao + ' ao carrinho de compras" src="src/img/check.png" alt="Carrinho de compra com a opção de confirmar que já pegou ' + compra.quantidade + ' ' + compra.item.unidadeDeMedida + ' de ' + compra.item.descricao + '">';
                } else {
                    celulaCheck.setAttribute('id', compra.item.id);
                    celulaCheck.innerHTML = '<img title="' + compra.quantidade + ' ' + compra.item.unidadeDeMedida + ' de ' + compra.item.descricao + ' já adicionado ao carrinho de compras" src="src/img/checked.png" alt="Carrinho de compra com um simbolo de checado">';
                }

                let esquerda = document.createElement('div');
                esquerda.setAttribute('class', 'esquerda');
                esquerda.appendChild(celulaCheck);                
                

                let descricao = document.createElement('span');
                descricao.innerText = compra.quantidade + ' ' + compra.item.unidadeDeMedida + ' de ' + compra.item.descricao;
                

                let meio = document.createElement('div');
                meio.setAttribute('class', 'meio');
                meio.appendChild(descricao);                

                let celulaExcluir = document.createElement('a');
                celulaExcluir.setAttribute('onclick', 'itemView.removerCompra(event, \'' + compra.item.id + '\')');
                celulaExcluir.innerHTML = '<img title="Clique para remover ' + compra.quantidade + ' ' + compra.item.unidadeDeMedida + ' de ' + compra.item.descricao + ' do carrinho de compras" src="src/img/remover.png" alt="Carrinho de compra com simbolo que remete à remoção de ' + compra.quantidade + ' ' + compra.item.unidadeDeMedida + ' de ' + compra.item.descricao + ' da sua lista de compras ">';
                celulaExcluir.setAttribute('class', 'excluir');

                let direita = document.createElement('div');
                direita.setAttribute('class', 'direita');
                direita.appendChild(celulaExcluir);                
                
                card.appendChild(esquerda);
                card.appendChild(meio);
                card.appendChild(direita);

                areaListagemCompras.appendChild(card);
            });
        } else {

            let img = document.createElement('img');
            if (this.controller.carrinhoVazio()) {
                let spanMensagem = document.createElement('span');
                spanMensagem.innerText = 'Seu carrinho está vazia, adicione itens acima!';
                areaListagemCompras.appendChild(spanMensagem);
                img.setAttribute('src', 'src/img/incluir.png');
            } else {
                let spanMensagem = document.createElement('span');
                spanMensagem.innerText = 'Nenhum item encontrado';
                areaListagemCompras.appendChild(spanMensagem);
                img.setAttribute('src', 'src/img/cesta_vazia.png');
            }
            img.setAttribute('alt', 'Imagem com um carrinho carrinho de compras vazio');
            areaListagemCompras.appendChild(img);
        }
    }

    filtrarCompras() {

        let filtro = document.getElementById('filtro').value;
        filtro = filtro.toLowerCase();

        /**
         * Filtra as Compras de acordo
         * com o texto digitado pelo 
         * usuário no campo de filtro
         */
        let compras = this.controller.filtrar(filtro);

        this.renderizarCardsCompras(compras);
        this.renderizarTabelaCompras(compras);

    }

    carregarUnidadeDeMedida(event) {
        // Inibe a recarga da página
        event.preventDefault();

        // Recupera os valores do formulário
        let itemSelecionado = $('#item').val();

        let divUnidadeDeMedida = document.getElementById('unidadeDeMedida');
        let unidadeDeMedida = this.controller.buscarUnidadeDeMedida(itemSelecionado);
        divUnidadeDeMedida.innerText = unidadeDeMedida

        if (unidadeDeMedida == 'kg') {
            let inputNumber = document.getElementById('quantidade');
            inputNumber.setAttribute('step', '0.1');
        } else {
            document.getElementById('quantidade').value = '';
            let inputNumber = document.getElementById('quantidade');
            inputNumber.removeAttribute('step');
        }
    }

    checar(event, id) {
        event.preventDefault();

        this.controller.checarCompra(id);

        let compras = this.controller.recuperarTodas();
        this.renderizarCardsCompras(compras);
        this.renderizarTabelaCompras(compras);
    }
}