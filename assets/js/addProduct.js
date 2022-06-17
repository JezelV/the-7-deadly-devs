/*----------------------------------------------------------
Codigo para validar campos del formulario y poder enviar el JSON
-----------------------------------------------------------*/

const inputs2 = document.querySelectorAll(".inputP");
const btnSubmit = document.getElementById("btnSubmit");
var entrada = [];
const checkbox = document.getElementById("terms");

btnSubmit.addEventListener('click',()=>{
  //Validacion de campo por campo
  let formValid = true;
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
        formValid=false;
      }
    }
  }
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
  
    
    console.log(JSON.stringify(pArray));
    	//*************************************************Metodo POST********************************************************** */
		const url = "http://localhost:8080/Meet&Buy/producto/";
		//const data = new URLSearchParams("?nombreP="+pArray.nombreP+"&precioP="+pArray.precioP+"&cantidadP="+pArray.cantidadP+"&imgP="+pArray.imgP+"&categoriaP="+pArray.categoriaP+"&descripcionP="+pArray.descripcionP);
		fetch(url,{
			method: 'POST',
			body: JSON.stringify(pArray),
      headers: {
        'Content-Type': 'application/json'
      }
		}).then(res => res.json())
		.catch(error => console.log('Error: ', error))
		.then(response => console.log('Sucess: ', response));

		//************************************************Fin Metodo************************************************************ */
  }
});
/*----------------------------------Fin de codigo----------------------------------*/