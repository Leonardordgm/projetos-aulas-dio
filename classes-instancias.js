class pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
} //aqui cria uma classe para as instâncias

const Leo = new pessoa ();
Leo.nome = 'Leonardo';
Leo.idade = 14; // aqui é uma instância

const pedro = new pessoa ();
pedro.nome = 'Pedrão';
pedro.idade = 19; // aqui é uma instância

pedro.descrever(); // aqui puxa a função lá em cima