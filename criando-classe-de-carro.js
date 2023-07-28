class Carros {
    marca;
    cor;
    gastoM;

    constructor(marca, cor, gastoM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoM = gastoM;
    }

    calcularGasto(km,  preco) {
        return km * this.gastoM * preco;
    }
}

const uno = new Carros('Fiat', 'Vermelho',1/12)
const palio = new Carros('palio', 'preto', 1/10)

console.log(uno.calcularGasto(70, 5));
console.log(palio.calcularGasto(70, 5));