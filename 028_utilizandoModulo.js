//importando o módulo criado
const funcoesJuros = require('./027_Modulo_juros');

//utilizando a função jurossimples do módulo
const resultadoJurosSimples = funcoesJuros.juros_simples(1000, 5 , 12)

console.log(resultadoJurosSimples);

//utilizando a função juros compostos do módulo
const resultadoJurosCompostos = funcoesJuros.juros_compostos(500, 4, 24)
//Desestruturando o objeto de retorno da função
const {juros, total} = resultadoJurosCompostos;

console.log(`O juris foi de RS$${juros} e o total foi de RS$${total}`);

