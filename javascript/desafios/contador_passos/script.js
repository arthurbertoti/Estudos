function steps(){
    var ini = document.getElementById('start')
    var fim = document.getElementById('end')
    var pas = document.getElementById('step')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    }else{
        //colocando em variáveis os valores dos inputs
        var start = Number(ini.value)
        var end = Number(fim.value)
        var step = Number(pas.value)
        //verificando o valor do input 'PASSO'
        if(step <= 0){
            window.alert('Passo inválido! CONSIDERANDO Passo = 1')
            step = 1
        }
        res.innerHTML = '<p>Contando...</p>'
        //Contagem crescente:
        if(start < end){
            for(let c = start; c <= end; c += step){
                res.innerHTML += `${c} 👉 `                
        }
        //Contagem decrescente:
        }else{
            for(let c = start; c >= end; c -= step){
                res.innerHTML += `${c} 👉 `
        }
        }
        res.innerHTML += `🏁`   
}
}
