programa {
  funcao inicio() {
   inteiro qtdJareCaminhao, qtdJareCaminhao, qtdCaminhoes
   real custocaminhao, valorJare, lucroVenda, lucroCaminhao, lucroTemporada
  // Declarar valores
  escreva("Tabela de vendas de jarés")
  escreva("\nQuantidade de jarés que cada caminhão sai da fazenda : ")
  leia(qtdJareCaminhao) 
  escreva("Valor cobrado por cada caminhão: R$")
  leia(custocaminhao)
  escreva("Valor de cada jaré: R$")
  leia(valorJare) 
  escreva("Quantidade de caminhões: ")
  leia(qtdCaminhoes)
  // Calculos
  lucroVenda = qtdJareCaminhao * valorJare
  lucroCaminhao = lucroVenda - custocaminhao
  lucroTemporada = lucroCaminhao * qtdCaminhoes
  // Apresentação
  escreva("Lucro total por caminhão: R$" + lucroCaminhao)
  escreva("\nLucro total por temporada: R$" + lucroTemporada)


  }
}
