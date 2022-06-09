/*********************************Codigo para habilitar y deshabilitar inputs del campo datos personales********************************/
const btn_personal_mod = document.getElementById("btn_personal_mod");

btn_personal_mod.addEventListener('click', () => {
    const nombreInfo = document.getElementById("nombreInfo");
    const usuarioInfo = document.getElementById("usuarioInfo");
    const correoInfo = document.getElementById("correoInfo");
    const telefonoInfo = document.getElementById("telefonoInfo");

    if(nombreInfo.disabled == true){
        nombreInfo.disabled = false;
        usuarioInfo.disabled = false;
        correoInfo.disabled = false;
        telefonoInfo.disabled = false;
    }else{
        nombreInfo.disabled = true;
        usuarioInfo.disabled = true;
        correoInfo.disabled = true;
        telefonoInfo.disabled = true;
    }
})
/************************************************************Fin de codigo*************************************************************/



/***************************************Codigo para validar campos vacios en datos perosnales******************************************/
const btn_perosnal_env = document.getElementById("btn_perosnal_env");

btn_perosnal_env.addEventListener('click',()=>{
    //Validacion de campo por campo
    let formValid = true;
    const nombreInfo = document.getElementById("nombreInfo");
    const usuarioInfo = document.getElementById("usuarioInfo");
    const correoInfo = document.getElementById("correoInfo");
    const telefonoInfo = document.getElementById("telefonoInfo");

    if(!(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombreInfo.value))){
        alert (nombreInfo.name+ ' no puede contener simbolos, estar vacío o contener sólo espacios en blanco');
        formValid=false;
    }
    if(!(/^[a-zA-Z0-9\_\-]{4,16}$/.test(usuarioInfo.value))){
        alert (usuarioInfo.name+ ' debe contener de 4 a 16 caracteres, no puede contener simbolos, estar vacío o contener sólo espacios en blanco.');
        formValid=false;
    }
    if(!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(correoInfo.value))){
        alert (correoInfo.name+ ' no es un correo válido.');
        formValid=false;
    }
    if(!(/^\d{7,14}$/.test(telefonoInfo.value))){
        alert ('Por favor ingrese un telefono valido (este debe contener solo numeros de 7 a 14 digitos).');
        formValid=false;
    }
    
    if(formValid==true){
      //Si todos los campos estan validados correctamemnte se armara el json para poder enviarse
      localStorage.clear();
      localStorage.nombreInfo = nombreInfo.value;
      localStorage.usuarioInfo = usuarioInfo.value;
      localStorage.correoInfo = correoInfo.value;
      localStorage.telefonoInfo = telefonoInfo.value;

      //Aqui se arma el .json
      const pArray = {
        "usuario": localStorage.usuarioInfo,
        "nombre": localStorage.nombreInfo,
        "correo": localStorage.correoInfo,
        "telefono": localStorage.telefonoInfo
      }
    
      const pJson = JSON.stringify(pArray);
    
      console.log(pJson);
    }
  });
/************************************************************Fin de codigo*************************************************************/


/********************************************Codigo para validar campos vacios en contraseña*******************************************/
const btn_contraseña_env = document.getElementById("btn_contraseña_env");

btn_contraseña_env.addEventListener('click',()=>{
    let formValid = true;
    const contraOriginal = document.getElementById("contraOriginal");
    const contraNueva = document.getElementById("contraNueva");
    const contraRepetir = document.getElementById("contraRepetir");

    if(!(/^.{4,12}$/.test(contraOriginal.value))){
        alert ("Por favor ingrese su contraseña original de 4 a 12 digitos.");
        formValid=false;
    }
    if(!(/^.{4,12}$/.test(contraNueva.value))){
        alert ("Por favor ingrese su contraseña nueva de 4 a 12 digitos.");
        formValid=false;
    }
    if(!(/^.{4,12}$/.test(contraRepetir.value))){
        alert ("Por favor confirme su contraseña nueva de 4 a 12 digitos.");
        formValid=false;
    }
    if(contraNueva.value !== contraRepetir.value){
        alert ("Las contraseñas no coinciden, por favor asegurese de ingresarlas correctamente.");
        formValid=false;
    }
    if(formValid==true){
        localStorage.clear();
        localStorage.contraNueva = contraNueva.value;
        localStorage.contraRepetir = contraRepetir.value;

        //Aqui se arma el .json
        const pArray = {
            "contraseña": localStorage.contraNueva,
        }

        const pJson = JSON.stringify(pArray);

        console.log(pJson);
        alert("Contraseña cambiada correctamente.");
    }
});
/************************************************************Fin de codigo*************************************************************/

