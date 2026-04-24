// informações
let preco, quantidade
let valorTotal
// leitura
quantidade = Number(prompt("Quantidade:"))
preco = Number(prompt("preco: R$"))
// processamentos
valorTotal = quantidade * preco
// Saídas
console.log("Valor a receber: R$" + valorTotal.toFixed(2))