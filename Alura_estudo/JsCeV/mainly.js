function contador (){

    var i = document.querySelector('#ini')
    var f = document.querySelector('#fin')
    var p = document.querySelector('#pas')
    var c = document.querySelector('#contando')

    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        c.innerHTML = 'Impossível contar!'
    } 

    else {

    var ini = Number(i.value)
    var fin = Number(f.value)
    var pas = Number(p.value)

    if(pas <= 0){
        window.alert('Passo inválido! Considerando passo 1.')
        pas = 1
    }

    c.innerHTML = 'Contando: <br>'
    
    // CONTAGEM CRESCENTE 
    if(ini < fin){
    for (let a = ini; a <= fin; a += pas){
        c.innerHTML += `${a}  \u{1F449} `
    }
    }  // CONTAGEM DECRESCENTE
    else {
        for (let a = ini; a >= fin; a -= pas){
            c.innerHTML += `${a}  \u{1F449} `
    }  
    }
    c.innerHTML += ` \u{1F3C1}`
}
}
// UNICODE LIST/EMOJI LIST