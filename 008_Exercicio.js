var Usuario = 'Marcelo';
var Senha = 123;

if (Usuario == 'Marcelo' && Senha == 123) {
    console.log('Usuário logado');
} else if (Usuario != 'Marcelo' && Senha == 123) {
    console.log('Usuário inválido');
} else if (Usuario == 'Marcelo' && Senha != 123) {
    console.log('Senha inválida');
} else if (Usuario != 'Marcelo' && Senha != 123) {
    console.log('Senha e Usuário incorretos');
}