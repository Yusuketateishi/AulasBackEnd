const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts')

const app = express();

//configurando o motor de visualização EJS
app.set('view engine', 'ejs');
//Configurando a pasta para os arquivos estáticos
app.use(express.static('public'));

//Definindo o layout padrão da nossa página
app.use(expressLayouts);
app.set('layout', 'layouts/principal')

//Para processar e receber os dados do formulário
app.use(express.urlencoded({extended: true}));

//Rota principal do site
app.get('/', (req,res) => {
    //Buscando o arquivo index.ejs na pasta views
    res.render('index');
});



//Rota sobre do site
app.get('/sobre', (req,res) => {
    //Buscando o arquivo sobre.ejs na pasta views
    res.render('sobre');
});

//Rota juros simples do site
app.get('/juros_simples', (req,res) => {
    //Buscando o arquivo juros_simples.ejs na pasta views
    res.render('juros_simples');
});

app.post('/juros_simples', (req,res) => {
    //Recebendo os dados do campo do formulário
    const capital = req.body.capital;
    const taxa = req.body.taxa;
    const tempo = req.body.tempo;
    const juros = (capital*taxa*tempo) / 100;
    const total = Number(capital) + Number(juros);

    res.render('juros_simples', {capital, taxa, tempo, juros, total});
});

//Rota juros compostos do site
app.get('/juros_compostos', (req,res) => {
    //Buscando o arquivo juros_compostos.ejs na pasta views
    res.render('juros_compostos');
});

app.post('/juros_compostos', (req,res) => {
    //Recebendo os dados do campo do formulário
    const capital = req.body.capital;
    const taxa = req.body.taxa;
    const tempo = req.body.tempo;
    const total = capital * (1 + (taxa / 100)) ** tempo;
    const juros = (Number(total) - Number(capital));

    res.render('juros_compostos', {capital, taxa, tempo, juros, total});
});

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor http://localhost:${porta}`);
});