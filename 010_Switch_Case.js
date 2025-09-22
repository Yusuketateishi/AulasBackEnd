let DiaSemana = "Sexta";

switch (DiaSemana) {
    case "Sexta": // if (DiaSemana == Sexta,Quarta,Quinta)
    case "Quinta":
    case "Quarta":
        console.log('Hoje tem aula');
        break;
    case "Sabado": // else if (DiaSemana == Sabado,Domingo)
    case "Domingo":
    console.log('Hoje não tem aula');
        break;
    case "Segunda": // else if (DiaSemana == Segunda,Terça)
    case "Terça":
    console.log('Hoje tem Senai');
    break;
    default:
        console.log('Não é um dia da semana'); // else (DiaSemana == Alguma coisa além de dias)
    break;
};
