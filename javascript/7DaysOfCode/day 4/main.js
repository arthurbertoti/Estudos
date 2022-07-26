/**
Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.
*/

//Número randômico
let numero = parseInt(Math.random() * (10 - 0) + 0);
let resp;
tentativas = 0;
maxTentativas = 3;
while(resp != numero && tentativas < maxTentativas){
    resp = prompt('Digite um número (entre 0 e 10) tentando adivinhar o número que estou pensando');
    if (resp == numero){
        alert(`Meus parabéns, você ACERTOU! Eu estava pensando no número ${numero}`);
    } else {
        alert(`Que pena, você ERROU!`);
        tentativas ++;
    }
}
if (resp != numero){
    alert(`Eu estava pensando no número ${numero}!`);
}