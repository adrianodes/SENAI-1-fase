programa {
  funcao inicio() {
    inteiro devsClt, estagiarios, devsPj
    // inteiro Quantidade de colaboradores
    escreva("Levantamento de colaboradores\n")
    escreva("Devs CLT: ")
    leia(devsClt)
    escreva("Estágiarios; ")
    leia(estagiarios)
    escreva("Devs PJ: ")
    leia(devsPj)
    inteiro totalDevs = devsClt + estagiarios + devsPj
    escreva("Total devs na equipe: " + totalDevs)
    
  }
}
