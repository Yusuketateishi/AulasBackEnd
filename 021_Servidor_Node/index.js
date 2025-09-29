//criando constante para receber o módulo express
const express = require('express');
//criando uma aplicação express
const app = express();

//rota principal
app.get("/", (req, res) => {
    res.send("Bem Vindo ao Servidor")
});

//rota sobre
app.get("/sobre", (req, res) => {
    res.send("Esta página é sobre o projeto")
});

//rota usuarios
const usuarios = ["Ma","Me","Mi","Mo","Mu"];
app.get("/usuarios", (req, res) => {
    let html = '<h1>lista de usuarios</h1>';
    html = html + '<ul>'; //html += '<ul>'
    for (let usuariosAtual of usuarios) {
        html += `<li>${usuariosAtual}</li>`
    }
    html += '</ul>';
    res.send(html);
});

//rota usuario id
app.get('/usuario/:id', (req, res) => {
    const id = req.params.id;
    const usuarioSel = usuarios[id];
    if (usuarioSel == undefined) {
        res.send("Usuario não encontrado")
    }else {
    res.send(`Você esta visualizando o perfil do id ${id} - Seu nome é ${usuarioSel}`)
    }
});

//rota soma
app.get('/soma/:n1/:n2', (req, res) => {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    const resultado = n1 +n2;
    res.send(`${n1} + ${n2} = ${resultado}`);
})

//rota menu
app.get('/menu', (req, res) => {
    let html = `
    <h1>Menu</h1>
    <a> href= "/">Principal</a> <br>
    <a> href= "/Sobre">Sobre</a> <br>
    <a> href= "/usuarios">Usúario</a> <br>
    <a> href= "/usuario/0">Usúario 0</a> <br>
    <a> href= "/usuario/1">Usúario 1</a> <br>
    <a> href= "/usuario/2">Usúario 2</a> <br>
    <a> href= "/usuario/3">Usúario 3</a> <br>
    <a> href= "/usuario/4">Usúario 4</a> <br>
    <a> href= "/usuario/7">Usúario inválido</a> <br>
    <a> href= "/soma/16/2008">Soma</a> <br>
    `;

})

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
