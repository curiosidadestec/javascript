function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("Errou")
    } else {
        var fsex = document.getElementsByName("radsex")
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        var idade = ano - Number(fano.value)
        if (fsex[0].checked) {
            var genero = "Homem"
            if (idade > 0 && 10 > idade) {
                img.setAttribute("src", "midia/foto-bebe-m.png")
            }
            else if (idade < 21) {
                img.setAttribute("src", "midia/foto-jovem-m.png")
            }
            else if (idade < 50) {
                img.setAttribute("src", "midia/foto-adulto-m.png")
            }
            else {
                img.setAttribute("src", "midia/foto-idoso-m.png")
            }
        } else if (fsex[1].checked) {
            var genero = "Mulher"
            if (idade > 0 && idade < 10) {
                img.setAttribute("src", "midia/foto-bebe-f.png")
            }
            else if (idade < 21) {
                img.setAttribute("src", "midia/foto-jovem-f.png")
            }
            else if (idade < 50) {
                img.setAttribute("src", "midia/foto-adulto-f.png")
            }
            else {
                img.setAttribute("src", "midia/foto-idoso-f.png")
            }
        }
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}