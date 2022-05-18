var submit = document.getElementById("submit");
var reset = document.getElementById("reset");

//------------------- Codigo para subir los elementos del producto al localstorage -------------------------------

submit.addEventListener("click", ()=> {
    localStorage.clear()
    //event.preventDefault();

    localStorage.nombreProducto = document.getElementById("nombreProducto").value;
    localStorage.precio = document.getElementById("precio").value;
    localStorage.categoria = document.getElementById("categoria").value;
    localStorage.cantidad = document.getElementById("cantidad").value;
    localStorage.img = document.getElementById("img").value;
    localStorage.descripcion = document.getElementById("descripcion").value;
    //window.location.href="/formularioProducto2.html";
})

//---------------------- Fin del codigo ----------------------

reset.addEventListener("click",()=>{
    localStorage.clear();
})