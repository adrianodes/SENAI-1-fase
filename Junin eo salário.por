programa {
  funcao inicio() {
    // Indicar variáveis
    real salarioMensal, diasTrabalhados, salarioDiario, salariosemanal
    // Declarar valores
    escreva("Salário mensal: ")
    leia(salarioMensal)
    escreva("Dias trabalhados: ")
    leia(diasTrabalhados)
    // Calculos
    salarioDiario = salarioMensal / diasTrabalhados
    salariosemanal = salarioDiario * 5 
    // Apresentação
    escreva("Valor recebido por dia trabalhado: " + salarioDiario)
    escreva("\nValor recebido por semana trabalhado: " + salariosemanal)
  }
}
