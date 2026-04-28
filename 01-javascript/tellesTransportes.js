//apresentação
let peso, distancia, volume, frete
//leitura
peso = Number(prompt("Peso: "))
distancia = Number(prompt("Distância: "))
volume = Number(prompt("Volume: "))
//calculo
frete = 15 + (2*peso) + (0.05*distancia) + (10*volume)
//saída
console.log("Valor do frete: R$" + frete.toFixed(2))