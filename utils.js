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
    constructor(lista){
        this.lista=JSON.parse(localStorage.getItem('Carrito')) || [];
    }

    findAllItems(){
        return this.lista;
    }
    createItem(item){
        this.lista.push(item);
        localStorage.setItem('carrito',JSON.stringify(this.lista));
    }
    findById(id){
        localStorage.getItem('id');
    }
    updateItem(item,itemActualizado){

    }
    deleteItem(item){
        localStorage.removeItem(item);
    }
}

