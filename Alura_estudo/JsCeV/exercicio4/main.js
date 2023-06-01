let lista = document.querySelector('#num')
let select = document.querySelector('#selec')
let re = document.querySelector('#res')
let valores = [] 

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){ 
    return true 
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){ 
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(lista.value) && !inLista(lista.value, valores)){
        valores.push(Number(lista.value))
        let b = document.createElement('option')
        b.text = `Foi adicionado o valor ${lista.value}`
        select.appendChild(b)
    }
    else {
        window.alert('Número inválido ou já encontrado na lista')       
    }
    lista.value = ''
    lista.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione algum valor antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos] 
            if(valores[pos] < menor)
            menor = valores[pos] 
        }
        media = soma / tot
        re.innerHTML = ''
        re.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        re.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        re.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        re.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        re.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }

}