let a = document.querySelector('#res')
let valores = [1, 3, 5, 1, 6, 7]

for (let pos = 0; pos < valores.length; pos++){
    a.innerHTML += `A posição ${pos} tem o valor ${valores[pos]} <br>`
}

let num = [3, 2, 1, 5, 9]

num.sort()
num.push(4);

    for(pos in num){
        a.innerHTML += ` <br> A posição ${pos} tem o valor ${num[pos]}`
}
