/**Classe responsável pela validação de CPF */
module.exports = class ValidadorCPF {

     /**
     * Função responsável retirar a formatação do CPF.
     * @example
     * limpaCPF(423.375.020-07);
     * // retorna 42337502007
     * @returns {string} Retorna o CPF sem formatação.
     * @param {any} cpf
     */
    static limpaCPF(cpf) {
        return cpf ? `${cpf}`.replace(/[^\d]+/g, '') : '';
    }

    /**
     * Função responsável pela validação de CPF.
     * Retorna true se o CPF é válido e false se CPF é inválido.
     * @example
     * ehValido(423.375.020-07);
     * // retorna true
     * @param {string} cpf
     * @returns {string} return sss
    */
    static ehValido(cpf) {
        if (!cpf) {
            return false;
        }

        let cpfSemFormatacao = this.limpaCPF(cpf);
        let cpfSrc = leftPad(cpfSemFormatacao);

        let tamanhoNaoEstahCorreto = cpfSrc.length !== 11;
        let cpfEstahNaBlackList = getCPFBlackList().includes(cpfSrc);

        if (tamanhoNaoEstahCorreto || cpfEstahNaBlackList) {
            return false;
        }

        return validadorCPFReceitaFederal(cpfSrc);
    }

}

/**Função retirada do site da receita federal */
function validadorCPFReceitaFederal(cpf){
    let soma = 0;
    let resto;
    
    for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) {
        resto = 0;
    }

    if (resto != parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
}

/**Lista de CPFs inválidos */
function getCPFBlackList() {
    const blackList = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ];
    return blackList;
}

function leftPad(cpf, length = 11){
    let src = cpf ? `${cpf}` : '';
    while (src.length < length) {
        src= `0${src}`;
    }
    return src;
}