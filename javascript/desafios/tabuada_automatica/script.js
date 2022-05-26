function verificar(){
    var num = document.getElementById('num').value
    var res = document.getElementById('res')
    if(num == ''){
        window.alert('Digite um número!')
    }else{
        for(var x = 1; x <= 10; x++){
            if (x == 1){
                res.innerHTML = `<p>${num} x ${x} = ${num*x}</p>`
            }else{
                res.innerHTML += `<p>${num} x ${x} = ${num*x}</p>`
        }
    }
}
}
