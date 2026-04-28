//apresentação
let salarioMensal, diasTrabalhado, valorDiario, valorSemanal
//leituras
salarioMensal = Number(prompt("Salário mensal: R$"))
diasTrabalhado = Number(prompt("Dias trabalhados: "))
//processamentos
valorDiario = salarioMensal / diasTrabalhado
valorSemanal = salarioMensal / 4
//saídas
console.log("Valor diário: R$" + valorDiario.toFixed(2))
console.log("Valor semanal: R$" + valorSemanal.toFixed(2))