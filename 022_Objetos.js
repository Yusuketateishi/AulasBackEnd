let produto = {
    nome: "Celular",
    preco: 2000,
    marca: "Samsung",
    quebrado: false
}

//Exibir todos os dados do objeto
console.log(produto);
console.log(produto.nome); //Celular
console.log(produto.marca); //Samsung
console.log(produto.modelo); //undefinned
console.log(produto.preco); //Celular

produto.valor = 1900;
console.log(produto.preco);
produto.modelo = 'Galaxy'
console.log(produto.valor);

//iterando sobre as chaves do objeto utilizando o for
for (let chave in produto) {
    console.log(chave);
    console.log(produto[chave]);
    console.log(`Chave: ${chave} seu valor é ${produto[chave]}`);
}

let aluno = {
    nome: 'Gustavo',
    sexo: 'M',
    idade: 16,
    dados_mae: {
        nome: 'Maria',
        telefone: '18 9999999999',
    },
    boletim: [
    { materia: 'Português', nota: 10, faltas: 6},
    { materia: 'Matematica', nota: 8, faltas: 3}
]
}

console.log(aluno);
console.log(aluno.dados_mae.telefone);
console.log(aluno.boletim);
console.log(aluno.boletim[1].nota);
console.log(aluno.boletim[0].nota);
