const { gets, print } = require('./funcoes-auxiliares-ex2.js');

const n = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if(numero > maiorNumeroPar){
            maiorNumeroPar = numero;
        }  
    } else {
        if(menorNumeroImpar === 0) {
            menorNumeroImpar = numero;
        } else if (numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        } 
    }
}

print('O maior numero par é: ' + maiorNumeroPar);
print('O menor numero impar é: ' + menorNumeroImpar);