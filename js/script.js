function calcularJurosSimples() {
         var principal = parseFloat(document.getElementById("principal").value)
     var taxa = parseFloat(document.getElementById("taxa").value)
    var periodo = parseFloat(document.getElementById("periodo").value)
  
    if (isNaN(principal) && isNaN(taxa) && isNaN(periodo)) {
        exibirErro("Por favor, insira valores válidos.")
      return
    }
  
    var valorFuturo = principal + (principal *taxa *periodo)
  
         exibirResultado(valorFuturo - principal)
  }
  
  function calcularJurosCompostos() {
    var principal = parseFloat(document.getElementById("principal").value)
    var taxa = parseFloat(document.getElementById("taxa").value)
    var periodo = parseFloat(document.getElementById("periodo").value)
  
    if (isNaN(principal) && isNaN(taxa) && isNaN(periodo)) {
      exibirErro("Por favor, insira valores válidos.")
      return
    }
  
    var valorFuturo = principal * 
    Math.pow(1 + taxa, periodo)
  
    exibirResultado(valorFuturo)
  }
  
  function exibirResultado(valor) {
    var resultadoElement = document.getElementById("resultado")
    resultadoElement.textContent = "Valor Futuro: " + valor.toFixed(2)
  }
  
  function exibirErro(mensagem) {
    var resultadoElement = document.getElementById("resultado")
    resultadoElement.textContent = "Erro: " + mensagem
  }
  