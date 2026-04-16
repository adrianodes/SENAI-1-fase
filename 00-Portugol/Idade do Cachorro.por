programa {
  funcao inicio() {
   inteiro idadeHumana, idadeCachorro
    // Leitura
    escreva("Idade do cachorro: ")
    leia(idadeCachorro)
    // calculos
    idadeHumana = idadeCachorro * 7
    // apredentaçao
    escreva("Idade do cachorro em anos humanos: " + idadeHumana)
    se(idadeHumana >= 65){
      escreva("\nSeu cachorro é um ancião")
    }senao{
      escreva("\nSeu cachorro ainda é jovem")
    }
  }
}
