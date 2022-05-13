var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()

var pa = document.getElementById("txt")
pa.innerText = `Agora são ${hora} horas e ${minuto} minutos.`
if (hora >= 6 && hora <= 12) {
    document.querySelector('body').setAttribute("class","manha");
    document.getElementById("imagem").src = "https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2013/05/28/93484304.jpg"
}
else if (hora >= 12 && hora <= 18) {
    document.querySelector('body').setAttribute("class","tarde");
    document.getElementById("imagem").src ="https://w0.peakpx.com/wallpaper/86/532/HD-wallpaper-por-do-sol-fim-de-tarde-nuvens-paisagem-serranegra.jpg"
}
else {
    document.querySelector('body').setAttribute("class","noite");
    document.getElementById("imagem").src = "https://www.42frases.com.br/wp-content/uploads/2019/06/frases-de-reflexao-de-boa-noite.jpg"
}