let Inicio = document.querySelector(".logo")
let BtnLogin = document.querySelector(".btnlogin")
let BtnConsola = document.querySelector(".btnconsola")

function Openpage(url){
    window.location = url
}

Inicio.addEventListener("click",function(){
    Openpage("./index.html")
});

BtnLogin.addEventListener("click",function(){
    Openpage("./login.html")
});

BtnConsola.addEventListener("click",function(){
    Openpage("./productos.html")
})




