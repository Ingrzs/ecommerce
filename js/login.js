



/* Creating an array with an object inside. */
let user = { name:"ramiro",mail:"portafolio@portafolio.com",password :"thiseasy"}


let btnlogin = document.querySelector(".btnlog")

btnlogin.addEventListener("click",function(){
    let usermail = document.querySelector(".usermail").value;
    let userpassword = document.querySelector(".userpassword").value;
    console.log(usermail)
    console.log(userpassword)
    if(usermail == user.mail && userpassword == user.password){
        alert("welcome")
        }
        else{
        alert("incorrecto")
        }
        
})
