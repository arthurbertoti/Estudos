function verificar(){
    var ano = new Date().getFullYear()
    var idade = document.getElementById('age').value 
    var sex = document.getElementsByName('radsex')
    var img = document.createElement('img')
    res = document.getElementById('answer')
    img.setAttribute('id', 'photo')
    if (idade > ano || idade == 0 || ano - idade > 125 ){
        res.innerHTML = `[ERRO] ano de nascimento <strong>INCORRETO</strong>`
    }else{
        var idade = ano - idade
        if(sex[1].checked){
            var sex = 'a Mulher'
            if (idade < 13){
                img.setAttribute('src', "images/mulher/crianca.jpg") 
            } else if(idade < 30){
                img.setAttribute('src', "images/mulher/jovem.jpg")
            } else if(idade < 65){
                img.setAttribute('src', "images/mulher/media.jpg")
            } else if (idade <= 125){
                img.setAttribute('src', "images/mulher/idosa.jpg")
            }
        }else if (sex[0].checked){
            var sex = ' Homem'
            if (idade < 13){
                img.setAttribute('src', "images/homem/crianca.jpg")
            } else if(idade < 30){
                img.setAttribute('src', "images/homem/jovem.jpg")
            } else if(idade < 65){
                img.setAttribute('src', "images/homem/media.jpg")
            } else if (idade <= 125){
                img.setAttribute('src', "images/homem/idoso.jpg")
            }
        }
        res.innerHTML = `Identificamos um${sex} de ${idade} anos`
        res.appendChild(img)
    }
}