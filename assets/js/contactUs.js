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
const inputs2 = document.querySelectorAll(".inputC");
const btnSubmit = document.getElementById("btnSubmit");
var entrada = [];
const checkbox = document.getElementById("terms");
=======
const inputs = document.querySelectorAll(".inputC");
const btnSubmit = document.getElementById("btnSubmit");
>>>>>>> 2e95f04001839c3bc7dbb3dbaf558c7d1549e1d8

//^(?!.* $)[A-Z][a-z ]+$
btnSubmit.addEventListener('click',()=>{
  //Validacion de campo por campo
  let formValid = true;
<<<<<<< HEAD
  if(checkbox.checked){
  for (var i=0; i<inputs2.length; i++) {
    if(inputs2[i].type =='text'){
      if (!(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(inputs2[i].value))){
        entrada [i] = inputs2[i].name;
        formValid=false;
      }
    }
    if(inputs2[i].type =='email'){
      //Validacion de email
      if (!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z-.]+$/.test(inputs2[i].value))){
        entrada [i] = inputs2[i].name;
        formValid=false;
      }
    }
    if(inputs2[i].type =='tel'){
      //Validacion de tel
      if (!(/^\d{7,14}$/.test(inputs2[i].value))){
        entrada [i] = inputs2[i].name;
        formValid=false;
      }
    }
    if(inputs2[i].type =='textarea'){
      //Validacion del textarea
      if (/^\s*$/.test(inputs2[i].value)){
        entrada [i] = inputs2[i].name;
        formValid=false;
      }
    }
    if(inputs2[i].id =='optionC'){
      //Validacion del selector
      if(inputs2[i].value == "-- Elige una opción por favor --"){
        entrada [i] = inputs2[i].name;
=======
  for (var i=0; i<inputs.length; i++) {
    if(inputs[i].type =='text'){
      if (!(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(inputs[i].value))){
        alert (inputs[i].name+ ' no puede contener simbolos, estar vacío o contener sólo espacios en blanco');
        formValid=false;
      }
    }
    if(inputs[i].type =='email'){
      //Validacion de email
      if (!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z-.]+$/.test(inputs[i].value))){
        alert ('Por favor ingrese un correo valido.');
        formValid=false;
      }
    }
    if(inputs[i].type =='tel'){
      //Validacion de tel
      if (!(/^\d{7,14}$/.test(inputs[i].value))){
        alert ('Por favor ingrese un telefono valido (este debe contener solo numeros de 7 a 14 digitos).');
        formValid=false;
      }
    }
    if(inputs[i].type =='textarea'){
      //Validacion del textarea
      if (/^\s*$/.test(inputs[i].value)){
        alert ('Por favor ingrese un mensaje valido (este no debe estar vacio o contener solo espacios).');
        formValid=false;
      }
    }
    if(inputs[i].id =='optionC'){
      //Validacion del selector
      if(inputs[i].value == "-- Elige una opción por favor --"){
        alert("Por favor selecciona una opción.");
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
=======
  
>>>>>>> 2e95f04001839c3bc7dbb3dbaf558c7d1549e1d8
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