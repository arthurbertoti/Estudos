/* Arrays
São vetores ou variáveis compostas, que tem vários elementos. Elemento é composto por seu valor e por uma chave de identificação.
*/

let num = [6,1]


console.log(num)


num[4] = 7 //adiciona um novo valor na chave identificada
console.log(num)


num.push(9) //Adiciona um novo valor em uma nova chave de identificação, que será agora a última
console.log(num)


console.log(num[4])//mostra o valor presente na chave identificada


console.log(num.length) //para saber quantos elementos há em um arrays


console.log(num.sort()) //para deixar os valores em ordem crescente no array

for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
} //percurso para exibição de vetor

for(let pos in num){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
} //percurso para exibição de vetor simplificado (OBS: valores indefinidos não são mostrados)

console.log(num.indexOf(7)) //comando para pesquisar a chave do valor
console.log(num.indexOf(2)) //quando não tiver o valor, será mostrado -1 como resposta


function resume(x){
    for(let pos in x){
        console.log(`A posição ${pos} tem valor ${x[pos]}`)
}
}
let num = [6,1]
resume(num) //chama a função acima percorre o array