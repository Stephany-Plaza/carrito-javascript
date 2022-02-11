

import { Registro } from "../utils.js";

//Accediendo a todos los inputs y al formulario
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputCedula = document.getElementById("cedula");
const inputCategoria = document.getElementById("categoria");
const inputCorreo = document.getElementById("correo");
const inputSexo = document.getElementById("sexo");
const tabla = document.getElementById("tabla");


//Para el evento de cuando se presione el submit button
formulario.addEventListener("submit", enviarInfo);
let arreglo = [];

function enviarInfo(e) {
    e.preventDefault();
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const cedula = +inputCedula.value;
    const categoria = inputCategoria.value;
    const correo = inputCorreo.value;
    const sexo = inputSexo.value;
   // agregarFilas();
   
    const persona = new Registro(nombre, apellido, cedula, categoria, correo, sexo);
    arreglo.push(persona);
    const jsonPersona = JSON.stringify(arreglo);
    localStorage.setItem("personas", jsonPersona);
    formulario.reset();
    renderRow(persona);
}

function renderTable(array) {
    array.forEach(persona => {
        renderRow(persona)
    });
}

function eliminarParticipante(tableIndex){
    arreglo.splice(tableIndex, 1);
    const jsonPersonas = JSON.stringify(arreglo);
    localStorage.setItem('personas', jsonPersonas);
    tabla.deleteRow(tableIndex+1);
}


function renderRow(persona){
    const nuevaFila = tabla.insertRow(-1);


    let nuevaCelda = nuevaFila.insertCell(0);
    nuevaCelda.innerText = persona.nombre;

    nuevaCelda = nuevaFila.insertCell(1);
    nuevaCelda.innerText = persona.apellido;

    nuevaCelda = nuevaFila.insertCell(2);
    nuevaCelda.innerText = persona.cedula;

    nuevaCelda = nuevaFila.insertCell(3);
    nuevaCelda.innerText = persona.categoria;

    nuevaCelda = nuevaFila.insertCell(4);
    nuevaCelda.innerText = persona.sexo;

    nuevaCelda = nuevaFila.insertCell(5);
    nuevaCelda.innerText = persona.correo;

    nuevaCelda = nuevaFila.insertCell(6);
    const botonEliminar = document.createElement("button")
    botonEliminar.innerText = "Eliminar";
    botonEliminar.setAttribute("persona", persona);
    botonEliminar.addEventListener("click",() =>{
        eliminarParticipante(arreglo.findIndex((p) => p === persona))
    })
    nuevaCelda.appendChild(botonEliminar);
}

function getLocalStorageData(){
    arreglo = JSON.parse(localStorage.getItem('personas'));
    renderTable(arreglo);
}

window.onload = getLocalStorageData;
formulario.addEventListener("submit", enviarInfo);
