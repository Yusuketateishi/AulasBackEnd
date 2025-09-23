const PI = () => {
    let valorPI = (3.1415)
    return valorPI
}
let NumPI = "";
NumPI = PI();

const calculoRaio = (circuferencia) => {
    let Raiocalculo = (circuferencia / (2 * NumPI))
    return Raiocalculo
}

let ResultadoRaio = "";
ResultadoRaio = calculoRaio(6);
console.log(`O valor do Raio é de ${ResultadoRaio}`);