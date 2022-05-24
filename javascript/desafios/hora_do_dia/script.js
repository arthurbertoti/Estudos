function load(){
    var msg = document.getElementById('msg')
    var photo = document.getElementById('img')
    var time = new Date().getHours()
    var hey = document.getElementById('hey')
    msg.innerHTML = `Agora são ${time} horas`
    if (time >= 5 && time < 13) {
        photo.src = "images/morning.jpg"
        document.body.style.background = '#E6A218'
        hey.innerHTML= "Bom dia"
    } else if (time > 12 && time < 19) {
        photo.src = "images/afternoon.jpg"
        document.body.style.background = '#F2C7AE'
        hey.innerHTML= "Boa tarde"
    } else {
        photo.src = "images/night.jpg"
        document.body.style.background = '#394A59'
        hey.innerHTML = "Boa noite"
    }
}