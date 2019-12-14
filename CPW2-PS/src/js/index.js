function adicionar() {

    for (let i = 0; i < itens.length; i++) {

        let desc = itens[i].descricao;
        let un = itens[i].unidade;

        let lista = document.getElementById('opcoes');

        let option = document.createElement('option');
        option.text = itens[i].descricao;
        option.value = i;
        lista.appendChild(option);

    }
}   
adicionar()