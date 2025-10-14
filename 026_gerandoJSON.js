const fs = require('fs');

const pessoa = {
    nome: 'Marcelo',
    idade: 37,
    hobbies: ['programar', 'viajar', 'correr']
}

const json = JSON.stringify(pessoa);

//Gravando o arquivo JSON
fs.writeFileSync('./026.json', json)