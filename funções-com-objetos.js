class pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
} //aqui cria uma classe para as instâncias

function compararP (p1, p2, p3) {
    if (p1.idade > p3.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p3.nome}`)
    } else if (p3.idade > p1.idade) {
        console.log(`${p3.nome} é mais velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p3.nome} tem a mesma idade`)
    } 
}

const Leo = new pessoa('Leonardo', 14);
const awd = new pessoa('awd', 12);
const pedro = new pessoa('pedrão', 15);

compararP(Leo, awd, pedro)