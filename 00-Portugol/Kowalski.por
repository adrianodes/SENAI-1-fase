programa {
  funcao inicio() {
    // criar as variaveis
    inteiro qtdRelatorioPF, qtdRelatorioPJ, tempoRelatoriosPF, tempoRelatoriosPJ
    inteiro qtdTotal,valorTotal, tempoTotal 
    real valorTotalPF, valorTotalPJ
    real valorTotal, mediaValoPF, mediaValoPJ
    real mediaTempoPF, mediaTempoPj  
    // leitura dos dados
    escreva("Quantidade de relatório PF: ")
    leia(qtdRelatorioPF)
    escreva("Quantidade de relatório PJ: ")
    leia(qtdRelatorioPJ)
    escreva("Tempo para elaborar os relatório PF: ")
    leia(tempoRelatoriosPF)
    escreva("Tempo para elaborar os relatório PJ: ")
    leia(tempoRelatoriosPJ)
    escreva("Valor total recebido de PF: ")
    leia(valorTotalPF)
    escreva("Valor total recebido de PJ:")
    leia(valorTotalPJ)
    // processar/calcular
    qtdTotal = qtdRelatorioPF + qtdRelatorioPJ
    tempoTotal = tempoRelatoriosPF + tempoRelatoriosPJ
    valorTotal = valorTotalPF + valorTotalPJ
    mediaValoPF = valorTotalPF / qtdRelatorioPF
    mediaValoPJ = valorTotalPJ / qtdRelatorioPJ
    mediaTempoPF = tempoRelatoriosPF / qtdRelatorioPF
    mediaTempoPj = tempoRelatoriosPJ / qtdRelatorioPJ
    // apresentar os dados
    escreva("Quantidade total de relatórios: " + qtdTotal)
    escreva("\nTempo total trabalhado: " + tempoTotal)
    escreva("\nValor total recebido: " + valorTotal)
    escreva("\nMédia valor recebido por relatório PF: " + mediaValoPF)
    escreva("\nMédia valor recebido por relatório PJ: " + mediaValoPJ)
    escreva("\nMédia tempo gasto por relatório PF: " + mediaTempoPF)
    escreva("\nMédia tempo gasto por relatório PJ" + mediaTempoPj)
  }
}
