function ehPalindromo() {
    let frase = document.getElementById('frase').value;

    //Converte a frase para minúsculo
    frase = frase.toLowerCase();

    // Remove pontuações
    frase = removerPontuacoes(frase);

    //Remove caracteres de acentuação simples
    frase = removerAcentuacoesSimples(frase);

    //Remove caracteres de acentuação
    frase = removerAcentuacoes(frase);

    //Remove os espaços em branco
    frase = removerEspacosEmBranco(frase);

    let fraseInvertidade = inverterString(frase);

    let resposta = 'Não é palíndromo';
    if (frase === fraseInvertidade) {
        resposta = 'É palíndromo';
    }

    let spanResposta = document.getElementById('resultado');
    spanResposta.innerText = resposta;
}

function inverterString(str) {
    return str.split("").reverse().join("");
}

function removerEspacosEmBranco(str) {
    return str.replace(/ /g, '');
}

function removerAcentuacoes(str) {
    str = str.replace(/á/g, 'a');
    str = str.replace(/é/g, 'e');
    str = str.replace(/í/g, 'i');
    str = str.replace(/ó/g, 'o');
    str = str.replace(/ú/g, 'u');

    str = str.replace(/â/g, 'a');
    str = str.replace(/ê/g, 'e');
    str = str.replace(/ô/g, 'o');

    str = str.replace(/ã/g, 'a');
    str = str.replace(/õ/g, 'o');
    return str;
}

function removerAcentuacoesSimples(str) {
    str = str.replace(/"/g, '');
    str = str.replace(/”/g, '');
    str = str.replace(/“/g, '');
    str = str.replace(/'/g, '');
    return str;
}

function removerPontuacoes(str) {
    str = str.replace(/,/g, '');
    str = str.replace(/!/g, '');
    str = str.replace(/;/g, '');
    str = str.replace(/\./g, '');
    str = str.replace(/\?/g, '');
    str = str.replace(/:/g, '');
    return str;
}