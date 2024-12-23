const containerResultado = document.getElementById('resultado');
const inputPeso = document.getElementById('input-peso');
const inputAltura = document.getElementById('input-altura');
const btnCalc = document.getElementById('botao-calc');

btnCalc.addEventListener("click", (e) => {
    e.preventDefault();

    exibeResultado(calculaIMC(inputPeso, inputAltura));

});

function exibeResultado(resultado) {

    containerResultado.innerHTML = '';
    let msg = "";
    let color = "";

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
            color = "Green";
            grau = "Normal";
        } else if (resultado < 18.5) {
            color = "blue";
            grau = "Abaixo do peso";
        }


        msg = `Seu IMC é: ${resultado} O seu peso está: ${grau}`;
        containerResultado.style.backgroundColor = color;
        containerResultado.append(msg);
    
}


function calculaIMC(inputpeso, inputaltura) {
    const peso = Number(inputpeso.value);
    const altura = Number(inputaltura.value);
    let resultado = peso / (altura * altura);

    return resultado;
}