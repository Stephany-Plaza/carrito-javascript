export class Registro{
    constructor(nombre,apellido,cedula,categoria,correo,sexo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.categoria = categoria;
        this.correo = correo;
        this.sexo = sexo;
    }
}
//para el filtro
export function searchFilters(input,selector){
        
}
//para el carrito de compras
export class Producto{
    constructor(id,nombre,precio,cantidad,stock){
        this.id=id,
        this.nombre=nombre,
        this.precio=precio,
        this.cantidad=cantidad,
        this.stock=stock
    }
    getNombre(){
        return this.nombre;
    }
    getPrecio(){
        return this.precio;
    }
    agotado(){
        this.stock=false;
    }
}

export class Carrito{
    constructor(){
        this.lista= JSON.parse(localStorage.getItem('carrito')) || [];
    }

    findAllItems(){
        return this.lista;
    }
    createItem(item){
        //primero saber si ya esta agregado, sino, la cantidad sera=1 

        //y si existe, la cantidad se debe sumar

        this.lista.push({item , cantidad: 1});
        localStorage.setItem('carrito',JSON.stringify(this.lista));
    }
    findOneByIdItem(itemId){
        const item= this.lista.find (element =>element.id === itemId);
        if(!item){
            throw new Error(`No existe el item id : ${item.id}`)
        }
        return item
    }
    updateItem(itemId,cantidad){
        const item= this.findOneByIdItem(itemId);
        const index = this.lista.indexOf(item);
        this.lista[index].cantidad = cantidad;
        if(cantidad <= 0){
            this.lista[index].stock = false;
        }
        localStorage.setItem('carrito',JSON.stringify(this.lista))
    }
    deleteItem(item){
        localStorage.removeItem(item);
    }
}




/*export const renderList = (lista)=>{
    const tabla = document.getElementById('tabla-productos')
  
    for(const item of lista){
        const nuevaFila = tabla.insertRow(-1);
        const nuevaCelda=nuevaFila.insertCell(0);
        nuevaCelda.innerText = item.id;
        const nuevaCelda=nuevaFila.insertCell(1);
        nuevaCelda.innerText = item.nombre;
        const nuevaCelda=nuevaFila.insertCell(2);
        nuevaCelda.innerText = item.cantidad;
        const nuevaCelda=nuevaFila.insertCell(3);
        nuevaCelda.innerText = item.precio;
    }
}*/
/*export const renderList = (lista)=>{
for (let index = 0; index < lista.length; index++) {
    const tabla = document.getElementById('tabla-productos')
    const nuevaFila = tabla.insertRow(-1);
        const nuevaCelda=nuevaFila.insertCell(index);
        nuevaCelda.innerText = item.id;
    
}}*/
