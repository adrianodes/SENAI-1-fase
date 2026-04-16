programa {
  funcao inicio() {
    // informações
    inteiro a,b
    // entradas
    escreva("Digite o primeiro número: ")
    leia(a)
    escreva("Digite o segundo número: ")
    leia(b)
    // processamento e saída
    se(a > b){
      escreva("O primeiro numero é maior " + a)
    }senao{ 
      se(b > a){
        escreva("O segundo numero é maior" + b)
      }senao{"Os dois são iguais"}
    }
  }
}
