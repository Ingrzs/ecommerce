



/* Creating an array with an object inside. */
let user = { name:"ramiro",mail:"por@por.com",password :"this"}

let btnlogin = document.querySelector(".btnlog")
let formulario = document.querySelector("formulariologin")

function validar(){
    var usermail = document.querySelector(".usermail").value;
    var userpassword = document.querySelector(".userpassword").value;  
    if(usermail == user.mail && userpassword == user.password){
         window.open("./index.html","_self");
    }
    else{
        alert("incorrecto")
         clear();
        }
}



btnlogin.addEventListener("click",function(){
validar();
   
})
