function verificar(){
    var data = new Date()
    var fano = data.getFullYear()
    var ano = document.querySelector('#numb')
    var num = Number(ano.value)
    var r = document.querySelector('#res')

    if(ano.value.length == 0 || ano.value > fano){
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('rads')
        var idade = fano - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            if (idade >= 0 && idade <= 6){
                   img.setAttribute('src', 'criança.png')
                    var genero = 'menino'
            } else if (idade <= 16){
                    img.setAttribute('src', 'menino.png')
                    var genero = 'menino'
            } else if (idade <= 28){
                    img.setAttribute('src', 'homem.png')
                    var genero = 'homem'
            } else if (idade <= 40) {
                    img.setAttribute('src', 'homem1.png') 
                    var genero = 'homem'
            } else if (idade <= 55) {
                    img.setAttribute('src', 'homem2.png')
                    var genero = 'homem'
            } else {
                    img.setAttribute('src', 'senhor.png')
                    var genero = 'senhor'
            }  
            r.innerHTML = `Detectamos um ${genero} com ${idade} ano(s)` 
        }
        else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade <= 6){
                img.setAttribute('src', 'menininha.png')
                    var genero = 'menina'
            } else if (idade <= 16){
                img.setAttribute('src', 'garota.png')
                    var genero = 'garota'
            } else if (idade <= 28){
                img.setAttribute('src', 'mulher.png')
                    var genero = 'mulher'
            } else if (idade <= 40) {
                img.setAttribute('src', 'mulher1.png')
                    var genero = 'mulher'
            } else if (idade <= 55) {
                img.setAttribute('src', 'mulher2.png')
                    var genero = 'mulher'
            } else {
                img.setAttribute('src', 'senhora.png')
                    var genero = 'senhora'
            }
            r.innerHTML = `Detectamos uma ${genero} com ${idade} ano(s)`
        }
        r.appendChild(img)
        r.style.textAlign = 'center'
    } 
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.padding = '15px'
}