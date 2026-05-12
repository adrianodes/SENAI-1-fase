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
let meta, prejuizo
//leituras
totalBruto = Number(prompt("Total bruto: R$"))
premiacoes = Number(prompt("Premiações: R$"))
presentes = Number(prompt("Presentes: R$"))
comissoes = Number(prompt("Comissões: R$"))
//calculos
lucro = totalBruto - premiacoes - presentes - comissoes
meta = Number(prompt("Meta de hj: R$"))
// saídas
console.log("Lucro do dia: R$" + lucro.toFixed(2))
resultado.innerHTML = "Lucro do dia: R$" + lucro.toFixed(2).replace(".", ",")
if(lucro >= meta){
    resultado.innerHTML = "<br>" + " Parabéns! Você atingiu a meta de hoje."
}else if(lucro > 0){
    resultado.innerHTML = "<br>" + " Que pena! Você não atingiu a meta de hoje."
}else{
    let prejuizo = lucro * -1
    resultado.innerHTML = "<br>" + " Que pena! Você teve um prejuízo de R$" + prejuizo.toFixed(2).replace(".", ",") + "."
}
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
function mostrarDiaDaSemana(){
    // infos
    let numero, diaSemana 
    // leituras
    numero = Number(prompt("Digita o número: "))
    // processamentos
    if(numero == 1){
        diaSemana = "Domingo"
    }else if(numero == 2){
        diaSemana = "Segunda-feira"
    }else if(numero == 3){
        diaSemana = "Terça-feira"
    }else if(numero == 4){
        diaSemana = "Quarta-feira"
    }else if(numero == 5){
        diaSemana = "Quinta-feira"
    }else if(numero == 6){
        diaSemana = "Sexta-feira"
    }else if(numero == 7){
        diaSemana = "Sábado"
    }else{
        diaSemana = "inexistente"
    }
    //saídas

    document.getElementById("resultado").innerHTML = "O dia da semana é: " + diaSemana
}
//=========================================================================
function calcularParImpar(){
    // infos
    let n = Number(prompt("Digite um número: "))
    // processamentos
    if(n % 2 == 0){
        resultado.innerHTML = "O número " + n + " é par."
    }else{
        resultado.innerHTML = "O número " + n + " é ímpar."
    }
}
//=========================================================================
function converterTemperatura(){
    // infos
    let celsius, fahrenheit
    // entradas
    celsius = Number(prompt("Digite a temperatura em Celsius: "))
    // processamentos
    fahrenheit = (celsius * 9/5) + 32
    // saídas
    console.log("A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2))
    resultado.innerHTML = "A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2)
    if(fahrenheit > 68){
        resultado.innerHTML += " Temperatura em nivel critico!"
}else{
    resultado.innerHTML += " Temperatura normal."
}
}
//=========================================================================
function guilhermePortões(){
    //informações
let clt, estagiarios, pj, total
//leitura
clt = Number(prompt("Funcionários CLT: "))
estagiarios = Number(prompt("Estagiários: "))
pj = Number(prompt("Funcionários PJ: "))
//processamentos
total = clt + estagiarios + pj
//saídas
console.log("Total de DEVS: " + total)
resultado.innerHTML += "<br>" + "Total de DEVS: " + total
if(clt > (total * 0.51)){           
    resultado.innerHTML += "<br>" + " Mais da metade são CLT: " + clt
}else if(clt == (total * 0.5)){
    resultado.innerHTML += "<br>" + " Metade são CLT: " + clt
}else{
    resultado.innerHTML += "<br>" + " Menos da metade são CLT: " + clt  
}
}
//=========================================================================
function verificarPrestacao(){
    // infos
let salario, valorPrestação
// leituras
salario = Number(prompt("Digite o salário: "))
valorPrestação = Number(prompt("Digite o valor da prestação: "))

// processamentos
if(valorPrestação > salario * 0.3){
    resultado.innerHTML = "<br>" + "A prestação é muito alta. Empréstimo negado." + "<br>" + "Valor da prestação: R$" + valorPrestação.toFixed(2)
}else{
    resultado.innerHTML = "<br>" + "Empréstimo aprovado." + "<br>" + "Valor da prestação: R$" + valorPrestação.toFixed(2)
}
}
//=========================================================================     
function starUbers(){
    // infos
const velocidade = 300000
let distancia, tempo
// leituras
distancia = Number(prompt("Digite a distância em km: "))
// processamentos
tempo = distancia / velocidade
// saídas  
console.log("Tempo de viagem: " + tempo.toFixed(2) + " segundos")
resultado.innerHTML = "<br>" + "Tempo de viagem: " + tempo.toFixed(2) + " segundos"

// segunda etapa
if(tempo > 60){
tempominutos = tempo / 60
resultado.innerHTML += "<br>" + "Tempo de viagem: " + tempominutos.toFixed(2) + " minutos"
}if(tempominutos > 60){
tempohoras = tempominutos / 60
resultado.innerHTML += "<br>" + "Tempo de viagem: " + tempohoras.toFixed(2) + " horas"
}if(tempohoras > 60){
tempodias = tempohoras / 24
resultado.innerHTML += "<br>" + "Tempo de viagem: " + tempodias.toFixed(2) + " dias"
}

}