const { gets, entradas, print } = require('./funcoes-auxiliares');

const numerosS = [];

for (let i = 0; i < entradas.length; i++) {
    const numeroS = gets();
    numerosS.push(numeroS);
}

let maiorV = 0;

for (let i = 0; i < numerosS.length; i++) {
    const numeroS = numerosS[i];
    if (numeroS > maiorV) {
        maiorV = numeroS;
    } 
    
}

print(maiorV);