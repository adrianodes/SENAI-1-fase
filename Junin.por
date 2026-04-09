programa {
  funcao inicio() {
   real valorConsultor, valorHora, cobrarCliente, valorLucro, totalValorHr
   inteiro horasTrabalhadas
   // leitura dados
   escreva("Tabela de preços Junin/n")
   escreva("valor do consultor: R$")
   leia(valorConsultor) 
   escreva("Valor da hora Junin: R$")
   leia(valorHora)
   escreva("Total horas trabalhadas: ")
   leia(horasTrabalhadas)
   // calculos
   totalValorHr = valorHora * horasTrabalhadas
   cobrarCliente = totalValorHr + valorConsultor
   valorLucro = cobrarCliente - valorConsultor
   // apresentação
   escreva("Valor à cobrar do cliente: R$" + cobrarCliente)
   escreva("\nLucro total: R$" + valorLucro)


  }
}
