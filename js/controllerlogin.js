
function CheckStorage(a,b,c){
if (a.length > 0){
   b.style.display = "block"
   c.style.display = "none"
}
}

function DeleteStorage(){
localStorage.removeItem('key');
}

function CheckStorageProducto(a,b,c){
    if (a.length > 0){
        b.style.display = "block"
        c.style.display = "block"
     } 
}
export  { CheckStorage };
export { DeleteStorage };
export { CheckStorageProducto};