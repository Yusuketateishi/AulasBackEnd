let funcionario = {
    nome: 'Reinaldo',
    salario: 5000.00,
    idade: 40,
    setor: 'RH'
}

//Atribuindo as váriaveis os valores das propriedades do objeto
//let salario = funcionario.salario * 1.1;
//let nome = funcionario.nome;
//let idade = funcionario.idade;
//let setor = funcionario.setor;

//Desestruturando o objeto
//Declarando e atribuindo os valores automaticamente do objeto
let { idade , setor , salario , nome } = funcionario;
console.log(salario);
console.log(nome);
console.log(setor);
console.log(idade);
