const { gets, print } = require('./funcoes-auxiliares-ex3.js');

const valorSalarioBruto = gets();
const beneficio = gets();

function calcularPorcentagem (valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota (salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if( salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

const aliquotaDoimposto = pegarAliquota(valorSalarioBruto);

const valorImposto = calcularPorcentagem(valorSalarioBruto, aliquotaDoimposto);
const transferir = valorSalarioBruto - valorImposto + beneficio;

print(transferir);