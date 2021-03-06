module.exports = class ValidadorCPF {
  /**
     * Função responsável pela validação de CNPJ.
     * Retorna true se o CNPJ é válido e false se o CNPJ é inválido.
     * @example
     * // returns true
     * Util.isCnpjValido('00.000.000/0001-91');
     * @param {string} cnpj
     * @returns {boolean}
    */
  static isCnpjValido(cnpj) {
    let b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    if ((cnpj = cnpj.replace(/[^\d]/g, '')).length != 14) {return false;}

    if (/0{14}/.test(cnpj)) {return false;}

    for (var i = 0, n = 0; i < 12; n += cnpj[i] * b[++i]);
    if (cnpj[12] != (((n %= 11) < 2) ? 0 : 11 - n)) {return false;}

    for (var i = 0, n = 0; i <= 12; n += cnpj[i] * b[i++]);
    if (cnpj[13] != (((n %= 11) < 2) ? 0 : 11 - n)) {return false;}

    return true;
  }
};
