
//Vetores

var a = document.querySelector('#res')

let num = [5, 2, 1, 6, 3]

a.innerHTML = `O vetor original: ${num}. <br> <br>`

num.sort()
num.push(4)

a.innerHTML += `Esse é o vetor após alinhar a lista e adicionar um valor na última posição: ${num}. <br> <br>`

a.innerHTML += ` O vetor tem ${num.length} posições. <br> <br>`

a.innerHTML += `A primeira posição do vetor é: ${num[0]}. <br> <br>`

//Acessando o vetor com repetição for

let valores = [1, 2, 5, 4, 7, 3]

a.innerHTML += `Os valores desse vetor são: ${valores} <br> <br>`

for(let pos = 0; pos < valores.length; pos++){
    a.innerHTML += `A posição ${pos} tem o valor ${valores[pos]} <br>`
}

// Simplificando o acesso ao vetor

a.innerHTML += (' <br>Ou de forma mais simplificada, podemos utilizar (for let pos in valores), por exemplo: <br> <br>')

for(let pos in valores){
    a.innerHTML += `A posição ${pos} tem o valor ${valores[pos]} <br>`
}

a.innerHTML += `<br> Para encontrar um valor dentro do vetor, utilizamos 'let pos = valores.indexOf(1)', por exemplo`

