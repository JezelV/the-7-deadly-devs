<<<<<<< HEAD
//************************************************Codigo de validacion de campos*************************************************** */
=======
>>>>>>> 2e95f04001839c3bc7dbb3dbaf558c7d1549e1d8
const correo1 = document.getElementById("correo1");
const password1 = document.getElementById("password1");
const btnSubmit1 = document.getElementById("btnSubmit1");
const form1 = document.getElementById("formulario1");

btnSubmit1.addEventListener('click',(e)=>{
	e.preventDefault();
	let formValid = true;
	if (!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z-.]+$/.test(correo1.value))){
<<<<<<< HEAD
		Swal.fire({
			icon: 'warning',
			title: 'Mmmm...',
			html: 'Verifica tu correo electrónico o contraseña.',
			timer: 1500,
			timerProgressBar: true,
			didOpen: () => {
			  Swal.showLoading()
			  const b = Swal.getHtmlContainer().querySelector('b')
			  timerInterval = setInterval(() => {
				b.textContent = Swal.getTimerLeft()
			  }, 100)
			},
			willClose: () => {
			  clearInterval(timerInterval)
			}
		  });
        formValid=false;
    } else if (!(/^.{4,12}$/.test(password1.value))){
		Swal.fire({
			icon: 'warning',
			title: 'Mmmm...',
			html: 'Verifica tu correo electrónico o contraseña.',
			timer: 2000,
			timerProgressBar: true,
			didOpen: () => {
			  Swal.showLoading()
			  const b = Swal.getHtmlContainer().querySelector('b')
			  timerInterval = setInterval(() => {
				b.textContent = Swal.getTimerLeft()
			  }, 100)
			},
			willClose: () => {
			  clearInterval(timerInterval)
			}
		  });
=======
        alert ('Por favor ingrese un correo valido.');
        formValid=false;
    }
	if (!(/^.{4,12}$/.test(password1.value))){
        alert ('Por favor ingrese su contraseña de 4 a 12 digitos.');
>>>>>>> 2e95f04001839c3bc7dbb3dbaf558c7d1549e1d8
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
<<<<<<< HEAD
//**************************************************Fin de codigo****************************************************************** */

//*********************************************Codigo de validacion de usuario***************************************************** */
function validarUsuairo(correo,password){
	if(localStorage.correo){
		if(localStorage.correo===correo && localStorage.password===password){
			Swal.fire({
				icon: 'success',
				title: localStorage.usuario,
				text: 'Bienvenido a la plataforma.',
			  });
			localStorage.sesion = 1;
			window.location.href = "./index.html";
		}else{
			Swal.fire({
				icon: 'error',
				html: 'Usuario o contraseña incorrectos, intente nuevamente.',
				timer: 2000,
				timerProgressBar: true,
				didOpen: () => {
				  Swal.showLoading()
				  const b = Swal.getHtmlContainer().querySelector('b')
				  timerInterval = setInterval(() => {
					b.textContent = Swal.getTimerLeft()
				  }, 100)
				},
				willClose: () => {
				  clearInterval(timerInterval)
				}
			  });
		}
	}else{
		Swal.fire({
			icon: 'error',
			html: 'Usuario no registrado',
			timer: 2000,
			timerProgressBar: true,
			didOpen: () => {
			  Swal.showLoading()
			  const b = Swal.getHtmlContainer().querySelector('b')
			  timerInterval = setInterval(() => {
				b.textContent = Swal.getTimerLeft()
			  }, 100)
			},
			willClose: () => {
			  clearInterval(timerInterval)
			}
		  });
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
=======



function validarUsuairo(correo,password){
	if(localStorage.correo){
		if(localStorage.correo===correo && localStorage.password===password){
			alert("Bienvenido " + localStorage.usuario + ".");
			window.location.href = "./index.html";
		}else{
			alert("Usuario o contraseña incorrectos, intente nuevamente.");
		}
	}else{
		alert("Usuario no registrado.");
	}
};
>>>>>>> 2e95f04001839c3bc7dbb3dbaf558c7d1549e1d8
