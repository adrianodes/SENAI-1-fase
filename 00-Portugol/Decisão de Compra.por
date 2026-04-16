programa {
  funcao inicio() {
    real precoItem, saldo = 1500.75
    escreva("Valor do item: R$")
    leia(precoItem)
    se(saldo >= precoItem){
      escreva("Compra aprovada")
    }senao{
      escreva("Saldo insuficiente")
    }
    
  }
}
