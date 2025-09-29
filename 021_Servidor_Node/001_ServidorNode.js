//criando constante para receber o módulo express
const express = require('express');
//criando uma aplicação express
const app = express();

//rota principal
app.get("/", (req, res) => {
    res.send("Bem Vindo ao Servidor")
});

//rota produtos
const produtos = ["Queijo","Leite","Caju","Pitoco","Muçarella"];
app.get("/produtos", (req, res) => {
    let html = '<h1>lista de produtos</h1>';
    html = html + '<ul>'; //html += '<ul>'
    for (let produtosAtual of produtos) {
        html += `<li>${produtosAtual}</li>`
    }
    html += '</ul>';
    res.send(html);
});

//rota usuario id
app.get('/produto/:id', (req, res) => {
    const id = req.params.id;
    const produtoSel = produtos[id];
    if (produtoSel == undefined) {
        res.send("Produto não encontrado")
    }else {
    res.send(`Você esta visualizando o produto ${produtoSel} seu id é ${id}`)
    }
});

app.get('/total/:id_produto/:preco/:qtde', (req, res) => {
    const produtoSel = produtos[req.params.id_produto];
    const preco = parseFloat(req.params.preco);
    const ProdutoQtde = parseFloat(req.params.qtde);
    const Total = preco * ProdutoQtde;
    res.send(`O produto selecionado é ${produtoSel}, Seu valor é ${preco}, a sua quantidade é ${ProdutoQtde} e o seu total é ${Total}`);
});

app.get('/menu', (req, res) => {
    res.send(
    `
    <h1>Menu</h1>
    <a> href= "/">Principal</a> <br>
    <a> href= "/produtos">Produtos</a> <br>
    <a> href= "/produto/0">Produto1</a> <br>
    <a> href= "/produto/1">Produto2</a> <br>
    <a> href= "/produto/2">Produto3</a> <br>
    <a> href= "/produto/3">Produto4</a> <br>
    <a> href= "/produto/4">Produto5</a> <br>
    <a> href= "/total/0/5/10">Queijo</a> <br>
    <a> href= "/total/1/9/2">Leite</a> <br>
    <a> href= "/total/2/3/8">Caju</a> <br>
    <a> href= "/total/3/1000/1">Pitoco</a> <br>
    <a> href= "/total/4/15/20">Muçarella</a> <br>
    `);
});

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
