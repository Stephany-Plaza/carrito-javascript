import { Registro } from "./utils.js";
import { searchFilters } from "./utils.js";


//Accediendo a todos los inputs y al formulario
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputCedula = document.getElementById("cedula");
const inputCategoria = document.getElementById("categoria");
const inputCorreo = document.getElementById("correo");
const inputSexo = document.getElementsByClassName("sexo");
const tabla = document.getElementById("tabla");


//Para el evento de cuando se presione el submit button
formulario.addEventListener("submit", enviarInfo);


//Funcion de enviarInfo: para acceder a los valores que registre el usuario
const arreglo = [];

//formulario 
/*function enviarInfo(e){
    e.preventDefault();
    const nombre = inputNombre.value
    const apellido = inputApellido.value
    const cedula = +inputCedula.value
    const categoria = inputCategoria.value
    const correo = inputCorreo.value
    const sexo = inputSexo.value
    
 
    const persona= new Registro(nombre,apellido,cedula,categoria,correo,sexo);
    arreglo.push(persona);
    const jsonPersona = JSON.stringify(arreglo);
    localStorage.setItem("personas",jsonPersona);
    formulario.reset();
    }*/
function enviarInfo(e) {
    e.preventDefault();
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const cedula = +inputCedula.value;
    const categoria = inputCategoria.value;
    const correo = inputCorreo.value;
    const sexo = inputSexo.value;
    agregarFilas();

    const persona = new Registro(nombre, apellido, cedula, categoria, correo, sexo);
    arreglo.push(persona);
    const jsonPersona = JSON.stringify(arreglo);
    localStorage.setItem("personas", jsonPersona);
    formulario.reset();
}

document.addEventListener("DOMContentLoaded",(guardar)=>{
    const localArray = JSON.parse(localStorage.getItem("personas"));
    localArray.forEach(element => {
        console.log(element)
    });
})



function transactionObject(transactionFormData) {
    let nombre = transactionFormData.get("nombre");
    let apellido = transactionFormData.get("apellido");
    let cedula = transactionFormData.get("cedula");
    let categoria = transactionFormData.get("categoria");
    let correo = transactionFormData.get("correo");
    let sexo = transactionFormData.get("sexo");

    return{
        "nombre" : nombre,
        "apellido" : apellido,
        "cedula" : cedula,
        "categoria" : categoria,
        "correo" : correo,
        "sexo" : sexo
    }
}

//agregar filas-carreras 1 y 2
 function agregarFilas(arreglo) {

    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const cedula = +inputCedula.value;
    const categoria = inputCategoria.value;
    const correo = inputCorreo.value;
    const sexo = inputSexo.value;
    const nuevaFila = tabla.insertRow(-1);


    let nuevaCelda = nuevaFila.insertCell(0);
    nuevaCelda.innerText = nombre;

    nuevaCelda = nuevaFila.insertCell(1);
    nuevaCelda.innerText = apellido;

    nuevaCelda = nuevaFila.insertCell(2);
    nuevaCelda.innerText = cedula;

    nuevaCelda = nuevaFila.insertCell(3);
    nuevaCelda.innerText = categoria;

    nuevaCelda = nuevaFila.insertCell(4);
    nuevaCelda.innerText = sexo;

    nuevaCelda = nuevaFila.insertCell(5);
    nuevaCelda.innerText = correo;
    

    }

    