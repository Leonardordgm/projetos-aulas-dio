class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() { //aqui não precisa de parametro por que já está na classe Pessoas
        return this.peso / (this.altura * this.altura); 
    } 

    classificarIMC() {
        const imc = this.calcularIMC();

        if (imc < 18.5) {
            return('Abaixo do peso!');
        } else if (imc >= 18.5 && imc < 25) {
            return('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return('Obesidade');
        } else {
            return('Obesidade Grave!!');
        }
    }
}

const jose = new Pessoas('jose', 70, 1.75);

console.log('Peso de José: ' + jose.calcularIMC());
console.log(jose.classificarIMC())