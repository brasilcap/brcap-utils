const ValidadorCPF = require("./util/validadorCPF.js");

const validadorJSON = require("./util/validadorJSON.js");

/**
 * Função responsável pela validação de CPF.
 * Retorna true se o CPF é válido e false se CPF é inválido.
 * @example
 * // returns true
 * Util.cpfEhValido('423.375.020-07');
 * @param {string} cpf
 * @returns {string}
 */
function cpfEhValido(cpf) {
    return ValidadorCPF.ehValido(cpf);
}

/**
 * Função responsável por limpar CPF
 * @example
 * // returns 42337502007
 * Util.limpaCPF(423.375.020-07);
 * @returns {string} Retorna o CPF sem formatação.
 * @param {string} cpf
 */
function limpaCPF(cpf) {
    return ValidadorCPF.limpaCPF(cpf);
}


/**  Função responsável por validar json da fila, passando arquivo do s3
 * @param  {Json} schema
 * @param  {payload} payload
 * @param  {callback} callback
 */
function validateSchemaSqs(schema, payload, callback) {
    validadorJSON.validateSchemaSqs(schema, payload, function (error, sucess) {
        callback(error, sucess);
    });
}


/** Função responsável por validar json do serviço, buscando arquivo no s3
 * @param  {String} schema nome do arquivo que esta no bucket 
 * @param  {payload} payload json a ser validado
 * @param  {String} resource nome do recurso do serviço, exemplo: registros-venda-bb
 * @param  {String} httpMethod exemplo: POST, GET, PUT
 * @param  {callback} callback
 */
function validateSchemaService(schema, payload, resource, httpMethod, callback) {
    validadorJSON.validateSchemaService(nomeSchema, payload, resource, httpMethod, function (error, sucess) {
        callback(error, sucess);
    });
}


module.exports = {
    cpfEhValido: cpfEhValido,
    limpaCPF: limpaCPF,
    validateSchemaSqs: validateSchemaSqs,
    validateSchemaService: validateSchemaService
};