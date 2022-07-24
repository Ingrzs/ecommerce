let Inicio = document.querySelector(".logo")
let BtnLogin = document.querySelector(".btnlogin")
let BtnConsola = document.querySelector(".btnconsola")
const ListaProductos = ["consola","nintendo","play","xbox","control","laptop","celular","start","funko"]

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


let div = document.createElement("div");
div.className="div_lista";
let ul = document.createElement("ul");
ul.className= "lista";
div.appendChild(ul);

let li = document.createElement("li");
li.className= "lista-item";
ul.appendChild(li);
li.textContent= "a"

let di= document.querySelector(".box_search");
di.appendChild(div);


function searchbar(array){
    let liElemet = "" ;
    for (let i= 0; i < array.length; i++) {
    liElemet += `<li>${array[i]}</li>`
    }
    document.querySelector(".lista").innerHTML= liElemet;
 }
 
 function filtrar(event) {
    var searchvalue = event.target.value;
    var filterNames = ListaProductos.filter((v)=>{ return(v.includes(searchvalue));
    })
    searchbar(filterNames);
 }


    




