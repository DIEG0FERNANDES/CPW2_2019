/**
 * Nosso BD fake!
 * (in memory DB)
 */
var contatos = [
    {
        nome: 'Luiza Azevedo de Menezes',
        telefone: '(67) 99999-7070',
        email: 'luiza@gmail.com',
        dataNascimento: '29/02/2003'
    },
    {
        nome: 'Anastacia Azevedo Menezes',
        telefone: '(67) 99999-4949',
        email: 'tekanas@gmail.com',
        dataNascimento: '12/05/2003'
    },
    {
        nome: 'Lucas Azevedo de Menezes',
        telefone: '(67) 98765-4321',
        email: 'lucas@gmail.com',
        dataNascimento: '05/04/2000'
    },
    {
        nome: 'Maria Vai Com As Outras',
        telefone: '(67) 99889-4949',
        email: 'mmaria@gmail.com',
        dataNascimento: '21/07/2003'
    },
    {
        nome: 'José Vira Mundo',
        telefone: '(67) 98777-9876',
        email: 'joses@gmail.com',
        dataNascimento: '04/01/1999'
    }
];
renderizarTabelaContatos(contatos);
renderizarCardsContatos(contatos);

function salvarContato(event) {
    // Inibe a recarga da página
    event.preventDefault();

    /**
     * $ -> document.querySelector
     * val() -> value
     */
    // Recupera os valores do formulário
    let nome = $('#nome').val();
    let telefone = $('#telefone').val();
    let email = $('#email').val();
    let dataNascimento = $('#dataNascimento').val();

    // Criar um objeto de contato
    let contato = {
        nome,
        telefone,
        email,
        dataNascimento
    };

    // Adiciona o contato no nosso BD (no final do vetor)
    contatos.push(contato);

    // Invoca a renderização da tabela
    renderizarTabelaContatos(contatos);

    // Invoca a renderização do card
    renderizarCardsContatos(contatos);
}


function renderizarTabelaContatos(listaContatos) {
    if (listaContatos.length > 0) {
        let areaListagemContatos =
            document.getElementById('tabelaContatos');

        /**
         * Limpa a área de listagem
         */
        areaListagemContatos.innerHTML = '';

        /**
         * Cria a tabela
         */
        let tabela = document.createElement('table');

        let cabecalho = criarCabecalhoTabela();
        // Adiciona o cabeçalho dentro da tabela
        tabela.appendChild(cabecalho);

        let corpoTabela = criarCorpoTabela(listaContatos);
        // Adiciona o corpo da tabela na tabela
        tabela.appendChild(corpoTabela);

        // Adiciona a tabela na área de listagem
        areaListagemContatos.appendChild(tabela);
    }
}

function criarCabecalhoTabela() {
    /**
    * Cria o cabeçalho da tabela
    */
    let cabecalho = document.createElement('thead');
    let linhaCabecalho = document.createElement('tr');
    let colunaNome = document.createElement('th');
    colunaNome.innerText = 'Nome';
    let colunaTelefone = document.createElement('th');
    colunaTelefone.innerText = 'Telefone';
    let colunaEmail = document.createElement('th');
    colunaEmail.innerText = 'E-mail';
    let colunaDataNasc = document.createElement('th');
    colunaDataNasc.innerText = 'Data Nasc.';

    // Adiciona as colunas na linha do cabeçalho
    linhaCabecalho.appendChild(colunaNome);
    linhaCabecalho.appendChild(colunaTelefone);
    linhaCabecalho.appendChild(colunaEmail);
    linhaCabecalho.appendChild(colunaDataNasc);

    // Adiciona a linha do cabeçalho no cabeçalho
    cabecalho.appendChild(linhaCabecalho);

    // Retorna o cabeçalho criado
    return cabecalho;
}

function criarCorpoTabela(listaContatos) {
    /**
     * Cria o corpo da tabela
     */
    let corpoTabela = document.createElement('tbody');

    /**
     * Cria a linhas de contatos
     */
    for (let i = 0; i < listaContatos.length; i++) {
        /**
         * Cria uma nova linha no corpo da tabela
         */
        let linha = document.createElement('tr');

        let celulaNome = document.createElement('td');
        celulaNome.innerText = listaContatos[i].nome;
        linha.appendChild(celulaNome);
        let celulaTelefone = document.createElement('td');
        celulaTelefone.innerText = listaContatos[i].telefone;
        linha.appendChild(celulaTelefone);
        let celulaEmail = document.createElement('td');
        celulaEmail.innerText = listaContatos[i].email;
        linha.appendChild(celulaEmail);
        let celulaDataNasc = document.createElement('td');
        celulaDataNasc.innerText = listaContatos[i].dataNascimento;
        linha.appendChild(celulaDataNasc);

        // Adiciona a nova linha no corpo da tabela
        corpoTabela.appendChild(linha);
    }

    return corpoTabela;
}

function renderizarCardsContatos(listaContatos) {
    if (listaContatos.length > 0) {
       let areaListagemContatos = 
            document.getElementById("cardsContatos");

            /**
             * Limpa a area de listagem
             */
        areaListagemContatos.innerHTML = '';

            /**
             * Ao invés de usar um loop,
             * utiizaremos a função forEach
             */
            listaContatos.forEach(function(contato) {
            /**
             * Simula um loop
             * é (quase) mesma coisa que fazer isso:
             * for(let i=0; i<contatos.lent; i++){
             * contatos[i].nome = 'Sidney'
             * }
             */
                let card = document.createElement('div');
                let inicialNome = document.createElement('span');
                inicialNome.innerText = contato.nome.charAt(0);
                let nome = document.createElement('span');
                let tamanhoNome = contato.nome.length;
                nome.innerText = contato.nome.substr(1, tamanhoNome);
                let telefone = document.createElement('span');
                telefone.innerText = contato.telefone;
                let email = document.createElement('span');
                email.innerText = contato.email;
                let dataNasc = document.createElement('span');
                dataNasc.innerText = contato.dataNascimento;

                card.appendChild(inicialNome);
                card.appendChild(nome);
                card.appendChild(telefone);
                card.appendChild(email);
                card.appendChild(dataNasc);
                areaListagemContatos.appendChild(card);
    
             });
    }
}

    function filtrarContatos() {
        // Se tiver pelo menos um contato...
        if (contatos.length > 0){
        let filtro = document.getElementById("filtro").value;
        filtro = filtro.toLowerCase();

        /**
         * Filtra os contatos de acordo com otexto digitado pelo usuario no campo filtro
         */
        let contatosFiltrados = contatos.filter(function(contato){
            let nome = contato.nome.toLowerCase();
            let email = contato.email.toLowerCase();
            if (nome.includes(filtro) || email.includes(filtro)) {
                return contato;

            }
        });

        renderizarCardsContatos(contatosFiltrados);
        renderizarTabelaContatos(contatosFiltrados);

    }
}    