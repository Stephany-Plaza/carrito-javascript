import { Producto } from "./utils.js";
import { Carrito } from "./utils.js";
import { productos } from "./data.js";


const carrito=new Carrito();

 const renderList = (idLista, lista)=>{
    const listaContainer= document.getElementById('lista-productos');
     for(const item of lista){
         const itemList = document.createElement('li');
         itemList.innerHTML=(item.nombre);
         listaContainer.appendChild (itemList);
 
         itemList.addEventListener('click', ()=>{
             console.log(`${item.nombre}`);
             carrito.createItem(item);
         })
         itemList.onmouseover = ()=>{
            itemList.style.backgroundColor = 'coral'
     }
     itemList.onmouseleave = ()=>{
         itemList.style.backgroundColor = '#16689A';
     }
    }
 }
 renderList('lista-productos',productos);

 const botonCompra = document.getElementById('boton-carrito-compra');

 botonCompra.addEventListener('click',()=>{
     alert(`usted ha comprado ${ JSON.stringify(carrito.findAllItems())}`);
     
 })
 





