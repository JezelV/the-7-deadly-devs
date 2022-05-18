//--------------------- Creacion de la clase producto -------------------------------
class producto {
    nombre = "";
    precio = 0.0;
    descripcion = "";
    cantidad = 0;
    categoria = "";
    img = "";

    constructor (nombre,precio,descripcion,cantidad,categoria,img){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.img = img;
    }

    imprimirInfo(div){
        document.write(this.nombre);
        document.write(this.precio);
        document.write(this.categoria);
        document.write(this.cantidad);
        document.write(this.descripcion);
        document.write(this.img);
        /*
        div.innerHTML += `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Producto: ${this.nombre}</div>
        <div class="card-body">
          <h5 class="card-title">Precio: ${this.precio} años</h5>
          <h5 class="card-title">Categoria: ${this.categoria} años</h5>
          <h5 class="card-title">Cantidad: ${this.cantidad} años</h5>
          <h5 class="card-title">Descripcion: ${this.descripcion} años</h5>
          <img src="${this.img}">
        </div>
      </div>`;*/
    }
}

//---------------------------Creacion del objeto producto------------------------
var contenedor = document.querySelector("contenedorProducto");
var producto2 = new producto(localStorage.nombreProducto,localStorage.precio,localStorage.descripcion,localStorage.cantidad,localStorage.categoria,localStorage.img);

producto2.imprimirInfo(contenedor);

//---------------------------Fin codigo------------------------------

var enviar = document.getElementById("enviar");

enviar.addEventListener("click", ()=>{
  window.alert("Felicidades, su producto se ha subido!! :D");
})