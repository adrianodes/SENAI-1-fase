programa {
  funcao inicio() {
    // informações
    real nota1, nota2, nota5, nota10
    real nota20, nota50, nota100, total
    // entradas
    escreva("Quantidade de notas de R$1,00: ")
    leia(nota1)
    escreva("Quantidade de notas de R$2,00: ")
    leia(nota2)
    escreva("Quantidade de notas de R$5,00: ")
    leia(nota5)
    escreva("Quantidade de notas de R$10,00: ")
    leia(nota10)
    escreva("Quantidade de notas de R$20,00: ")
    leia(nota20)
    escreva("Quantidade de notas de R$50,00: ")
    leia(nota50)
    escreva("Quantidade de notas de R$100,00: ")
    leia(nota100)
    // processamentos
    total = (nota1*1 + nota2*2 + nota5*5 + nota10*10 + nota20*20
    + nota50*50 + nota100*100)
    // saídas
    escreva("Total: R$" + total)
   
  }
}
