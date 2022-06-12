//************************************************Codigo de validacion de campos*************************************************** */
const correo1 = document.getElementById("correo1");
const password1 = document.getElementById("password1");
const btnSubmit1 = document.getElementById("btnSubmit1");
const form1 = document.getElementById("formulario1");

btnSubmit1.addEventListener('click',(e)=>{
	e.preventDefault();
	let formValid = true;
	if (!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z-.]+$/.test(correo1.value))){
        alert ('Por favor ingrese un correo valido.');
        formValid=false;
    }
	if (!(/^.{4,12}$/.test(password1.value))){
        alert ('Por favor ingrese su contraseña de 4 a 12 digitos.');
        formValid=false;
    }
	if(formValid==true){
		//localStorage.clear();
		localStorage.password1 = document.getElementById("password1").value;
		localStorage.correo1 = document.getElementById("correo1").value;
		
		
		//Aqui se arma el .json
		const pArray = {
			"password": localStorage.password1,
			"correo": localStorage.correo1,
		}
		  
		const LJson = JSON.stringify(pArray);
		
		validarUsuairo(localStorage.correo1,localStorage.password1);

		console.log(LJson);
		form1.reset();  
	}
});
//**************************************************Fin de codigo****************************************************************** */

//*********************************************Codigo de validacion de usuario***************************************************** */
function validarUsuairo(correo,password){
	if(localStorage.correo){
		if(localStorage.correo===correo && localStorage.password===password){
			alert("Bienvenido " + localStorage.usuario + ".");
			localStorage.sesion = 1;
			window.location.href = "./index.html";
		}else{
			alert("Usuario o contraseña incorrectos, intente nuevamente.");
		}
	}else{
		alert("Usuario no registrado.");
	}
};

function iniciarSesion(){
	const btnL = document.getElementById("btnL");
	const btnS = document.getElementById("btnS");
	if(localStorage.sesion==1){
		btnL.style.display = "none";
		btnS.style.display = "none";
	}else{
		btnL.style.display = "";
		btnS.style.display = "";
	}
}

iniciarSesion();

const btnM = document.getElementById("btnM");

btnM.addEventListener('click', ()=>{
	if(!(localStorage.sesion == undefined)){
		if(localStorage.sesion==0){
			$('#staticBackdrop').modal('show');
		}else{
			window.location.href = "./MyAccount.html";
		}
	}else{
		$('#staticBackdrop').modal('show');
	}
});

/******************************************************Fin de codigo************************************************************/ 