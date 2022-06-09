
const correo1 = document.getElementById("correo1");
const password1 = document.getElementById("password1");
const btnSubmit1 = document.getElementById("btnSubmit1");
const form1 = document.getElementById("formulario1");

btnSubmit1.addEventListener('click',(e)=>{//evento click
	e.preventDefault();//prevenir el comportamiento por defecto del formulario
	let formValid = true;//variable para validar el formulario
	if (!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z-.]+$/.test(correo1.value))){//validar correo
        alert ('Por favor ingrese un correo valido.');//alerta de correo invalido
        formValid=false;
    }
	if (!(/^.{4,12}$/.test(password1.value))){//validar password
        alert ('Por favor ingrese su contraseña de 4 a 12 digitos.');//alerta de password invalido
        formValid=false;
    }
<<<<<<< HEAD
	if(formValid==true){//si el formulario es valido
		localStorage.clear();//limpiar localStorage
		localStorage.password1 = document.getElementById("password1").value;//guardar password en localStorage
		localStorage.correo1 = document.getElementById("correo1").value;//guardar correo en localStorage
=======
	if(formValid==true){
		//localStorage.clear();
		localStorage.password1 = document.getElementById("password1").value;
		localStorage.correo1 = document.getElementById("correo1").value;
>>>>>>> b49c2ba866349a5a1295119142082ccd4fc90a75
		
		
		//Aqui se arma el .json
		const pArray = {//objeto para guardar los datos del formulario
			"password": localStorage.password1,
			"correo": localStorage.correo1,
		}
		  
<<<<<<< HEAD
		const LJson = JSON.stringify(pArray);//convertir el objeto a json
		  
		console.log(LJson);//imprimir el json
		form1.reset();  //limpiar el formulario
	}
});

=======
		const LJson = JSON.stringify(pArray);
		
		validarUsuairo(localStorage.correo1,localStorage.password1);

		console.log(LJson);
		form1.reset();  
	}
});



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
	if(localStorage.sesion==0){
		$('#staticBackdrop').modal('show');
	}else{
		window.location.href = "./MyAccount.html";
	}
});
>>>>>>> b49c2ba866349a5a1295119142082ccd4fc90a75
