programa {
  funcao inicio() {
    real peso, altura, imc
    escreva("Digite seu peso: ")
    leia(peso)
    escreva("Digite sua altura: ")
    leia(altura)
    // calculo
    imc = peso / (2 * altura)

   se(imc < 25){
    escreva("Seu IMC está abaixo de 25")
   }senao{
    escreva("Seu IMC está acima de 25")
   }
  }
}
