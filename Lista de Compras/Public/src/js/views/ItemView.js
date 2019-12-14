class ItemView {
//Constructor -> método usado para inicializar objetos. 
//Para chamar, qdo um objeto de uma classe é criada.
    constructor(itens) {
        //constructor(lista,itens) {
            //this.controller = new ListaController(lista);
        this.controller = new ItemController(itens);
        //this.renderizarCardsContatos(contatos);
        this.renderizarCardsItem(this.itens);
        this.renderizarTabelaItens(this.itens);
        //this.contador = 1;
        this.itens = itens;
    }
//Event --> HTML permite atributos manipulador de eventos, 
//com o código JavaScript , para ser adicionado a elementos HTML.
    acrescentarItem(event) {
        // Inibe a recarga da página
        event.preventDefault();


        /**
         * $ -> document.querySelector
         * val() -> value
         */
        // Recupera os valores do formulário
        let itemSelecao = $('#descricao').val();
        let itemSelecao = this.controller.selectItens(itemSelecao);
        let unidade = $('#unidade').val();
        let unidade = this.itens(unidade);

        //Criar um objeto de contato
        //let item = new Item(this.controller.selectItens(itemselect);

        // Cria um objeto na Lista
        //let descricao = new Item(descricao);
        let itens = new Item(descricao, unidade);
        
        if (this.controller.selectItens(item.id)) {
            this.controller.alterarQuantidade(item.id, quantidade);
        } else {
        // Adiciona o contato no nosso BD (no final do vetor)
        // this --> palavra-chave se refere ao objeto a que pertence.
        this.controller.salvar(itens);

        this.limparFormulario();

        let itens = this.controller.recuperarTodos();

        // Limpa o filtro
        document.getElementById('filtro').value = '';

        // Invoca a renderização da tabela
        this.renderizarTabelaItens(itens);

        // Invoca a renderização dos cards
        this.renderizarCardsItens(itens);
    }

    /**
     * Limpa o formulário de cadastro de contato
     */
    /**limparFormulario() {
        [
            'descricao',
            'unidade',
            
        ].forEach(id => document.getElementById(id).value = '');
    }*/

    renderizarTabelaitem(itens) {
        let selectItens = document.getElementById('itens');

        /**
         * Limpa a área de listagem
         */
        selectItens.innerHTML = '';

        if(itens.length > 0){
            /**
             * Cria a tabela
             */
            document.getElementById("minhaLista");
            let tabela = document.createElement('table');

            let cabecalho = this.criarCabecalhoTabela();
            // Adiciona o cabeçalho dentro da tabela
            tabela.appendChild(cabecalho);

            let corpoTabela = this.criarCorpoTabela(itens);
            // Adiciona o corpo da tabela na tabela
            tabela.appendChild(corpoTabela);

            // Adiciona a tabela na área de listagem
            selectItens.appendChild(tabela);
        } else {
            document.getElementById("minhaLista");
            let spanMensagem = document.createElement('span');
            spanMensagem.innerText = 'Digite a descrição do item';
            selectItens.appendChild(spanMensagem);
        }
    }

    criarCabecalhoTabela(){
        /**
        * Cria o cabeçalho da tabela
        */
        let cabecalho = document.createElement('thead');
        let linhaCabecalho = document.createElement('tr');
        let colunaDescricao = document.createElement('th');
        colunaDescricao.innerText = 'Item';
        let colunaUnidade = document.createElement('th');
        colunaUnidade.innerText = 'unidade';
        
        // Adiciona as colunas na linha do cabeçalho
        linhaCabecalho.appendChild(colunaDescricao);
        linhaCabecalho.appendChild(colunaUnidade);
        
        // Adiciona a linha do cabeçalho no cabeçalho
        cabecalho.appendChild(linhaCabecalho);

        // Retorna o cabeçalho criado
        return cabecalho;
    }

    criarCorpoTabela(itens){ 
        /**
         * Cria o corpo da tabela
         */
        let corpoTabela = document.createElement('tbody');

        /**
         * Cria a linhas de contatos
         */
        for (let i = 0; i < itens.length; i++) {
            /**
             * Cria uma nova linha no corpo da tabela
             */
            let linha = document.createElement('tr');

            let celulaDescricao = document.createElement('td');
            celulaDescricao.innerText = itens[i].descricao;
            linha.appendChild(celulaDescricao);
            
            let celulaUnidade = document.createElement('td');
            celulaUnidade.innerText = itens[i].unidade;
            linha.appendChild(celulaUnidade);
            
            // Adiciona a nova linha no corpo da tabela
            corpoTabela.appendChild(linha);
        }

        return corpoTabela;
    }

    renderizarCardsItem(itens) {
        let selectItens=
            document.getElementById('cardsItens');

        /**
         * Limpa a área de listagem
         */
        selectItens.innerHTML = '';

        if (itens.length > 0) {
            /**
             * Ao invés de usar um loop,
             * utilizaremos a função forEach
             */
            itens.forEach(function (item) {
                let formularioListaItem = document.createElement('div');
                let inicialDescricao = document.createElement('span');
                inicialDescricao.innerText = item.descricao.charAt(0);
                let descricao = document.createElement('span');
                let tamanhoDescricao = item.descricao.length;
                descricao.innerText = item.descricao.substr(1, tamanhoDescricao);
                let unidade = document.createElement('span');
                unidade.innerText = item.unidade;
                
                card.appendChild(inicialDescricao);
                card.appendChild(descricao);
                card.appendChild(unidade);
                selectItens.appendChild(card);
            });
        } else {
            let spanMensagem = document.createElement('span');
            spanMensagem.innerText = 'Nenhum item encontrado';
            selectItens.appendChild(spanMensagem);
        }
    }

    filtrarItens() {

        let filtro = document.getElementById('filtro').value;
        filtro = filtro.toLowerCase();
        console.log(filtro);

        /**
         * Filtra os contatos de acordo
         * com o texto digitado pelo 
         * usuário no campo de filtro
         */
        let itens = this.controller.filtrar(filtro);

        this.renderizarCardsitem(item);
        this.renderizarTabelaitem(item);
        }
    }
    
