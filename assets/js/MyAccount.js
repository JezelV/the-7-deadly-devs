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
    var i = 0;
    var entrada = [];

    if(!(/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(nombreInfo.value))){
        entrada[i]='nombre';
        i++;
        formValid=false;
    }
    if(!(/^[a-zA-Z0-9\_\-]{4,16}$/.test(usuarioInfo.value))){
        entrada[i]='usuario';
        i++;
        formValid=false;
    }
    if(!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(correoInfo.value))){
        entrada[i]='correo';
        i++;
        formValid=false;
    }
    if(!(/^\d{7,14}$/.test(telefonoInfo.value))){
        entrada[i]='telefono';
        i++;
        formValid=false;
    }
    if(formValid==false){
        Swal.fire({
          icon: 'warning',
          title: 'Verifica los campos:',
          text: entrada.join(", "),
        });
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
    var m = 0;
    var entrada2 = [];

    if(!(/^.{4,12}$/.test(contraOriginal.value))){
        entrada2[m]='Contraseña original';
        m++;
        formValid=false;
    }
    if(!(/^.{4,12}$/.test(contraNueva.value))){
        entrada2[m]='Nueva Contraseña';
        m++;
        formValid=false;
    }
    if(!(/^.{4,12}$/.test(contraRepetir.value))){
        entrada2[m]='Repetir contraseña';
        m++;
        formValid=false;
    }
    if(contraNueva.value !== contraRepetir.value){
        entrada2[m]='Repetir contraseña';
        m++;
        formValid=false;
    }
    if(formValid==false){
        Swal.fire({
          icon: 'warning',
          title: 'Verifica los campos:',
          text: entrada2.join(", "),
        });
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
            Swal.fire({
                icon: 'success',
                html: 'La contraseña se actualizo correctamente',
              });
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
    var k = 0;
    var entrada3 = [];

    if(!(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(calle.value))){
        entrada3[k]='Calle';
        k++;
        formValid=false;

    }
    if((/^\d\s$/.test(numero.value))){
        entrada3[k]='Numero';
        k++;
        formValid=false;

    }
    if((/^\d$/.test(codigoPostal.value))||(/^\s*$/.test(codigoPostal.value))){
        entrada3[k]='Codigo Postal';
        k++;
        formValid=false;

    }
    if(/^\s*$/.test(colonia.value)){
        entrada3[k]='Colonia';
        k++;
        formValid=false;
    }
    if(/^\s*$/.test(municipio.value)){
        entrada3[k]='Municipio';
        k++;
        formValid=false;
    }
    if(estado.value=="-- Elige un estado --"){
        entrada3[k]='Estado';
        k++;
        formValid=false;
    }   
    if(formValid==false){
        Swal.fire({
          icon: 'warning',
          title: 'Verifica los campos:',
          text: entrada3.join(", "),
        });
    }

    if(formValid==true){

        dr(calle.value,numero.value,codigoPostal.value,colonia.value,municipio.value,estado.value);






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
        Swal.fire({
            icon: 'success',
            html: 'Direccion añadida correctamente',
          });
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
    var l = 0;
    var entrada4 = [];

    if(!(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombreTitular.value))){
        entrada4[l]='Nombre del titular';
        l++;
        formValid=false;
    }
    if(!(/^\d{16}$/.test(numeroTarjeta.value))){
        entrada4[l]='Numero de tarjeta';
        l++;
        formValid=false;
    }
    if(!(/^\d{3}$/.test(cvv.value))){
        entrada4[l]='CVV';
        l++;
        formValid=false;
    }
    if(mesPago.value=="00"){
        entrada4[l]='00';
        l++;
        formValid=false;
    }
    if(anioPago.value=="0000"){
        entrada4[l]='0000';
        l++;
        formValid=false;
    }
    if(formValid==false){
        Swal.fire({
          icon: 'warning',
          title: 'Verifica los campos:',
          text: entrada4.join(", "),
        });
    }


    if(formValid==true){
         
        mr(nombreTitular.value,numeroTarjeta.value,mesPago.value,anioPago.value);


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

        Swal.fire({
            icon: 'success',
            html: 'Tarjeta añadida correctamente',
          });
    }
});
/************************************************************Fin de codigo*************************************************************/

const btnCS = document.getElementById("btnCS");

btnCS.addEventListener('click', ()=>{
	localStorage.sesion = 0;
});


function dr(calle, numero, codigo, col, mun, edo){
    document.getElementById("direccionR").innerHTML='<p>'+calle+', '+numero+', '+col+'</p>\n'+
    '<p>'+codigo+'</p>\n'+
    '<p>'+mun+', '+edo+'</p>';
}

const BtnEli = document.getElementById("btn_direccion_eli");

BtnEli.addEventListener('click', ()=>{
    document.getElementById("direccionR").innerHTML='<p></p>';
});

const BtnEliM = document.getElementById("btn_pago_eliminar");

BtnEliM.addEventListener('click',()=>{
    document.getElementById("tarjetaR").innerHTML='<p></p>';
})

function mr(nombre, tarjeta, mes, anio){
    document.getElementById("tarjetaR").innerHTML='<p>'+nombre+'</p>\n'+
    '<p>'+tarjeta+'</p>\n'+
    '<p>Vencimiento: Mes: '+mes+' Año: '+anio+'</p>';
}