let imagemDaEstrada;
let imagemDoAtor;

function preloud(){
    imagemDaEstrada = loudImage("material/material/estrada.png");
    imagemDoAtor = loudImage("material/material/ator-1.png");
}

function setup(){
    createCanvas(500, 400);
}

function draw(){
    background (imagemDaEstrada);
    image(imagemDoAtor, 100, 366, 30, 30);
}