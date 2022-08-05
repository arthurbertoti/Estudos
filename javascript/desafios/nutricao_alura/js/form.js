const tabela = document.querySelector('#tabela-pacientes');
const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", adicionarPaciente);

function adicionarPaciente(event){
    event.preventDefault();
    var formAdiciona = document.querySelector('#form-adiciona');
    var nome = formAdiciona.nome.value;
    var peso = formAdiciona.peso.value;
    var altura = formAdiciona.altura.value;
    var gordura = formAdiciona.gordura.value;

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    nomeTd.className = "info-nome";
    pesoTd.textContent = peso;
    pesoTd.className = "info-peso";
    alturaTd.textContent = altura;
    alturaTd.className = "info-altura";
    gorduraTd.textContent = gordura;
    gorduraTd.className = "info-gordura";
    imcTd.textContent = calculaImc(peso, altura);
    imcTd.className = "info-imc";

    var pacienteTr = document.createElement('tr');
    pacienteTr.className = 'paciente';
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    if (peso < 10 || peso > 1000){
        alert('Peso inválido');
        peso = false;
    }
    if (altura < 0.5 || altura > 2.70){
        alert('altura inválida');
        altura = false;
    }
    if (gordura <= 0 || gordura > 50){
        alert('% de gordura inválida');
        gordura = false;
    }
    if (peso && altura && gordura){
        console.log("coisa deu certo");
        tabela.appendChild(pacienteTr)
    }
}