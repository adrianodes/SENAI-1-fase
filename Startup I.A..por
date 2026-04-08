programa {
  funcao inicio() {
    inteiro promptToken = 5, catactertoken = 1, qtdcaracter, totalToken
    real valorToken, valorTotalprompt 
   // leitura
   escreva("Relatorios Startup A.I.\n")  
   escreva("Quantidade de caracteres: ")
   leia(qtdcaracter)
   escreva("Valor do token: ")
   leia(valorToken)
   // processamentos
   totalToken = catactertoken * qtdcaracter + promptToken
   valorTotalprompt = valorToken * totalToken
   // apresentação
   escreva("Quantidade de tokens gastos: " + totalToken)
   escreva("\nvalor gasto no prompt: R$"+ valorTotalprompt)
  }
}
