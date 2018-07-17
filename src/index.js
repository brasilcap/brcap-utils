const {
    cpfEhValido,
    limpaCPF,
    validateSchemaService,
    validateSchemaSqs,
} = require('./validador');

const {
    getPropertiesS3,
} = require('./properties');

module.exports = {
    cpfEhValido,
    limpaCPF,
    validateSchemaService,
    validateSchemaSqs,
    getPropertiesS3,
};