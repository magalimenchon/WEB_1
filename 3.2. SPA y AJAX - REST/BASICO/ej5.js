document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
    "use strict";
    fetch('https://web-unicen.herokuapp.com/api/groups/ejemplos/nombres')
      .then(function(r){
        return r.json()
      })
      .then(function(json) {
          let contenedor = document.querySelector("#result");
          contenedor.innerHTML = ''
          for (let data of json.nombres) {
              contenedor.innerHTML += data.thing.nombre + "<br />";
          }
      })
      .catch(function(e){
        console.log(e)
      })

}