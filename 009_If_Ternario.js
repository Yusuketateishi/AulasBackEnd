const aprovado = true;
let mensagem = "";
//Modo no if tradicional
if (aprovado == true) {
    mensagem = "aprovado"
} else  {
    mensagem = "Reprovado"
}

//Modo ternario
//             Condição     ? se verdadeiro : se falso
mensagem = (aprovado == true) ? "Aprovado" : "Reprovado";
mensagem = (aprovado == true) ? console.log("Aprovado") : console.log("Reprovado");