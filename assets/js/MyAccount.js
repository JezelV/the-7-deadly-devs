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
const btn_direccion_aña = document.getElementById("btn_direccion_aña");

btn_direccion_aña.addEventListener('click',()=>{
    let formValid = true;
    const calle = document.getElementById("calle");
    const numero = document.getElementById("numero");
    const codigoPostal = document.getElementById("cp");
    const colonia = document.getElementById("colonia");
    const municipio = document.getElementById("municipio");
    const estado = document.getElementById("estado");

    if(!(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(calle.value))){
        alert ("Por favor ingrese su calle correctamente.");
        formValid=false;
    }
    if((/^\d\s$/.test(numero.value))){
        alert ("Por favor ingrese su número int y/o exterior, este debe ser solo números.");
        formValid=false;
    }
    if((/^\d$/.test(codigoPostal.value))||(/^\s*$/.test(codigoPostal.value))){
        alert ("Por favor ingrese su codigo postal, este debe ser solo números.");
        formValid=false;
    }
    if(/^\s*$/.test(colonia.value)){
        alert ("Por favor ingrese su colonia.");
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

        //Aqui se arma el .json
        const pArray = {
            calle: calle.value,
            numero: numero.value,
            codigopostal: codigoPostal.value,
            colonia: colonia.value,
            municipio: municipio.value,
            estado: estado.value
        }
        console.log(JSON.stringify(pArray));
        //*************************************************Metodo POST********************************************************** */
		const url = "http://localhost:8080/Meet&Buy/direccion/";
		//const data = new URLSearchParams("?calle="+pArray.calle+"&numeroInt="+pArray.numeroInt+"&codigoPostal="+pArray.codigoPostal+"&colonia="+pArray.colonia+"&municipio="+pArray.municipio+"&estado="+pArray.estado);

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
        alert("Direccion añadida correctamente.");
    }
});
/************************************************************Fin de codigo*************************************************************/

/***************************************Codigo para validar campos vacios en metodos de pago*******************************************/
const btn_pago_env = document.getElementById("btn_Pago_env");

btn_pago_env.addEventListener('click',()=>{
    let formValid = true;
    const nombreTitular = document.getElementById("nombretitular");
    const numeroTarjeta = document.getElementById("numerotarjeta");
    const cvv = document.getElementById("cvv");
    const mesPago = document.getElementById("mesPago");
    const anioPago = document.getElementById("añoPago");

    if(!(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombreTitular.value))){
        alert ("Por favor ingrese su nombre correctamente, este no debe contener numeros, simbolos o estar vacío.");
        formValid=false;
    }
    if(!(/^\d{16}$/.test(numeroTarjeta.value))){
        alert ("Por favor ingrese su numero de tarjeta correctamente, este debe contener 16 digitos.");
        formValid=false;
    }
    if(!(/^\d{3}$/.test(cvv.value))){
        alert ("Por favor ingrese su numero de seguridad al reverso de su tarjeta, este debe contener 3 digitos.");
        formValid=false;
    }
    if(mesPago.value=="00"){
        alert ("Por favor ingrese su mes de vencimiento.");
        formValid=false;
    }
    if(anioPago.value=="0000"){
        alert ("Por favor ingrese su año de vencimiento.");
        formValid=false;
    }


    if(formValid==true){
            
        //Aqui se arma el .json
        const pArray = {
            nombreT: nombreTitular.value,
            numeroT: numeroTarjeta.value,
            cvv: cvv.value,
            mesT: mesPago.value,
            añoT: anioPago.value
        }

        console.log(JSON.stringify(pArray));
        //*************************************************Metodo POST********************************************************** */
		const url = "http://localhost:8080/Meet&Buy/metodopago/";
		//const data = new URLSearchParams("?calle="+pArray.calle+"&numeroInt="+pArray.numeroInt+"&codigoPostal="+pArray.codigoPostal+"&colonia="+pArray.colonia+"&municipio="+pArray.municipio+"&estado="+pArray.estado);
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

        alert("Tarjeta añadida satisfactoriamente.");
    }
});
/************************************************************Fin de codigo*************************************************************/

const btnCS = document.getElementById("btnCS");

btnCS.addEventListener('click', ()=>{
	localStorage.sesion = 0;
});