/*----------------------------------------------------------
Codigo para validar campos del formulario y poder enviar el JSON
-----------------------------------------------------------*/

const inputs2 = document.querySelectorAll(".inputP");
const btnSubmit = document.getElementById("btnSubmit");


btnSubmit.addEventListener('click',()=>{
  //Validacion de campo por campo
  let formValid = true;
  for (var i=0; i<inputs2.length; i++) {
    if((inputs2[i].type =='text')||(inputs2[i].type =='number')||(inputs2[i].type =='textarea')) {
      if (inputs2[i].value == null || inputs2[i].value.length == 0 || /^\s*$/.test(inputs2[i].value)){
        alert (inputs2[i].name+ ' no puede estar vacío o contener sólo espacios en blanco');
        formValid=false;
      }
    }
    if(inputs2[i].type =='file'){
      //Validacion de las img
      if (inputs2[i].value == null || inputs2[i].value.length == 0 || /^\s*$/.test(inputs2[i].value)){
        alert ('Por favor cargue al menos una imagen de su producto.');
        formValid=false;
      }
    }
    if(inputs2[i].id =='categoryP'){
      //Validacion del selector de categorias
      if(inputs2[i].value == "-- Categoria --"){
        alert("Por favor selecciona una categoria de su producto.");
        formValid=false;
      }
    }
  }
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
  
    console.log(pJson);
  }
});
/*----------------------------------Fin de codigo----------------------------------*/