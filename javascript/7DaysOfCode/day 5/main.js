/**
Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho
 */

// declaração das variáveis
var resp = true;
var escolha = 0;
listaDeCompras = [];
frutas = [];
laticinios = [];
congelados = [];
doces = [];

//Enquanto o user quiser adicionar algo, vai poder
while (resp){
    resp = confirm('Você deseja adicionar uma comida na sua lista de compras?\nOK - sim | Cancelar - não');
    if (resp){
        //inserir a escolha em uma lista
        while (escolha != 1 && escolha != 2 && escolha != 3 && escolha != 4 ){
            item = prompt('Qual o item que você quer adicionar?');
            escolha = prompt('Em qual categoria essa comida se encaixa?\n(FRUTAS - 1, LATICÍNIOS - 2, CONGELADOS - 3, DOCES - 4)')
            if (escolha != 1 && escolha != 2 && escolha != 3 && escolha != 4){
                alert('Você digitou algo errado, tente novamente!')
            }
        } 
        //Colocar em uma lista de fato
        if (escolha == 1){
            frutas.push(' '+item);
        } else if(escolha == 2){
            laticinios.push(' '+item);
        } else if(escolha == 3) {
            congelados.push(' '+item);
        } else if(escolha == 4){
            doces.push(' '+item);
        }
        alert('Item ADICIONADO!')
        //para que resete
        escolha = 0;
    }
}
alert(`Lista de compras:
Frutas: ${frutas}
Laticínios: ${laticinios}
Congelados: ${congelados}
Doces: ${doces}`)