 function CheckStorage(a){
if (a.length === 0){
   a.style.display = "none" 
}
else{
    OpenSesion.innerHTML= DataUser
}
}

function DeleteStorage(b){
b.addEventListener("click",function(){
localStorage.removeItem('key');
})
}

module.exports = {CheckStorage,DeleteStorage};