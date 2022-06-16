<<<<<<< HEAD
=======
const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});

>>>>>>> 2e95f04001839c3bc7dbb3dbaf558c7d1549e1d8
/*----------------------------------------------------------
Codigo para validar campos del formulario y poder enviar el JSON
-----------------------------------------------------------*/

<<<<<<< HEAD
const inputs2 = document.querySelectorAll(".inputP");
const btnSubmit = document.getElementById("btnSubmit");
var entrada = [];
const checkbox = document.getElementById("terms");
=======
const inputs = document.querySelectorAll(".inputP");
const btnSubmit = document.getElementById("btnSubmit");

>>>>>>> 2e95f04001839c3bc7dbb3dbaf558c7d1549e1d8

btnSubmit.addEventListener('click',()=>{
  //Validacion de campo por campo
  let formValid = true;
<<<<<<< HEAD
  if(checkbox.checked){
  for (var i=0; i<inputs2.length; i++) {
    if((inputs2[i].type =='text')||(inputs2[i].type =='number')||(inputs2[i].type =='textarea')) {
      if (inputs2[i].value == null || inputs2[i].value.length == 0 || /^\s*$/.test(inputs2[i].value)){
        entrada [i] = inputs2[i].name;
        formValid=false;
      }
    }
    if(inputs2[i].type =='file'){
      //Validacion de las img
      if (inputs2[i].value == null || inputs2[i].value.length == 0 || /^\s*$/.test(inputs2[i].value)){
        entrada [i] = inputs2[i].name;
        formValid=false;
      }
    }
    if(inputs2[i].id =='categoryP'){
      //Validacion del selector de categorias
      if(inputs2[i].value == "-- Categoria --"){
        entrada [i] = inputs2[i].name;
=======
  for (var i=0; i<inputs.length; i++) {
    if((inputs[i].type =='text')||(inputs[i].type =='number')||(inputs[i].type =='textarea')) {
      if (inputs[i].value == null || inputs[i].value.length == 0 || /^\s*$/.test(inputs[i].value)){
        alert (inputs[i].name+ ' no puede estar vacío o contener sólo espacios en blanco');
        formValid=false;
      }
    }
    if(inputs[i].type =='file'){
      //Validacion de las img
      if (inputs[i].value == null || inputs[i].value.length == 0 || /^\s*$/.test(inputs[i].value)){
        alert ('Por favor cargue al menos una imagen de su producto.');
        formValid=false;
      }
    }
    if(inputs[i].id =='categoryP'){
      //Validacion del selector de categorias
      if(inputs[i].value == "-- Categoria --"){
        alert("Por favor selecciona una categoria de su producto.");
>>>>>>> 2e95f04001839c3bc7dbb3dbaf558c7d1549e1d8
        formValid=false;
      }
    }
  }
<<<<<<< HEAD
  if(formValid==false){
    Swal.fire({
      icon: 'warning',
      title: 'Verifica los campos:',
      text: entrada.join(", "),
    });
  }
}else{
  Swal.fire({
    icon: 'warning',
    title: 'Verifica los terminos y condiciones',
  });
  formValid=false;
}
  if(formValid==true){
    //Si todos los campos estan validados correctamemnte se armara el json para poder enviarse
   
    //Aqui se arma el .json
    const pArray = {
      nombreP: document.getElementById("nameP").value,
      precioP: document.getElementById("priceP").value,
      cantidadP: document.getElementById("quantityP").value,
      imgP: document.getElementById("filesP").value,
      categoriaP: document.getElementById("categoryP").value,
      descripcionP: document.getElementById("descriptionP").value,
    }
  
    const pJson = JSON.stringify(pArray);

    	//*************************************************Metodo POST********************************************************** */
		const url = "http://localhost:8080/Meet&Buy/producto/";
		const data = new URLSearchParams("?nombreP="+pArray.nombreP+"&precioP="+pArray.precioP+"&cantidadP="+pArray.cantidadP+"&imgP="+pArray.imgP+"&categoriaP="+pArray.categoriaP+"&descripcionP="+pArray.descripcionP);

		fetch(url,{
			method: 'POST',
			body: data,
      /*headers: {
        'Content-Type': 'application/json'
      }*/
		}).then(res => res.json())
		.catch(error => console.log('Error: ', error))
		.then(response => console.log('Sucess: ', response));

		//************************************************Fin Metodo************************************************************ */
=======
  if(formValid==true){
    //Si todos los campos estan validados correctamemnte se armara el json para poder enviarse
    localStorage.clear();
    localStorage.nameP = document.getElementById("nameP").value;
    localStorage.priceP = document.getElementById("priceP").value;
    localStorage.quantityP = document.getElementById("quantityP").value;
    localStorage.filesP = document.getElementById("filesP").value;
    localStorage.categoryP = document.getElementById("categoryP").value;
    localStorage.descriptionP = document.getElementById("descriptionP").value;

    //Aqui se arma el .json
    const pArray = {
      "nameP": localStorage.nameP,
      "priceP": localStorage.priceP,
      "quantityP": localStorage.quantityP,
      "filesP": localStorage.filesP,
      "categoryP": localStorage.categoryP,
      "descriptionP": localStorage.descriptionP,
    }
  
    const pJson = JSON.stringify(pArray);
>>>>>>> 2e95f04001839c3bc7dbb3dbaf558c7d1549e1d8
  
    console.log(pJson);
  }
});
/*----------------------------------Fin de codigo----------------------------------*/