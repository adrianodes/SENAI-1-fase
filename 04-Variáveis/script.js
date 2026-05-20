let totalArrecadado = 1000; 
// 2. Elementos do HTML (ajuste os IDs conforme o seu HTML)
const inputVenda = document.getElementById('inputVenda'); // Campo do valor da aposta

function selecionarDino(dino) {
    let numero = Math.ceil(Math.random() * 10)
    let chute
    // entradas
    chute = Number(prompt("Adivinhe o número entre 1 e 10: "))
    // TESTE GIT HUB
    
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
