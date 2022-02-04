//Encapsulamento modulo externo.
const inquirer = require('inquirer');

//Encapsulamento do modulo interno.
const operacao = require('./operacao');

//Encapsulamento dos métodos do modulo interno.
const soma = operacao.soma
const subtracao = operacao.subtracao
const multiplicacao = operacao.multiplicacao
const divisao = operacao.divisao

inquirer.prompt([
    {
        name: 'n1',
        message: 'Digite o primeiro número:'
    },
    {
        name: 'n2',
        message: 'Digite o segundo número'
    },
    {
        type:'list',
        name:'opcao',
        message: 'Qual operação deseja realizar?',
        choices: ['Soma', 'Subtracao','Multiplicacao','Divisao']
    }])
    .then(answers => {
        let n1 = parseFloat(answers.n1);
        let n2 = parseFloat(answers.n2);
        let opcao = answers.opcao;

        switch(opcao){
            case 'Soma': soma(n1,n2);
             break;
            case 'Subtracao': subtracao(n1,n2);
             break;
            case 'Multiplicacao': multiplicacao(n1,n2);
             break;
            case 'Divisao': divisao(n1,n2);
             break;
            default:
                console.log('Nenhuma opção escolhida');       }
        console.log('Answer: ', answers)
    }).catch((err)=> console.log(err))