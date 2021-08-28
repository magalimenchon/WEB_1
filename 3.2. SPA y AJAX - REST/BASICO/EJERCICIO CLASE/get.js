document.addEventListener("DOMContentLoaded", () =>{
    "use strict";
    getData();  
    function getData(){
        fetch('https://web-unicen.herokuapp.com/api/groups/ejemplos/nombres',{
        method: "GET",
        mode: 'cors',
        })
        .then(function(r){
            if(!r.ok){
                console.log("error");
            }
            return r.json()
        })
        .then( function(json){
            console.log(json);
            let contenedor = document.querySelector("#result");
            contenedor.innerHTML = '';
            //for(let data of json.nombres){
                contenedor.innerHTML += JSON.stringify(json)/*data.thing.nombre*/ + "</br>";
            //}
        })
        .catch(function(e){
            console.log(e);
        })
    }
});