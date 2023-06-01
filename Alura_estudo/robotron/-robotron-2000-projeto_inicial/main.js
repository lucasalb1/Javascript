const controle = document.querySelectorAll('[data-controle]')
const estatistica = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca" : 29,
        "poder" : 35,
        "energia" : 15,
        "velocidade": 12,
    }, "pernas": { 
        "forca" : 15,
        "poder": 23,
        "energia" : 36,
        "velocidade": 41,
    }, "blindagem" : {
        "forca" : 15,
        "poder" : 12,
        "energia" : 23,
        "velocidade" : 3,
    }, "foguetes" : {
        "forca" : 51,
        "poder" : 39,
        "energia" : 23,
        "velocidade" : 41,
    }, "nucleos" : {
        "forca" : 29,
        "poder" : 37,
        "energia" : 49,
        "velocidade" : 7,
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaDados(evento.target.dataset.peca)
    })
} )

function manipulaDados(operacao, controle){
    const peca = controle.querySelector('[data-contador]')
    if (operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaDados(peca){
    estatistica.forEach((elemento) =>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
    })
}