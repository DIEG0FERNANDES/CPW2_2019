/**
 * Imprime uma mensagem no console
 * do browser
 */
console.log("Fala, negada!");
//alert("Fala, negada!"); Não usar caixa de alerta - é ridiculo!

/**
 * Pega o span cujo id é igual a "mensagem"
 * e coloca na variável mensagem
 */
var mensagem = document.getElementById("mensagem");

// Coloca um texto dentro do span

mensagem.innerHTML = "Fala, negada!";

/**
 * Injeta um parágrafo dentro da div
 * "conteiner"
 */

/**
 * Cria uma tag p e salva
 * na variável páragrafo
 */
var paragrafo = document.createElement("p");
paragrafo.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Ut tincidunt auctor eros, a venenatis felis. 
Donec posuere posuere odio ut sodales. 
Nullam vitae risus quis leo dignissim faucibus. 
Praesent sagittis nec ligula vel eleifend. 
Integer lobortis urna lectus, eu mollis sapien fringilla ullamcorper. 
Duis vel ullamcorper dolor. 
Pellentesque porta dui at nisl maximus vehicula. 
Nunc viverra tincidunt dolor a ultricies. 
Morbi feugiat augue ac facilisis varius. 
Duis sit amet sodales risus. 
Cras nec neque in libero viverra tristique.
`;

var conteiner = document.getElementById("conteiner");

/**
 * Anexa a tag de parágrafo dentro da 
 * div conteiner
 */
conteiner.appendChild(paragrafo);
document.createElement("p");