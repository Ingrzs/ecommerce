import { CheckStorage } from "./controllerlogin.js"
import { DeleteStorage} from "./controllerlogin.js"
import { Cambiaralhacerclick} from "./autocomplete.js"
import {selectItem} from "./autocomplete.js"

let Inicio = document.querySelector(".logo")
let BtnLogin = document.querySelector(".btnlogin")
let BtnConsola = document.querySelector(".btnconsola")

let Showuser = document.querySelector(".showuser");
let Closesesion = document.querySelector(".cerrarsesion")
let Boxdatalogin = document.querySelector(".box_datalogin")
let Getstorage = localStorage.getItem('key')
Showuser.innerHTML = localStorage.getItem('key')

let div_resultados = document.querySelector(".div_lista")
let inputsearch = document.querySelector(".inputsearch")
let btnsearch = document.querySelector(".btnsearch")

inputsearch.addEventListener('input', Cambiaralhacerclick);
div_resultados.addEventListener('click' ,selectItem)


/**
 * It opens a new page.
 * @param url - The URL of the page to open.
 */
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

CheckStorage(Getstorage,Boxdatalogin,BtnLogin);

Closesesion.addEventListener('click',function(){
   DeleteStorage()  
   location.reload()
})
