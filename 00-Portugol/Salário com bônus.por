programa {
  funcao inicio() {
    cadeia nome
    real salario, vendas, total
    // leitura
    escreva("Nome do funcionário: ")
    leia(nome)
    escreva("Salário: R$")
    leia(salario)
    escreva("Vendas: R$")
    leia(vendas)
    // calculos
    total = salario + (vendas * 0.15)
    // apresentação

  escreva("Salário total: R$" + total)
  }
}
