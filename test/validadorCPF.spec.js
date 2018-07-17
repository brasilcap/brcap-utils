const ValidadorCPF = require('../src/util/validadorCPF');

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();


describe('validadorCPF', function () {

    describe('#cpfEhValido', function () {

        it('deve retornar false quando não há CPF', function () {
            expect(ValidadorCPF.ehValido('')).to.be.false;
        });

        it('deve retornar false quando o CPF é nulo', function () {
            expect(ValidadorCPF.ehValido(null)).to.be.false;
        });

        it('deve retornar false quando o CPF é undefined', function () {
            let cpf = undefined;
            expect(ValidadorCPF.ehValido(cpf)).to.be.false;
        });

        it('deve retornar false quando o tamanho do CPF é menor que 11', function () {
            expect(ValidadorCPF.ehValido('281315230')).to.be.false;
        });

        it('deve retornar false quando o tamanho do CPF é maior que 11', function () {
            expect(ValidadorCPF.ehValido('123456789123')).to.be.false;
        });

        it('deve retornar false quando o CPF é inválido', function () {
            expect(ValidadorCPF.ehValido('08944927051')).to.be.false;
        });

        it('deve retornar false para o CPF 00000000000', function () {
            expect(ValidadorCPF.ehValido('00000000000')).to.be.false;
        });

        it('CPF não deve ser alterado dentro da função', function () {
            let cpf = '42337502007';
            ValidadorCPF.ehValido(cpf);
            expect(cpf).to.equal('42337502007');
        });

        it('CPF formatado não deve ser alterado dentro da função', function () {
            let cpf = '423.375.020-07';
            ValidadorCPF.ehValido(cpf);
            expect(cpf).to.equal('423.375.020-07');
        });

        it('deve retornar true quando o CPF é válido [08944927057]', function () {
            expect(ValidadorCPF.ehValido('08944927057')).to.be.true;
        });

        it('deve retornar true quando o CPF é válido [28131523071]', function () {
            expect(ValidadorCPF.ehValido('28131523071')).to.be.true;
        });

        it('deve retornar true quando o CPF é válido [45708830018]', function () {
            expect(ValidadorCPF.ehValido('45708830018')).to.be.true;
        });

        it('deve retornar true quando o CPF é válido [74942390060]', function () {
            expect(ValidadorCPF.ehValido('74942390060')).to.be.true;
        });


        it('deve retornar true quando o CPF formatado é válido [089.449.270-57]', function () {
            expect(ValidadorCPF.ehValido('089.449.270-57')).to.be.true;
        });

        it('deve retornar true quando o CPF formatado é válido [189.850.760-00]', function () {
            expect(ValidadorCPF.ehValido('189.850.760-00')).to.be.true;
        });

        it('deve retornar true quando o CPF formatado é válido [423.375.020-07]', function () {
            expect(ValidadorCPF.ehValido('423.375.020-07')).to.be.true;
        });

        it('deve retornar true quando o CPF formatado é válido [423.375.020-07]', function () {
            expect(ValidadorCPF.ehValido('423.375.020-07')).to.be.true;
        });

        it('deve validar um cpf numerico corretamente', function () {
            expect(ValidadorCPF.ehValido(42337502007)).to.be.true;
        });

        it('deve validar um cpf numérico que esteja omitindo zeros a esquerda [06735743008]', function () {
            expect(ValidadorCPF.ehValido(6735743008)).to.be.true;
        });

        it('deve validar um cpf numérico que esteja omitindo zeros a esquerda [00311161243]', function () {
            expect(ValidadorCPF.ehValido(311161243)).to.be.true;
        });
    });
});