/***************************************Codigo para validar campos vacios en direcciones***********************************************/
const btn_direccion_env = document.getElementById("btn_direccion_env");

btn_direccion_env.addEventListener('click',()=>{
    let formValid = true;
    const direccion = document.getElementById("direccion1");
    const codigoPostal = document.getElementById("cp1");
    const colonia = document.getElementById("colonia1");
    const ciudad = document.getElementById("ciudad1");
    const municipio = document.getElementById("municipio1");
    const estado = document.getElementById("estado1");

   if(/^\s*$/.test(direccion.value)){
        alert ("Por favor ingrese su direccion.");
        formValid=false;
    }
    if(/^\s*$/.test(codigoPostal.value)){
        alert ("Por favor ingrese su codigo postal.");
        formValid=false;
    }
    if(/^\s*$/.test(colonia.value)){
        alert ("Por favor ingrese su colonia.");
        formValid=false;
    }
    if(/^\s*$/.test(ciudad.value)){
        alert ("Por favor ingrese su ciudad.");
        formValid=false;
    }
    if(/^\s*$/.test(municipio.value)){
        alert ("Por favor ingrese su municipio.");
        formValid=false;
    }
    if(estado.value=="-- Elige un estado --"){
        alert ("Por favor ingrese su estado.");
        formValid=false;
    }

    if(formValid==true){
        localStorage.clear();
        localStorage.direccion = direccion.value;
        localStorage.cp = codigoPostal.value;
        localStorage.colonia = colonia.value;
        localStorage.ciudad = ciudad.value;
        localStorage.municipio = municipio.value;
        localStorage.estado = estado.value;

        //Aqui se arma el .json
        const pArray = {
            "direccionEdi": localStorage.direccion,
            "codigoPostalEdi": localStorage.cp,
            "coloniaEdi": localStorage.colonia,
            "ciudadEdi": localStorage.ciudad,
            "municipioEdi": localStorage.municipio,
            "estadoEdi": localStorage.estado
        }

        const pJson = JSON.stringify(pArray);

        console.log(pJson);
        alert("Direccion cambiada correctamente.");
    }
});
/************************************************************Fin de codigo*************************************************************/

/***************************************Codigo para validar campos vacios en direcciones***********************************************/
const btn_direccion_aña = document.getElementById("btn_direccion_aña");

btn_direccion_aña.addEventListener('click',()=>{
    let formValid = true;
    const direccion = document.getElementById("direccion");
    const codigoPostal = document.getElementById("cp");
    const colonia = document.getElementById("colonia");
    const ciudad = document.getElementById("ciudad");
    const municipio = document.getElementById("municipio");
    const estado = document.getElementById("estado");

   if(/^\s*$/.test(direccion.value)){
        alert ("Por favor ingrese su direccion.");
        formValid=false;
    }
    if(/^\s*$/.test(codigoPostal.value)){
        alert ("Por favor ingrese su codigo postal.");
        formValid=false;
    }
    if(/^\s*$/.test(colonia.value)){
        alert ("Por favor ingrese su colonia.");
        formValid=false;
    }
    if(/^\s*$/.test(ciudad.value)){
        alert ("Por favor ingrese su ciudad.");
        formValid=false;
    }
    if(/^\s*$/.test(municipio.value)){
        alert ("Por favor ingrese su municipio.");
        formValid=false;
    }
    if(estado.value=="-- Elige un estado --"){
        alert ("Por favor ingrese su estado.");
        formValid=false;
    }

    if(formValid==true){
        localStorage.clear();
        localStorage.direccion = direccion.value;
        localStorage.cp = codigoPostal.value;
        localStorage.colonia = colonia.value;
        localStorage.ciudad = ciudad.value;
        localStorage.municipio = municipio.value;
        localStorage.estado = estado.value;

        //Aqui se arma el .json
        const pArray = {
            "direccionAña": localStorage.direccion,
            "codigoPostalAña": localStorage.cp,
            "coloniaAña": localStorage.colonia,
            "ciudadAña": localStorage.ciudad,
            "municipioAña": localStorage.municipio,
            "estadoAña": localStorage.estado
        }

        const pJson = JSON.stringify(pArray);

        console.log(pJson);
        alert("Direccion añadida correctamente.");
    }
});
/************************************************************Fin de codigo*************************************************************/

