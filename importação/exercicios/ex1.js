const { gets, print } = require('./funcoes-auxiliares-ex1.js');

const media = gets();

if (media >= 0 && media < 5) {
    print('Reprovado');
} else if (media >=5 && media < 7) {
    print('Recuperação');
} else if (media >=7 && media <= 10) {
    print('Passou!');
} else if (media > 10) {
    print('A nota maxima é 10.');
} else {
    print('Numero invalido')
}