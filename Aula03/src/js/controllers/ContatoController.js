class ContatoController {

    constructor(contatos) {
        this.contatos = contatos;
        this.contatosFiltrados = [];
    }

    salvar(contato) {
        this.contatos.push(contato);
    }

    filtrar(filtro) {
        if (this.contatos.length > 0) {
            this.contatosFiltrados = this.contatos.filter(function (contato) {
                let nome = contato.nome.toLowerCase();
                let email = contato.email.toLowerCase();

                /**
                 * Se o nome ou o e-mail do contato
                 * conter o filtro do usuário, retorno
                 * o contato
                 */
                return nome.includes(filtro) || email.includes(filtro);
            });
        }

        return this.contatosFiltrados;
    }

    recuperarTodos() {
        return this.contatos;
    }
}