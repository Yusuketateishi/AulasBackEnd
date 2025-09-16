const idade = 16;

if (idade >= 18) {
    console.log('Você é um adulto');
} else {
    console.log('Você não é um adulto');
}


if (idade >= 18) {
    console.log('Adulto');
} else if (idade >= 12 && idade < 18) {
    console.log('Adolecente');
} else if (idade < 12 && idade > 1) {
    console.log('criança');
} else if (idade <= 1) {
    console.log('bebe');
}