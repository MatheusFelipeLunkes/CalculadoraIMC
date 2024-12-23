const containerResultado = document.getElementById('resultado');
const inputPeso = document.getElementById('input-peso');
const inputAltura = document.getElementById('input-altura');
const btnCalc = document.getElementById('botao-calc');

btnCalc.addEventListener("click", (e) => {
    e.preventDefault();

    
    if (isNaN(inputPeso.value) || isNaN(inputAltura.value) || inputPeso.value.trim() === "" || inputAltura.value.trim() === "") {
        exibeErro("Por favor, insira apenas valores numéricos para peso e altura.");
        return;
    }

    
    exibeResultado(calculaIMC(inputPeso, inputAltura));
});

function exibeErro(mensagem) {
    containerResultado.innerHTML = '';
    containerResultado.style.backgroundColor = "yellow"; 
    containerResultado.textContent = mensagem; 
}

function exibeResultado(resultado) {
    containerResultado.innerHTML = ''; 
    let msg = "";
    let color = "";

    if (isNaN(resultado) || !isFinite(resultado)) {
        msg = "Os dados inseridos são inválidos. Certifique-se de usar apenas valores numéricos.";
        color = "yellow";
        containerResultado.style.backgroundColor = color;
        containerResultado.textContent = msg;
        return;
    }

    let grau = "";
    if (resultado >= 40) {
        color = "red";
        grau = "Obesidade Grave";
    } else if (resultado < 40 && resultado >= 30) {
        color = "orange";
        grau = "Obesidade";
    } else if (resultado < 30 && resultado >= 25) {
        color = "yellow";
        grau = "Sobrepeso";
    } else if (resultado < 25 && resultado >= 18.5) {
        color = "green";
        grau = "Normal";
    } else if (resultado < 18.5) {
        color = "blue";
        grau = "Abaixo do peso";
    }

    msg = `Seu IMC é: ${resultado.toFixed(2)}. O seu peso está: ${grau}`;
    containerResultado.style.backgroundColor = color;
    containerResultado.textContent = msg;
}

function calculaIMC(inputpeso, inputaltura) {
    const peso = Number(inputpeso.value);
    const altura = Number(inputaltura.value);
    return peso / (altura * altura);
}