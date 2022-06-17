//const para guardar los datos de la card de un producto
const imagen = document.getElementById("imgOferta");
const nombre = document.getElementById("text-title");
const precio = document.getElementById("precioP");
const descripcion = document.getElementById("text-body");
const btnSubmit = document.getElementById("card-img");

btnSubmit.addEventListener('click',(e)=>{//evento click
        localStorage.clear();//limpiar localStorage
        localStorage.imagen = document.getElementById("imgOferta").value;//guardar imagen en localStorage
        localStorage.nombre = document.getElementById("text-title").value;//guardar nombre en localStorage
        localStorage.precio = document.getElementById("precioP").value;//guardar precio en localStorage
        localStorage.descripcion = document.getElementById("text-body").value;//guardar descripcion en localStorage
        //Aqui se arma el .json
        const pArray = {//objeto para guardar los datos del formulario
            "imagen": localStorage.imagen,
            "nombre": localStorage.nombre,
            "precio": localStorage.precio,
            "descripcion": localStorage.descripcion,
        }
            const LJson = JSON.stringify(pArray);//convertir el objeto a json
		  
		console.log(LJson);//imprimir el json
});



