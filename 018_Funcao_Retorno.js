function CalcullarComissao(valor, percComissao) {
    let valorComissao = valor * (percComissao / 100)
    return valorComissao
}

let comissaoRetornada;;
comissaoRetornada = CalcullarComissao(2500, 5);

let salario = 3000;
