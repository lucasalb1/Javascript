// Função par ou ímpar

let a = document.querySelector('#res')

function parImpar(n){
    if(n%2 == 0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let b = parImpar(77)

a.innerHTML = `O número é ${b} <br> `
a.innerHTML += 'Função par/impar <br> <br>'

// Função Somar

function somar (n1=0, n2=0){
    return n1 + n2
}

let c = somar(3, 9)

a.innerHTML += `A soma dos valores da ${c} <br>`
a.innerHTML += 'Função Somar <br> <br>'

//Função dobrar (função dentro de uma variável)

let d = function(x){
    return x*2
}

a.innerHTML += (d(8)) 
a.innerHTML += '<br> Funçao dobrar <br> <br>'

// Função fatorial

function fatorial(n){
    fat = 1
    for (let c = n; c > 1; c--){
           fat *= c     
    }
    return fat
}

a.innerHTML += fatorial(4)
a.innerHTML += '<br> Função fatorial'
