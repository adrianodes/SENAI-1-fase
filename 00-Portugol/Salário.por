programa {
  funcao inicio() {
    // informações
    inteiro id, horasTrabalhadas
    real valorHora, salario
    // leitura
    escreva("Id funcionário: ")
    leia(id)
    escreva("Quantidade de horas trabalhadas: ")
    leia(horasTrabalhadas)
    escreva("Valor hora: ")
    leia(valorHora)
    //processamentos
    salario = horasTrabalhadas * horasTrabalhadas
    // saídas
    //NÚMERO = 25
    escreva("NÚMERO = " + id)        
    //SALÁRIO = US$ 550,00
    escreva("\nSALÁRIO = US$" + salario)
  }
}
