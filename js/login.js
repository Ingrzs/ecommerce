let btnlogin = document.querySelector(".btnlog");
let usermail = document.querySelector(".usermail");
let userpassword = document.querySelector(".userpassword"); 
let user = { name:"ramiro",mail:"por@por.com",password :"this"}

function validar(a,b){
    if(a == user.mail && b == user.password){
       let  Backuser = a
        return Backuser; 
        }
    else{
        alert("Datos incorrectos")
        return false;
        }
}

function saveuser(c){
    sessionStorage.setItem('key',c)
    let Backuser = sessionStorage.getItem('key');
    return Backuser;
}


btnlogin.addEventListener("click", function(){
let savedate = validar(usermail.value,userpassword.value);
console.log(saveuser(savedate))
}) 



if (savedate === usermail.value){
    location.href = "./index.html"
 }
 else{
    location.reload()
 }
 