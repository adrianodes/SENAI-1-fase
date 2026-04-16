programa {
  funcao inicio() {
    // Indicar variáveis
    inteiro vitoria = 3, empate = 1, numeroVitorias, numeroEmpates
    inteiro totalVitorias, totalEmpates, totalPontos
    // Declarar valores
   escreva("Numero de vitorias: ")
   leia(numeroVitorias)
   escreva("Numero de empares: ")
   leia(numeroEmpates)
    // Calculos    
    totalVitorias = vitoria * numeroVitorias
    totalEmpates = empate * numeroEmpates  
    totalPontos = totalVitorias + totalEmpates
    // Apresentação
    escreva("Total de pontos do time: " + totalPontos)  
  }
}
