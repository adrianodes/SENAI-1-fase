programa {
  funcao inicio() {
    inteiro bombasporShow = 7, qtdShows, qtdTotalBomb
    real valorBomba, valorTotalBom, valorTotal
   // declarar valores
   escreva("Gastos nos shows Sarumano\n")
   escreva("valor de cada bomba: ") 
   leia(valorBomba)    
   escreva("Quantidade de shows: ")
   leia(qtdShows)
   // processamentos
   qtdTotalBomb = bombasporShow * qtdShows
   valorTotalBom = valorBomba * qtdTotalBomb
   // apresentção
   escreva("Serão gastos em bombas: R$" + valorTotalBom)

  }
}
