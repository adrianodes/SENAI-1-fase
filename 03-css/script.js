let resultado = document.getElementById("resultado")
// Preço Brique
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

resultado.innerHTML = "Preço de venda: R$" + precoVenda.toFixed(2)
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

resultado.innerHTML = "Percentual de aprovação: "
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
        resultado.innerHTML = "provisões suficientes rumo ao horizonte!"
}else{
    resultado.innerHTML = "Algo está errado Posseidom não quer ninguem no mar hoje."
}
}
//=============================================================================
// Bingo dona Bete
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
resultado.innerHTML = "Lucro do dia: R$" + lucro.toFixed(2)
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
resultado.innerHTML = "Valor a receber: R$" + valorTotal.toFixed(2)
}
//=========================================================================
    function verificarIdade(){
// infos
let idade

// entradas
idade = Number(prompt("Digite sua idade: "))

// processamentos
//saídas
if(idade >= 18){
    resultado.innerHTML = "Você é maior de idade."
}else{
    resultado.innerHTML = "Você não é maior de idade."
}
    }
//=========================================================================

function decisaoCompras(){
    //infos
let valorProduto, valorDisponivel      
// entradas
valorProduto = Number(prompt("Valor do produto: R$"))
valorDisponivel = Number(prompt("Valor disponível: R$"))
// processamentos
//saídas
if(valorDisponivel >= valorProduto){
    resultado.innerHTML = "Você pode comprar o produto."
}else{
    resultado.innerHTML = "Você não tem dinheiro suficiente para comprar o produto."
}
}
//=========================================================================
function idadeCachorro(){
    //infos
let idadeHumana, idadeCachorro
// entradas
idadeCachorro = Number(prompt("Digite a idade do cachorro em anos humanos: "))
// processamentos
idadeHumana = idadeCachorro * 7
// saídas
console.log("A idade do cachorro em anos de humanos é: " + idadeHumana)
resultado.innerHTML = "A idade do cachorro em anos de humanos é: " + idadeHumana
if(idadeHumana < 65){
    resultado.innerHTML = "O cachorro ainda é jovem."
}else{
    resultado.innerHTML = "O cachorro é idoso."
}
}
//=========================================================================
function verificarIdadeVoto(){
    // infos
    let idade
    // entradas
    idade = Number(prompt("Digite sua idade: "))
    // processamentos
    // saídas
    if(idade >= 16){
        resultado.innerHTML = "Você pode votar."
    }else{
        resultado.innerHTML = "Você não pode votar."
    }
}
//=========================================================================
function CalcularIMC(){
    // infos
let peso, altura, imc  
// entradas
peso = Number(prompt("Digite seu peso em kg: "))
altura = Number(prompt("Digite sua altura em metros: "))
// processamentos
imc = peso / (altura * altura)
// saídas
console.log("Seu IMC é: " + imc.toFixed(2))
resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2)
if(imc < 18.5){
    resultado.innerHTML = "Você está abaixo do peso."
}else if(imc >= 18.5 && imc < 25){
    resultado.innerHTML = "Você está com peso normal."
}else if(imc >= 25 && imc < 30){
    resultado.innerHTML = "Você está acima do peso."
}else{
    resultado.innerHTML = "Você está obeso."
}
}
//=========================================================================
function adivinharNumero(){
    // infos
    let numero = Math.ceil(Math.random() * 10)
    let chute
    // entradas
    chute = Number(prompt("Adivinhe o número entre 1 e 10: "))
    // processamentos
    // saídas
    if(chute === numero){
        resultado.innerHTML = "Parabéns! Você acertou o número" + numero + "."
    }else{
        resultado.innerHTML = "Que pena! O número era " + numero + "."
    }
}
//=========================================================================
