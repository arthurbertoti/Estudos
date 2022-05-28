function verificar(){
    var num = document.getElementById('num').value
    var tab = document.getElementById('tab')
    if(num == false){
        window.alert('Digite um número!')
    }else{
        tab.innerHTML=''
        for(var x = 1; x <= 10; x++){
            let item = document.createElement('option')
            item.innerText = `${num} x ${x} = ${num*x}`
            item.value= `tab${x}`
            tab.appendChild(item)
        }
    }
}

