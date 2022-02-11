import { Producto } from "./utils.js";
import { Carrito } from "./utils.js";
import { productos } from "./data.js";


const carrito = new Carrito();

const renderList = (idLista, lista) => {
    const listaContainer = document.getElementById('contenedor-productos');

    for (const item of lista) {
        const articulo = document.createElement('article')
        const itemList = document.createElement('div');
        const titulo4 = document.createElement('h4');
        const imgProducto = document.createElement('img');
        titulo4.innerHTML = `${item.nombre} ${item.precio}$ `;
       
        imgProducto.className='producto img';
       imgProducto.src= item.img;
       articulo.className='producto';
        itemList.className='descripcion';
        itemList.appendChild(titulo4);

        
        listaContainer.appendChild(imgProducto);
        listaContainer.appendChild(itemList);
        

        itemList.addEventListener('click', () => {
            console.log(`${item.nombre}`);
            carrito.createItem(item);
        })
        itemList.onmouseover = () => {
            itemList.style.backgroundColor = 'coral'
        }
        itemList.onmouseleave = () => {
            itemList.style.backgroundColor = '#16689A';
        }
    }
}
renderList('lista-productos', productos);

const botonCompra = document.getElementById('boton-carrito-compra');

botonCompra.addEventListener('click', () => {
    alert(`usted ha comprado ${JSON.stringify(carrito.findAllItems())}`);

})






