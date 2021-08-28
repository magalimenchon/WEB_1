document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina(){
    "use strict";

//RECIBIR DATOS
    fetch(url)
        .then(function(response){ 
            return response.json()
 	    })
 	    .then(function(json) {
            console.log(json); 	
  	    })
//ENVIAR DATOS

    let contenedor = document.querySelector("#result");
    document.querySelector("button").addEventListener('click', sendData)

    function sendData(){
    let DatoDelUser = document.querySelector("#IdDelDatoDelInput").value;
    if( IdDelDatoDelInput.length === 0 ) { 
        contenedor.innerHTML = "Ingrese un dato";   //error al ser vacio lo q ingreso en user en el input
        return;
    }
    let data = {
        "thing": {
        "dato": DatoDelUser
        }
    };
    fetch(URL,
        {
            "method": "POST",   //crear dato
            "mode": 'cors', //verificacion de seguridad
            "headers": { "Content-Type": "application/json" },  //siempre se pone asi
            "body": JSON.stringify(data)    //pasa a formato string el json "data", xq asi lo exige el
        })                                  //protocolo de HTTP
        .then(function(r){
            if(!r.ok){  //sino dio 200
            console.log("error")
            }
            return r.json() //retorna de toda la respuesta el json ..VER!!!!
        })
        .then(function(json) {    //le llega el json por parametro
            contenedor.innerHTML = JSON.stringify(json);    //muestra el json como texto
        })
        .catch(function(e){   //faio
            console.log(e)
        })
    }
}