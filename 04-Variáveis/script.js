 // Variáveis

 let totalRolado = 0
 let contD2 = 0
 let conD4

 function rolarDado(numero){
 console.log(numero);
 let dado = Math.ceil(Math.random()*numero)
 document.getElementById('historico').innerHTML += '<span>d' + numero + ':' + dado + '</span>'
 //contarRolagem(numero)
 document.getElementById('outputUltima').innerHTML = 
 totalRolado += dado
 document.getElementById('outputTotal').innerHTML = totalRolado
 }

 function resetar(){
    totalRolado = 0    
    document.getElementById('outputUltima').innerHTML =""
    document.getElementById('outputTotal').innerHTML = 0
    document.getElementById("historico").innerHTML = ''
 }
function rolarD2(){
    let dado = Math.ceil(Math.random() * 2)
    document.getElementById('outputUltima').innerHTML = dado
    totalRolado += dado
    document.getElementById('outputTotal').innerHTML = totalRolado

}

function rolarD4(){
    let dado = Math.ceil(Math.random() * 4)
    document.getElementById('outputUltima').innerHTML = dado
    totalRolado += dado
    document.getElementById('outputTotal').innerHTML = totalRolado
}

function rolarD6(){
    let dado = Math.ceil(Math.random() * 6)
    document.getElementById('outputUltima').innerHTML = dado
    totalRolado += dado
    document.getElementById('outputTotal').innerHTML = totalRolado
}

function rolarD8(){
    let dado = Math.ceil(Math.random() * 8)
    document.getElementById('outputUltima').innerHTML = dado
    totalRolado += dado
    document.getElementById('outputTotal').innerHTML = totalRolado
}

function rolarD10(){
    let dado = Math.ceil(Math.random() * 10)
    document.getElementById('outputUltima').innerHTML = dado
    totalRolado += dado
    document.getElementById('outputTotal').innerHTML = totalRolado
}

function rolarD12(){
    let dado = Math.ceil(Math.random() * 12)
    document.getElementById('outputUltima').innerHTML = dado
    totalRolado += dado
    document.getElementById('outputTotal').innerHTML = totalRolado
}

function rolarD20(){
    let dado = Math.ceil(Math.random() * 20)
    document.getElementById('outputUltima').innerHTML = dado
    totalRolado += dado
    document.getElementById('outputTotal').innerHTML = totalRolado
}

        //==========================================================================
//Total de vendas
let total = 0
function registrarVenda(){
    let valor = Number(document.getElementById('inputVenda').value)
    // registrar venda no total
    total = total + valor
    // atualizar total na página
    document.getElementById('totalVendido').innerHTML = `Total vendas: R$ ${total.toFixed(2)}`

    //lista de vendas
    
    document.getElementById('listaVendas').innerHTML += "R$" + valor.toFixed(2) + "<br>"

    document.getElementById('inputVenda').value = ''
    document.getElementById('inputVenda').focus()
    
}

//=======================================================

let cont = 0
function incrementarContagem(){
    // cont = cont + 1
    // cont += 1
    cont++
    document.getElementById('p-contagem').innerHTML = cont
}

function decrementarContagem(){
    cont--
    document.getElementById('p-contagem').innerHTML = cont
}
function somar10(){
    cont = cont + 10
    // cont += 10
    document.getElementById('p-contagem').innerHTML = cont
}
function somar2(){
    cont += 2
    document.getElementById('p-contagem').innerHTML = cont
}
function zerarContagem(){
    cont = 0
    document.getElementById('p-contagem').innerHTML = cont
}