/***************************************Codigo para validar campos vacios en metodos de pago*******************************************/
const btn_pago_ed = document.getElementById("btn_pago_ed");

btn_pago_ed.addEventListener('click',()=>{
    let formValid = true;
    const nombreTitular1 = document.getElementById("nombretitular1");
    const numeroTarjeta1 = document.getElementById("numerotarjeta1");
    const mesPago1 = document.getElementById("mesPago1");
    const anioPago1 = document.getElementById("añoPago1");

    if(!(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombreTitular1.value))){
        alert ("Por favor ingrese su nombre correctanmente, este no debe contener numeros, simbolos o estar vacío.");
        formValid=false;
    }
    if(!(/^\d{16}$/.test(numeroTarjeta1.value))){
        alert ("Por favor ingrese su numero de tarjeta correctamente, este debe contener 16 digitos.");
        formValid=false;
    }
    if(mesPago1.value=="00"){
        alert ("Por favor ingrese su mes de pago.");
        formValid=false;
    }
    if(anioPago1.value=="0000"){
        alert ("Por favor ingrese su año de pago.");
        formValid=false;
    }


    if(formValid==true){
        localStorage.nombretitular1 = nombreTitular1.value;
        localStorage.numerotarjeta1 = numeroTarjeta1.value;
        localStorage.mesPago1 = mesPago1.value;
        localStorage.añoPago1 = anioPago1.value;
        
        
        //Aqui se arma el .json
        const pArray = {
            "nombreTitular1": localStorage.nombretitular1,
            "numeroTarjeta1": localStorage.numerotarjeta1,
            "mesPago1": localStorage.mesPago1,
            "añoPago1": localStorage.añoPago1
        }

        const pJson = JSON.stringify(pArray);

        console.log(pJson);
        alert("Tarjeta cambiada satisfactoriamente.");
    }
});
/************************************************************Fin de codigo*************************************************************/

/***************************************Codigo para validar campos vacios en metodos de pago*******************************************/
const btn_pago_env = document.getElementById("btn_Pago_env");

btn_pago_env.addEventListener('click',()=>{
    let formValid = true;
    const nombreTitular = document.getElementById("nombretitular");
    const numeroTarjeta = document.getElementById("numerotarjeta");
    const mesPago = document.getElementById("mesPago");
    const anioPago = document.getElementById("añoPago");

    if(!(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombreTitular.value))){
        alert ("Por favor ingrese su nombre correctanmente, este no debe contener numeros, simbolos o estar vacío.");
        formValid=false;
    }
    if(!(/^\d{16}$/.test(numeroTarjeta.value))){
        alert ("Por favor ingrese su numero de tarjeta correctamente, este debe contener 16 digitos.");
        formValid=false;
    }
    if(mesPago.value=="00"){
        alert ("Por favor ingrese su mes de pago.");
        formValid=false;
    }
    if(anioPago.value=="0000"){
        alert ("Por favor ingrese su año de pago.");
        formValid=false;
    }


    if(formValid==true){
        localStorage.nombretitular = nombreTitular.value;
        localStorage.numerotarjeta = numeroTarjeta.value;
        localStorage.mesPago = mesPago.value;
        localStorage.añoPago = anioPago.value;
        
        
        //Aqui se arma el .json
        const pArray = {
            "nombreTitular": localStorage.nombretitular,
            "numeroTarjeta": localStorage.numerotarjeta,
            "mesPago": localStorage.mesPago,
            "añoPago": localStorage.añoPago
        }

        const pJson = JSON.stringify(pArray);

        console.log(pJson);
        alert("Tarjeta cambiada satisfactoriamente.");
    }
});
/************************************************************Fin de codigo*************************************************************/

const btnCS = document.getElementById("btnCS");

btnCS.addEventListener('click', ()=>{
	localStorage.sesion = 0;
});