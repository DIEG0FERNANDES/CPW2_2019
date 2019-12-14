function exibirMensagem() {
    let nome = document.getElementById('nome').value;
    //if (nome) {
        let mensagem = nome ? `Olá, ${nome}!`: '';
        document.getElementById('mensagem').innerHTML = mensagem;
    
    //else {
    //  document.getElementById('mensagem').innerHTML = mensagem;
    
    
    
    //console.log(nome);
}