const ListaProductos = ["consola","nintendo","play","xbox","control","laptop","celular","start","funko","teclado","pantalla","cable"]

let div = document.createElement("div");
div.className="div_lista";

let boxsearch= document.querySelector(".box_search");
boxsearch.appendChild(div);

let resultados = document.querySelector(".div_lista")
let input = document.querySelector(".inputsearch")

    function Cambiaralhacerclick({target}) {
       let data = target.value;
       resultados.innerHTML = ``;
       if (data.length) {
         let autoCompleteValues = filtrar(data);
         autoCompleteValues.forEach(value => { AñadirItem(value);});
        }
    }

    function filtrar(valor){
      const valoresfiltrados = ListaProductos.filter((v) => v.toLowerCase().includes(valor.toLowerCase()))
      return valoresfiltrados;
    }

    function AñadirItem(valor) {
      resultados.innerHTML = resultados.innerHTML + `<li>${valor}</li>`;
    }

    function selectItem({ target }) {
       if (target.tagName === 'LI') {
           input.value = target.textContent;
           resultados.innerHTML = ``;
        }
    }
   
    export {Cambiaralhacerclick};
    export {selectItem};