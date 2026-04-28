//apresentações
let totalBruto, premiacoes, presentes, comissoes, lucro
//leituras
totalBruto = Number(prompt("Total bruto: R$"))
premiacoes = Number(prompt("Premiações: R$"))
presentes = Number(prompt("Presentes: R$"))
comissoes = Number(prompt("Comissões: R$"))
//calculos
lucro = totalBruto - premiacoes - presentes - comissoes
// saídas
console.log("Lucro do dia: R$" + lucro.toFixed(2))