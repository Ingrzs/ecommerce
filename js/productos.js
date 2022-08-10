import { CheckStorageProducto } from "./controllerlogin.js"
import { DeleteStorage } from "./controllerlogin.js"
import { Cambiaralhacerclick} from "./autocomplete.js"
import {selectItem} from "./autocomplete.js"

let Agregarproducto = document.querySelector(".btnadd")
let Showuser = document.querySelector(".showuser");
let Closesesion = document.querySelector(".cerrarsesion")
let Boxdatalogin = document.querySelector(".box_datalogin")
let Getstorage = localStorage.getItem('key')
Showuser.innerHTML = localStorage.getItem('key')

let div_resultados = document.querySelector(".div_lista")
let inputsearch = document.querySelector(".inputsearch")

inputsearch.addEventListener('input', Cambiaralhacerclick);
div_resultados.addEventListener('click' ,selectItem)


Agregarproducto.addEventListener("click",function(){
    location.href = "./addproducto.html"
})

Closesesion.addEventListener('click',function(){
   DeleteStorage()  
   location.reload()
})

CheckStorageProducto(Getstorage,Boxdatalogin,Agregarproducto);
