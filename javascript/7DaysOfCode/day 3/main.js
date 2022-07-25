/*
Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.
*/
var area;

/*Exercício 1*/
while (area != 1 && area != 2){
    area = prompt('Digite o número da área que você quer seguir: Front-End (1) ou Back-End (2).');
    
    /**caso o usuário digite errado*/
    if (area != 1 && area != 2){
        alert('Você digitou um número incorreto, tente novamente!');
    }
}


/*Exercício 2*/
var step2;
while (step2 != 1 && step2 != 2){
    if (area == 1){
        var step2 = prompt('Digite o número do que você quer aprender: React (1) ou Vue JS (2)?');
        var espec = 'Front-End'
    } else if (area == 2){
        var step2 = prompt('Digite o número do que você quer aprender: C# (1) ou JAVA (2)?');
        var espec = 'Back-End'
    }

    /**caso o usuário digite errado*/
    if (step2 != 1 && step2 != 2){
        alert('Você digitou um número incorreto, tente novamente!');
    }
}


/**Exercício 3*/ 
var step3;
while (step3 != 1 && step3 != 2){
    if (step3 != 1 && step3 != 2){
        step3 = prompt('Digite o número de sua escolha: seguir se especializando em sua área (1) ou virar um desenvolvedor Fullstack (2).');
    }
    
    /**resposta perante a escolha */
    if (step3 == 1){
        alert(`Que demais, acredito que você será um bom programador ${espec}!`);
    }
    if(step3 == 2){
        alert(`Que demais, acredito que você conseguirá aprender e pôr em prática seus conhecimentos em ambas as áreas!`);
    }

    /**caso o usuário digite errado*/
    if (step3 != 1 && step3 != 2){
        alert('Você digitou um número incorreto, tente novamente!');
    }
}

/**Exercício 4*/
var count = 0
var extra = true
while (extra){
    /**primeira vez pergutando */
    if (count == 0){
        extra = confirm('Tem alguma tecnologia que você gostaria de se especializar ou conhecer?')
        count ++
    }
    
    /**Outras possíveis vezes */
    else{
        extra = confirm('Tem mais alguma tecnologia que você gostaria de aprender?');
    }
    if(extra){
        prompt('Qual?');
        alert('Interessante, espero que você consiga!')
    }
}

