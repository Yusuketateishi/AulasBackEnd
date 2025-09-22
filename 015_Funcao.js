const prompt = require('prompt-sync')();
function BemVindp() {
    console.log("$%$$%$$%$$%$$%$$%$");
    console.log("####Bem Vindo!####");
    console.log("$%$$%$$%$$%$$%$$%$");
};

BemVindp();

for (let n = 1; n <= 1000; n++) {
    BemVindp();   
};

function multiplicacao(n1, n2) {
    let resultado = n1 * n2;
    return resultado;
};

let nu1 = prompt("Qual o primeiro número?");
let nu2 = prompt("Qual o primeiro número?");
let res1 = multiplicacao(nu1, nu2);
console.log(`O resultado é ${res1}`);

let res2 = multiplicacao(2,7);
console.log(`O resultado é ${res2}`);

console.log(multiplicacao(9,9));
