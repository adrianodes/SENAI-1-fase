programa {
  funcao inicio() {
    real salario, moradia, agua, luz, internet, gasolina, streamings
    real  telefone, outros, totalDespesas, sobraSalario
    //declarar valores
    escreva("Planilha de despesas")
    escreva("\nSalário: R$ ")
    leia(salario)
    escreva("Moradia: R$") 
    leia(moradia)
    escreva("Água: R$")
    leia(agua)
    escreva("Luz: R$")
    leia(luz)
    escreva("Internet: R$")
    leia(internet)
    escreva("Gasolina: R$")
    leia(gasolina)
    escreva("Streamings: R$")
    leia(streamings)
    escreva("Telefone: R$")
    leia(telefone)
    escreva("Outros: R$")
    leia(outros)
    //calculos
    totalDespesas = moradia + agua + luz + internet + gasolina + streamings + telefone + outros
    sobraSalario = salario - totalDespesas
    // apresentação
    escreva("Total de despesas: "+ totalDespesas)
    escreva("\nRestante do salário: R$" + sobraSalario)
  }
}
