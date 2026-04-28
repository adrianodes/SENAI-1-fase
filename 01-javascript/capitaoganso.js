//apresnetações
let suprimentos, vendaIngressos, vendaItens, lucro100
let faturamentoBruto, lucro, faturamentoPercentual
//leitures
suprimentos = Number(prompt("Gasto com suprimentos: R$"))
vendaIngressos = Number(prompt("Venda de ingressos: R$"))
vendaItens = Number(prompt("venda de itens: R$"))
//calculos
faturamentoBruto = vendaIngressos + vendaItens
lucro = faturamentoBruto - suprimentos
lucro100 = lucro * 100
faturamentoPercentual = lucro100 / suprimentos
//saídas
console.log("Faturamento em reais: R$" + lucro.toFixed(2))
console.log("Faturamento em porcentagem: " + faturamentoPercentual.toFixed(2) + "%")