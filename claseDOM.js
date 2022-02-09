/*const id = document.getElementById("principal");
//console.log(id)
const clase = document.getElementsByClassName("parrafo1")
//console.log(clase)
const titulo = document.getElementsByTagName("h1")
console.log(id.innerHTML)
//para crear un nuevo elemento desde js, hago lo siguiente: donde especifico de que tipo de elemento hablo
const p = document.createElement("p");
//para colocar algo dentro de esa etiqueta:, puede ser tambien inner.TEXT, pero al .HTML se le pueden agregar estilos
p.innerHTML = "<strong>este es el parrafo agregado con DOM</strong>"
//ahora lo agregamos
document.body.appendChild(p)*/
//
/*const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];
//funcion flecha
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
/*guardarLocal("listaProductos", JSON.stringify(productos));*/
/*const elemento= document.getElementById("titulo");
console.log(elemento.innerHTML)*/