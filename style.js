function Calcular() {
    var alturaElemento = document.getElementById("altura");
    var valorAltura = alturaElemento.value;
    var valorNumericoAltura = parseFloat(valorAltura);
    // console.log(valorNumericoAltura);
    // alert(valorNumericoAltura);
    var pesoElemento = document.getElementById("peso");
    var valorPeso = pesoElemento.value;
    var valorNumericoPeso = parseFloat(valorPeso);

    var valorIMC = valorNumericoPeso / (valorNumericoAltura * valorNumericoAltura);
    console.log(valorIMC);
    
    var elementoValorIMC = document.getElementById("mostraValorIMC");
    var valorResultadoIMC = "O resultado IMC é " + valorIMC;
    elementoValorIMC.innerHTML = valorResultadoIMC;
  }

function Calcular() {
  // console.log("Clicou");
  // alert("Clicou");
}