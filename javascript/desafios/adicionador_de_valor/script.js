var res = document.getElementById('res')
var ray = []
function adicionar(){
    let npt= document.getElementById('numero')
    let num = Number(npt.value)
    let slct = document.getElementById('slct')
    if (num > 100 || num < 1){
        window.alert('Número inválido!')
    } else{
        ray.push(num)
        let item = document.createElement('option')
        item.innerText = `Valor ${num} adicionado`
        slct.appendChild(item)
    }
    res.innerHTML += (ray)
}