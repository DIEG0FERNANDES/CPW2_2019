/**
 * Nosso BD fake!
 * (in memory DB)
 */

/**
 * Cria o objeto sidney
 */
let sidney = new Contato(
    'Sidney Roberto', '(67) 92873-7374',
    'sidney@email.com', '29/02/2003');
let lucas = new Contato(
    'Lucas Negri', '(67) 92929-2929',
    'lucas@email.com', '12/01/1971'
);
let leandro = new Contato(
    'Leandro Oliveira', '(67) 93373-2929',
    'leandro@email.com', '03/11/1982'
);
let daiane = new Contato(
    'Daiane Sampaio', '(67) 92822-9832',
    'daiane@email.com', '23/10/2008'
);
let marcia = new Contato(
    'Marcia Cristaldo', '(67) 98367-1010',
    'marcia@email.com', '03/10/1969'
);
var contatos = [
    sidney,
    lucas,
    leandro,
    daiane,
    marcia
];

/**
 * Instancia o objeto da
 * ContatoView
 */
var contatoView = new ContatoView(contatos);

