/**
Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”

Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.
DICA
Você pode fazer a procura do elemento que a pessoa deseja apagar da forma que quiser, usando métodos do Javascript para isso.

Existe o método .includes(elemento), que retorna true ou false se o array em questão contém o tal elemento ou não.

Existe também o método .indexOf(elemento), que retorna a posição desse elemento dentro do array, ou -1, caso não o encontre.

Já para a remoção em si, existem diferentes métodos. O método o shift, por exemplo, remove sempre o primeiro item da lista; o método pop remove o último; já o método splice remove um certo número de itens a partir de uma determinada posição. Escolha o que você achar que faz mais sentido para o seu programinha.
*/
var inserir = true;
var retirar = true;
var escolha = 0;
var itemAdd = '';
var itemRem= '';
const listaDeCompras = new Array();
const frutas = new Array();
const laticinios = new Array();
const congelados = new Array();
const doces = new Array();

//Enquanto o user quiser adicionar algo, vai poder
while (inserir || retirar){
    inserir = confirm('Você deseja adicionar uma comida na sua lista de compras?\nOK - sim | Cancelar - não');
    if (inserir){
        //inserir a escolha em uma lista
        while (escolha != 1 && escolha != 2 && escolha != 3 && escolha != 4 ){
            itemAdd = prompt('Qual o item que você quer adicionar?');
            escolha = prompt('Em qual categoria essa comida se encaixa?\n(FRUTAS - 1, LATICÍNIOS - 2, CONGELADOS - 3, DOCES - 4)')
            if (escolha != 1 && escolha != 2 && escolha != 3 && escolha != 4){
                alert('Você digitou algo errado, tente novamente!')
            }
        } 
        //Colocar em uma lista de fato
        if (escolha == 1){
            frutas.push(' '+ itemAdd);
        } else if(escolha == 2){
            laticinios.push(' '+ itemAdd);
        } else if(escolha == 3) {
            congelados.push(' '+ itemAdd);
        } else if(escolha == 4){
            doces.push(' '+ itemAdd);
        }
        alert('Item ADICIONADO!')
        //para que resete
        escolha = 0;
    }

    //Para retirar um item
    retirar = confirm('Você deseja remover algo de sua lista de compras?\nOK - sim | Cancelar - não')
    if(retirar){
        while (escolha != 1 && escolha != 2 && escolha != 3 && escolha != 4 ){
            escolha = prompt('De qual categoria essa você gostaria de remover o item?\n(FRUTAS - 1, LATICÍNIOS - 2, CONGELADOS - 3, DOCES - 4)')
            if (escolha != 1 && escolha != 2 && escolha != 3 && escolha != 4){
                alert('Você digitou algo errado, tente novamente!')
            }
        }
        if (escolha == 1){
            itemRem = prompt(`${frutas}\nQual o item que você quer retirar?`)
            if (frutas.indexOF(itemRem) != -1){
                frutas.splice(frutas.indexOF(itemRem),1);
                alert(frutas);
            } else{
                alert('Não foi possível encontrar o item dentro da lista!')
            }
        } else if(escolha == 2){
            itemRem = prompt(`${laticinios}\nQual o item que você quer retirar?`)
            if (laticinios.indexOF(itemRem) != -1){
                laticinios.splice(laticinios.indexOF(itemRem),1);
                alert(laticinios);
            } else{
                alert('Não foi possível encontrar o item dentro da lista!')
            }
        } else if(escolha == 3) {
            itemRem = prompt(`${congelados}\nQual o item que você quer retirar?`)
            if (congelados.indexOF(itemRem) != -1){
                congelados.splice(congelados.indexOF(itemRem),1);
                alert(congelados);
            } else{
                alert('Não foi possível encontrar o item dentro da lista!')
            }
        } else if(escolha == 4){
            itemRem = prompt(`${doces}\nQual o item que você quer retirar?`)
            if (doces.indexOF(itemRem) != -1){
                doces.splice(doces.indexOF(itemRem),1);
                alert(doces);
            } else{
                alert('Não foi possível encontrar o item dentro da lista!')
            }
        }
    }
}
alert(`Lista de compras:
Frutas: ${frutas}
Laticínios: ${laticinios}
Congelados: ${congelados}
Doces: ${doces}`)