programa {
  funcao inicio() {
    real gastos, faturamentoIngressos, faturamentoIntens, faturamentoBruto, lucroReais 
    real porcentagenLucro, lucroReais100
    // Declarar valores
    escreva("Lucros Capitão Ganso\n")
    escreva("Gastos: ")
    leia(gastos)
    escreva("Faturamento com ingrassos: ")
    leia(faturamentoIngressos)
    escreva("Faturamento com itens: ")
    leia(faturamentoIntens)
    // Calculos
    faturamentoBruto = faturamentoIngressos + faturamentoIntens
    lucroReais = faturamentoBruto - gastos
    lucroReais100 = lucroReais * 100
    porcentagenLucro = lucroReais100 / faturamentoBruto
    // Apresentação
    escreva("Lucro obtido em reais: R$" + lucroReais)
    escreva("\nLucro em percentual ; " + porcentagenLucro + "%")
  }
}
