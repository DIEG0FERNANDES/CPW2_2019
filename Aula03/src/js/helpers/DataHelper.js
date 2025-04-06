const DataHelper = {

    /**
     * Formata uma data no padrão dd/mm/aaaa
     */
    formatarData: dataStr => {
        console.log(dataStr);
        if (dataStr) {
            const data = new Date(dataStr);
            let dia = data.getDate() + 1;
            let mes = data.getMonth() + 1;
            let ano = data.getFullYear();

            return `${dia}/${mes}/${ano}`;
        }

        return '';
    }
}