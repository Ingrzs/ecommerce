let imgproducto = document.querySelector(".imgproducto");
let categoriaproducto = document.querySelector(".categoriaproducto");
let namegproducto = document.querySelector(".nameproducto");
let precioproducto = document.querySelector(".precioproducto");
let descripcionproducto = document.querySelector(".descripcionproducto");
let btn = document.querySelector(".btnenviar");

function capturedatos(a){
localStorage.setItem("keyvalor",a)
const datosregresado = localStorage.getItem("keyvalor")
return datosregresado;
}

btn.addEventListener("click",function(){
console.log(capturedatos(imgproducto.value))
console.log(capturedatos(categoriaproducto.value))
console.log(capturedatos(namegproducto.value))
console.log(capturedatos(precioproducto.value))
console.log(capturedatos(descripcionproducto.value))
location.reload();
})

