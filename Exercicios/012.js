function PI() {
    let valorPI = (3.1415);
    return valorPI;
}

let PIvalor = "";
PIvalor = PI();

function calculoRaio(circuferencia) {
    let Raiocalculo = (circuferencia / (2 * PIvalor));
    return Raiocalculo;
}

let ResultadoRaio = "";
ResultadoRaio = calculoRaio(6);
console.log(`O valor do Raio é de ${ResultadoRaio}`);