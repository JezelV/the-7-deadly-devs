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

const inputs = document.querySelectorAll(".inputC");
const btnSubmit = document.getElementById("btnSubmit");

//^(?!.* $)[A-Z][a-z ]+$
btnSubmit.addEventListener('click',()=>{
  //Validacion de campo por campo
  let formValid = true;
  for (var i=0; i<inputs.length; i++) {
    if(inputs[i].type =='text'){
      if (!(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(inputs[i].value))){
        alert (inputs[i].name+ ' no puede contener simbolos, estar vacío o contener sólo espacios en blanco');
        formValid=false;
      }
    }
    if(inputs[i].type =='email'){
      //Validacion de las img
      if (!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z-.]+$/.test(inputs[i].value))){
        alert ('Por favor ingrese un correo valido.');
        formValid=false;
      }
    }
    if(inputs[i].type =='tel'){
      //Validacion de las img
      if (!(/^\d{7,14}$/.test(inputs[i].value))){
        alert ('Por favor ingrese un telefono valido (este debe contener solo numeros de 7 a 14 digitos).');
        formValid=false;
      }
    }
    if(inputs[i].type =='textarea'){
      //Validacion de las img
      if (/^\s*$/.test(inputs[i].value)){
        alert ('Por favor ingrese un mensaje valido (este no debe estar vacio o contener solo espacios).');
        formValid=false;
      }
    }
    if(inputs[i].id =='optionC'){
      //Validacion del selector
      if(inputs[i].value == "-- Elige una opción por favor --"){
        alert("Por favor selecciona una opción.");
        formValid=false;
      }
    }
  }
  
  if(formValid==true){
    //Si todos los campos estan validados correctamemnte se armara el json para poder enviarse
    localStorage.clear();
    localStorage.nameC = document.getElementById("nameC").value;
    localStorage.surnameC = document.getElementById("surnameC").value;
    localStorage.optionC = document.getElementById("optionC").value;
    localStorage.emailC = document.getElementById("emailC").value;
    localStorage.phoneC = document.getElementById("phoneC").value;
    localStorage.mensaggeC = document.getElementById("mensaggeC").value;

    //Aqui se arma el .json
    const pArray = {
      "nameC": localStorage.nameC,
      "surnameC": localStorage.surnameC,
      "optionC": localStorage.optionC,
      "emailC": localStorage.emailC,
      "phoneC": localStorage.phoneC,
      "mensaggeC": localStorage.mensaggeC,
    }
  
    const pJson = JSON.stringify(pArray);
  
    console.log(pJson);
  }
});
/*----------------------------------Fin de codigo----------------------------------*/