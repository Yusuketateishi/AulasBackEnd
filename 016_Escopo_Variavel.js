let variavelGlobal = "Global";
function minhaFuncao(){
    let variavelLocal = "Local";
    console.log(variavelGlobal); //acessa a váriavel global
    console.log(variavelLocal);  //acessa a váriavel local
};

minhaFuncao();
console.log(variavelGlobal);
console.log(variavelLocal);
