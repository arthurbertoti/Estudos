var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / ( altura * altura);
    return imc.toFixed(2)
}

for(var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        peso = false;
    }

    if(altura <= 0 || altura >= 3.0){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        altura = false;
    }

    if(peso && altura){   
        tdImc.textContent = calculaImc(peso, altura);
    }    
}
