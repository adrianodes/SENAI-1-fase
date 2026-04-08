programa {
  funcao inicio() {
  real precoPorQuilo = 10     
  real precoPorGrama = precoPorQuilo / 1000
  real peso, precoTotal 
  // leitura de dados
  escreva("Digite o peso (g): ")
  leia(peso) 
  // processamento
  precoTotal = peso * precoPorGrama
  // saídas
  escreva("Valor a pagar: R$" + precoTotal)

  }
}
