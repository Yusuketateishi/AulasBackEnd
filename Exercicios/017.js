const CalculoSoma = (nm1,nm2) => {
    let Soma = (nm1 + nm2);
    return Soma
}
const CalculoSubtracao = (nm1,nm2) => {
    let Sub = (nm1 - nm2);
    return Sub
}
const CalculoMulti = (nm1,nm2) => {
    let Mult = (nm1 * nm2);
    return Mult
}
const CalculoDiv = (nm1,nm2) => {
    let Div = (nm1 / nm2);
    return Div
}

let ResultadoSoma;;
ResultadoSoma = CalculoSoma(2,2);
console.log(`O Resultado do calculo é ${ResultadoSoma}`);
let ResultadoSub;;
ResultadoSub = CalculoSubtracao(2,2);
console.log(`O Resultado do calculo é ${ResultadoSub}`);
let ResultadoMult;;
ResultadoMult = CalculoMulti(2,2);
console.log(`O Resultado do calculo é ${ResultadoMult}`);
let ResultadoDiv;;
ResultadoDiv = CalculoDiv(2,2);
console.log(`O Resultado do calculo é ${ResultadoDiv}`);
