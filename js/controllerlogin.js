
function CheckStorage(a,b,c){
if (a.length > 0){
   b.style.display = "block"
   c.style.display = "none"
}
}

function DeleteStorage(){
localStorage.removeItem('key');
}

export  { CheckStorage };
export { DeleteStorage };
