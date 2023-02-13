function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('Elemento inválido ou não encontrado')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0


while (contador < listaDeTeclas.length) // ou for (let contador = 0; contador < listaDeTeclas.length; contador++ ) 
{

const tecla = listaDeTeclas[contador];
const instrumento = tecla.classList[1];

const idAudio = `#som_${instrumento}`;

        tecla.onclick = function (){
    tocaSom(idAudio);
}
contador = contador + 1

tecla.onkeydown = function (evento){

    if (evento.code === 'Space' || evento.code === 'Enter'){ 
    tecla.classList.add('ativa')
    }
}

tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
}

}
