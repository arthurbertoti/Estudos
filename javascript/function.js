function parimpar(x){ //função para verificar se o número é par ou ímpar
    if (x % 2 == 0){
        return 'É par'
    }else{
        return 'É ímpar'
        }
}
let num = parimpar(13)
console.log(num)
let num2 = parimpar(12)
console.log(num2)





function soma(x=0, y=0){// '=0' serve para pré-definir o número caso o parâmetro não seja passado
    return x+y
}

console.log(soma(1, 2))





var fatorial = function(num) { //esta é a sintaxe para usar uma função dentro de uma variável
    var res = 1
    for(let c = num; c > 1; c--){
        res *= c
    }
    return res
}
console.log(fatorial(5))






function fat(n){
    if(n == 1){
        return 1
    }else{
        return n *= fat(n-1) //RECURSIVIDADE (função 'chamar' ela mesma):
    }
}
console.log(fat(4))