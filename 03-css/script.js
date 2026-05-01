/// Preço Brique
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
//==============================================================================
// Monika
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
//=================================================================================
// Capitão Ganso no mar
function verificarProvisoes(){
    let marujos, comida
    let comidaPorMarujo
    // entradas
    marujos = Number(prompt("Quantidade de marujos: "))
    comida = Number(prompt("Quilos de comida"))
    // processamentos
    comidaPorMarujo = comida / marujos
    // saídas
    if(marujos >= 10 && comidaPorMarujo >= 1.5){ // ||
        document.getElementById("resultado").innerHTML = "provisões suficientes rumo ao horizonte!"
}else{
    document.getElementById("resultado").innerHTML = "Algo está errado Posseidom não quer ninguem no mar hoje."
}
}
//=============================================================================
// Bingo dana Bete
function donaBeteFaturamento(){
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
document.getElementById("lucro").innerHTML = "Lucro do dia: R$"
+ lucro.toFixed(2)
}
//=========================================================================
// Pé pequeno calçados

function pePequenoCaçados(){
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
document.getElementById("valorTotal").innerHTML = "Valor a receber: R$" + valorTotal.toFixed(2)
}