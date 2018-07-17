# BRCAP-Utils
Biblioteca utilitária utilizada pela equipe de desenvolvimento da Brasil Cap.

## Instalação
`$ npm install brcap-utils`

## Desenvolvendo
Para desenvolver com esta lib basta rodar o script `npm start`, tudo o que for desenvolvido em `src` e exportado em `src/index.js` será transpilado para `index.js` já no formato de ES5 em tempo de execução, então bastar manter um `npm link` com o projeto desejado.

## Deploy
`npm run build` && `npm publish`

## Exemplos

### Método utilitário para Validação de CPF
Exemplo de utilização:

```javascript
    const Util = require('brcap-utils');
    let cpfEhValido = Util.cpfEhValido('423.375.020-07');
    if(cpfEhValido){
        //faz algo
    }
```
### Método para recuperar properties do S3 

```javascript
const {
    getPropertiesS3,
} = require('brcap-utils');

const properties = await getPropertiesS3('brasilcap-properties-dev', [{
        chave: 'chaveAWS',
        valor: 'valorProperties',
    }]);

```