function steps(){
    var x = document.getElementById('start').value
    var end = document.getElementById('end').value
    var step = document.getElementById('step').value
    var res = document.getElementById('res')
    for(var start = x; start <= end; start = step + start){
        if (step == 0 || start < 0 || start == null || step == null || end < 0 || end == null || start > end){
            document.alert('[ERRO]. Imposível contar!')
        }else{
            if(start == x){
                res.innerHTML = '<p>Contando...</p>'
                res.innerHTML += `${start}`
            }else if(start == end){
                res.innerHTML += `👉 ${start} 👉 🏁`    
            }else{
                res.innerHTML += ` 👉 ${start}`
            }
        }

    }   
}
