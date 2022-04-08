function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')//campo ondeé digitado o ano
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO]Insira os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criacamenino.png')
                //crianca

            } else if (idade < 21) {
                img.setAttribute('src', 'homemjovem.png')
                //jovem

            } else if (idade < 50) {
                img.setAttribute('src', 'homemadulto.png')
                //adulto

            } else {
                img.setAttribute('src', 'idosohomem.png')
                //idoso

            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','menina.png')

            } else if (idade < 21) {
                img.setAttribute('src','meninajovem.png')

            } else if (idade < 50) {
                img.setAttribute('src','mulheradulta.png')

            } else {
                img.setAttribute('src','idosa.png')

            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}