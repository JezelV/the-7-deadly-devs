/*----------------------------------------------------------
Codigo para validar campos del formulario y poder enviar el JSON
-----------------------------------------------------------*/

const inputs2 = document.querySelectorAll(".inputC");
const btnSubmit = document.getElementById("btnSubmit");
var entrada = [];
const checkbox = document.getElementById("terms");

//^(?!.* $)[A-Z][a-z ]+$
btnSubmit.addEventListener('click',()=>{
  //Validacion de campo por campo
  let formValid = true;
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