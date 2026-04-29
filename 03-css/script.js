
function calcularPrecoBrique(){
// INFO
let precoCompra, precoVenda
// LEITURAS
precoCompra = Number(prompt("Preço de compra"))
// PROCESSAMENTOS
precoVenda = precoCompra * 3
// SAÍDAS
console.log("Preço de venda: R$" + precoVenda.toFixed(2))
alert("Preço de venda: R$" + precoVenda.toFixed(2))

document.getElementById("resultado").innerHTML = "Preço de venda: R$"
+ precoVenda.toFixed(2)
}

function porcentagemChance(){
//apresentações
let chance, n

//leitura
n = Number(prompt("Numero de vezes no celular: "))
//calculos
chance = (0.1/(1+500*n)) * 100
//saídas
console.log("Percentual de aprovação: " + chance.toFixed(4))

document.getElementById("chance").innerHTML = "Percentual de aprovação: "
+ chance.toFixed(4) + "%"
}