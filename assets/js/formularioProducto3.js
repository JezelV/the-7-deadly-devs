/*----------------------------------------------------------
Codigo para habilitar o deshabilitar los botones de enviar y reset dependiendo si esta activo el checkbox
-----------------------------------------------------------*/
const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});

/*----------------------------------Fin de codigo----------------------------------*/

/*----------------------------------------------------------
Codigo para validar campos del formulario y poder enviar el JSON
-----------------------------------------------------------*/

const inputs = document.querySelectorAll(".inputP");
const btnSubmit = document.getElementById("btnSubmit");
const formulario = document.formP;


btnSubmit.addEventListener('click',()=>{
  //Validacion de campo por campo
  let formValid = true;
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