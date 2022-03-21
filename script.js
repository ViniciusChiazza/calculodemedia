//

function calcularNotas() {
  var nota1bimestre = Number.parseFloat(document.getElementById("n1").value);
  var nota2bimestre = Number.parseFloat(document.getElementById("n2").value);
  var nota3bimestre = Number.parseFloat(document.getElementById("n3").value);
  var nota4bimestre = Number.parseFloat(document.getElementById("n4").value);
  var notaFinal =
    (nota1bimestre + nota2bimestre + nota3bimestre + nota4bimestre) / 4;
  var notaFixada = notaFinal.toFixed(1);
  document.getElementById("nota").innerHTML =
    "Sua média final é: " + notaFixada;

  if (notaFixada >= 7) {
    document.getElementById("nota").innerHTML =
      "Parabéns! Você foi APROVADO, sua média foi " + notaFixada;
  } else {
    document.getElementById("nota").innerHTML =
      "Poxa! Voce não passou, sua nota foi " + notaFixada;
  }
}