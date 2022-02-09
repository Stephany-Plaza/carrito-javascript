import { Producto } from "./utils.js";
import { Carrito } from "./utils.js";

//vamos a obtener los botones 
const agregarAlCarrito = document.getElementById("carrito");

//evento del click



agregarAlCarrito.addEventListener("click",()=>{
    const description = document.getElementsByClassName=("descripcion");
    const descripcion2 = document.innerHtml(description);

    const productoCreado = new Producto(1,descripcion2,5,6,true)
    console.log(productoCreado)
}
)
