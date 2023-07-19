function helloWorld() {
    alert("Hello World")
}

/*
VAR = Escopo Global
LET = Escopo Local
CONST = Constante - Escopo Global
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100px'
email.style.width = '100'

function validaNome(){

    if (nome.value.legth < 3){
       txt.innerHTML = 'Nome Inválido'
       txt.style.color = 'red'
    }else{
        txt.innerHTML = 'Nome Válido'
       txt.style.color = 'gren'
    }
}