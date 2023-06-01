    function carregar (){

    var ms = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    ms.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        img.src = 'fotodamanha.png.png'
        document.body.style.background = 'rgba(197, 180, 22, 0.555)'
    }
    else if (hora >= 12 && hora <= 18){
        img.src = 'fotodatarde.png.png'
        document.body.style.background = 'rgb(35, 142, 142)'
    }
    else {
        img.src = 'fotodanoite.png'
        document.body.style.background = 'gray'
    }
}