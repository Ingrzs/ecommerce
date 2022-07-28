let Inicio = document.querySelector(".logo")
let BtnLogin = document.querySelector(".btnlogin")
let BtnConsola = document.querySelector(".btnconsola")
let vistalista = document.querySelector(".div_lista")
let inputsearch = document.querySelector(".searchbar")
let vistaform = document.querySelector(".formu")

const ListaProductos = ["consola","nintendo","play","xbox","control","laptop","celular","start","funko"]

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


/* Creating a div, ul, and li element and appending them to the DOM. */
let div = document.createElement("div");
div.className="div_lista";
let ul = document.createElement("ul");
ul.className= "lista";
div.appendChild(ul);

let li = document.createElement("li");
li.className= "lista-item";
ul.appendChild(li);
li.textContent= ""

let cajadeldom= document.querySelector(".box_search");
cajadeldom.appendChild(div);


/**
 * It takes an array as an argument, loops through it, and creates a list item for each element in the
 * array.
 * @param array - the array of strings to be displayed in the list
 */
function searchbar(array){
    let liElemet = "" ;
    for (let i= 0; i < array.length; i++) {
    liElemet += `<li>${array[i]}</li>`
    }
    document.querySelector(".lista").innerHTML= liElemet;
 }
 
 /**
  * It takes the value of the search bar and filters the list of products to only show the ones that
  * contain the value of the search bar.
  * @param event - The event object is a JavaScript event that is sent to an element when an event
  * occurs.
  */
 function filtrar(event) {
    var searchvalue = event.target.value;
    var filterNames = ListaProductos.filter((v)=>{ return(v.includes(searchvalue));
    })
    searchbar(filterNames);
 }

 
/**
 * If the element has a display value of none, then change it to block, otherwise change it to none.
 * @param ocu - the element you want to hide
 */
function ocultar(ocu){
    ocu.style.display= "none"
}
 
function mostrar(show){
    show.style.display = "block"
}

//eventos mostrar u ocultar el div cuando se hace clik  se mueve en el div
inputsearch.addEventListener('click',function(){
mostrar(vistalista)
})

vistaform.addEventListener('mousemove',function(){
    ocultar(vistalista)
})


let p = document.querySelector(".user")
if (p.length === 0){
    ocu(p);
}
else{
p.innerHTML = localStorage.getItem('key');
}


window.addEventListener('beforeunload',function(e){
   localStorage.removeItem('key');
})