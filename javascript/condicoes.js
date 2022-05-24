var hora = new Date().getHours()
if (hora <= 12 && hora >= 5){
    console.log('Bom dia!')
}else if (hora > 12 && hora < 19){
    console.log('Boa tarde')
}else{
    console.log('Boa noite')
}
console.log(hora)
