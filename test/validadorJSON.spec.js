const validadorJSON = require('../src/util/validadorJSON');
fs = require('fs');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

describe('#validador payload service', function () {

    var httpMethod = 'post';
    var resource = "registros-venda";
    const schemaTemp = JSON.parse(fs.readFileSync('./test/json/ven-regvenda-post.json', "utf8"));
    var schema = {};
    schema.Body = JSON.stringify(schemaTemp.Body);

    it('validação payload valido', function (done) {

        validadorJSON.validateSchemaService(schema, getRequest(), resource, httpMethod, function (error, resultado) {
            if (error) {
                console.log('ERRO: ');
                throw (error);
            } else {
                done();
                console.log(resultado);
            }
        });

    });

    it('validação payload invalido', function (done) {

        validadorJSON.validateSchemaService(schema, getRequest2(), resource, httpMethod, function (error, resultado) {
            if (error) {
                console.log('ERRO: ');
                throw (error);
            } else {
                done();
                console.log(resultado);
            }

        });

    });

});


function getRequest() {
    return {
        "idParceiro": 3,
        "idPlano": 12,
        "idCanal": 3,
        "idPontoVenda": 1,
        "infoVenda": "campo opcional de uso livre pelo parceiro",
        "protocoloVenda": 1,
        "ufVenda": "RJ",
        "idFormaPagamento": 3,
        "valor": 10,
        "cpf": 83956118464,
        "ddd": 21,
        "telefone": 987654321,
        "tipoTelefone": 1,
        "dataVenda": "2018-01-01",
        "dataLiquidacao": "2017-12-22"
    }
}

function getRequest2() {
    return {
        "idParceiro": 3,
        "idPlano": 12,
        "idCanal": 3,
        "idPontoVenda": 1,
        "infoVenda": "campo opcional de uso livre pelo parceiro",
        "protocoloVenda": 1,
        "ufVenda": "RJ",
        "idFormaPagamento": 3,
        "valor": 10,
        "cpf": 83956118464,
        "tipoTelefone": 1,
        "dataVenda": "2018-01-01",
        "dataLiquidacao": "2017-12-22"
    }
}


function getSchema() {
    return {
        "registros-venda-bb": {
            "post": {
                "properties": {
                    "idParceiro": {
                        "type": "integer",
                        "required": true,
                        "message": {
                            "required": "idParceiro é um parâmetro obrigatório",
                            "type": "idParceiro deve ser um integer"
                        }
                    },
                    "idPlano": {
                        "type": "integer",
                        "maxLength": 4,
                        "message": {
                            "required": "idPlano é um parâmetro obrigatório",
                            "type": "idPlano deve ser um integer",
                            "maxLength": "idPlano tem tamanho máximo de 4"
                        }
                    },
                    "idCanal": {
                        "type": "integer",
                        "maxLength": 4,
                        "required": true
                    },
                    "idPontoVenda": {
                        "type": "integer",
                        "maxLength": 5,
                        "required": true
                    },
                    "idPagamento": {
                        "type": "string",
                        "maxLength": 4
                    },
                    "valor": {
                        "type": "number",
                        "maxLength": 4
                    },
                    "cpf": {
                        "type": "integer",
                        "maxLength": 11
                    },
                    "dataVenda": {
                        "type": "string"
                    },
                    "dataLiquidacao": {
                        "type": "string"
                    },
                    "uf": {
                        "type": "string",
                        "maxLength": 2
                    },
                    "ddd": {
                        "type": "string",
                        "maxLength": 3
                    },
                    "telefone": {
                        "type": "string",
                        "maxLength": 9
                    },
                    "idTelefone": {
                        "type": "integer"
                    },
                    "protocoloVenda": {
                        "type": "integer",
                        "maxLength": 10
                    }
                }
            }
        },
        "registros-venda": {
            "post": {
                "properties": {
                    "idParceiro": {
                        "type": "integer",
                        "required": true,
                        "message": {
                            "required": "idParceiro é um parâmetro obrigatório.",
                            "type": "idParceiro deve ser um integer."
                        }
                    },
                    "idPlano": {
                        "type": "integer",
                        "maxLength": 4,
                        "required": true,
                        "message": {
                            "required": "idPlano é um parâmetro obrigatório.",
                            "type": "idPlano deve ser um integer.",
                            "maxLength": "idPlano tem tamanho máximo de 4."
                        }
                    },
                    "idCanal": {
                        "type": "integer",
                        "maxLength": 4,
                        "required": true,
                        "message": {
                            "required": "idCanal é um parâmetro obrigatório.",
                            "type": "idCanal deve ser um integer.",
                            "maxLength": "idCanal tem tamanho máximo de 4."
                        }
                    },
                    "idPontoVenda": {
                        "type": "integer",
                        "maxLength": 5,
                        "required": true,
                        "message": {
                            "required": "idPontoVenda é um parâmetro obrigatório.",
                            "type": "idPontoVenda deve ser um integer.",
                            "maxLength": "idPontoVenda tem tamanho máximo de 5."
                        }
                    },
                    "idFormaPagamento": {
                        "type": "integer",
                        "maxLength": 4,
                        "required": true,
                        "message": {
                            "required": "idFormaPagamento é um parâmetro obrigatório.",
                            "type": "idFormaPagamento deve ser um integer.",
                            "maxLength": "idFormaPagamento tem tamanho máximo de 4."
                        }
                    },
                    "valor": {
                        "type": "number",
                        "maxLength": 16,
                        "required": true,
                        "message": {
                            "required": "valor é um parâmetro obrigatório.",
                            "type": "valor deve ser um integer.",
                            "maxLength": "valor tem tamanho máximo de 16."
                        }
                    },
                    "cpf": {
                        "type": "integer",
                        "maxLength": 11,
                        "required": true,
                        "message": {
                            "required": "cpf é um parâmetro obrigatório.",
                            "type": "cpf deve ser um integer.",
                            "maxLength": "cpf tem tamanho máximo de 11."
                        }
                    },
                    "dataVenda": {
                        "type": "string",
                        "required": true,
                        "message": {
                            "required": "dataVenda é um parâmetro obrigatório."
                        }
                    },
                    "dataLiquidacao": {
                        "type": "string",
                        "required": true,
                        "message": {
                            "required": "dataVenda é um parâmetro obrigatório."
                        }
                    },
                    "ufVenda": {
                        "type": "string",
                        "required": true,
                        "message": {
                            "required": "ufdataVenda é um parâmetro obrigatório.",
                            "type": "ufdataVenda deve ser um integer."
                        }
                    },
                    "ddd": {
                        "type": "integer",
                        "maxLength": 3,
                        "required": true,
                        "message": {
                            "required": "ddd é um parâmetro obrigatório.",
                            "type": "ddd deve ser um integer.",
                            "maxLength": "ddd tem tamanho máximo de 11."
                        }
                    },
                    "telefone": {
                        "type": "integer",
                        "maxLength": 9,
                        "required": true,
                        "message": {
                            "required": "telefone é um parâmetro obrigatório.",
                            "type": "telefone deve ser um integer.",
                            "maxLength": "telefone tem tamanho máximo de 9."
                        }
                    },
                    "protocoloVenda": {
                        "type": "integer",
                        "maxLength": 10,
                        "required": true,
                        "message": {
                            "required": "protocoloVenda é um parâmetro obrigatório.",
                            "type": "protocoloVenda deve ser um integer.",
                            "maxLength": "protocoloVenda tem tamanho máximo de 10."
                        }
                    }
                }
            }
        }
    }


}