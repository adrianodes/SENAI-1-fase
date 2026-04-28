//informações
let custoMensais, valorArrecadado, diferencaAporte
//leituras 
valorArrecadado = Number(prompt("Valor arrecadado: R$"))
custoMensais = Number(prompt("Custos mensais: R$"))
//processamento
diferencaAporte = valorArrecadado - custoMensais
//saída
console.log("Diferença de aporte: R$" + diferencaAporte.toFixed(2))