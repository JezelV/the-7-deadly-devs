//************************************************Codigo de validacion de campos*************************************************** */
const correo1 = document.getElementById("correo1");
const password1 = document.getElementById("password1");
const btnSubmit1 = document.getElementById("btnSubmit1");
const form1 = document.getElementById("formulario1");

btnSubmit1.addEventListener('click',(e)=>{
	e.preventDefault();
	let formValid = true;
	if (!(/^[a-zA-Z0-9\_\-]{4,16}$/.test(correo1.value))){
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
        formValid=false;
    }
	if(formValid==true){

		//Aqui se arma el .json
		const pArray = {
			"usuario": correo1.value,
			"contrasenia": password1.value,
		}
		  
		console.log(JSON.stringify(pArray));
		
//*************************************************Metodo POST********************************************************** */
		const url = "http://localhost:8080/Meet&Buy/login/";
		//const data = new URLSearchParams("?usuario="+pArray.usuario+"&nombre="+pArray.nombre+"&contrasenia="+pArray.contrasenia+"&correo="+pArray.correo+"&telefono="+pArray.telefono);

		fetch(url,{
			method: 'POST',
			headers: {
					'Content-Type': 'application/json'
	  				 },
			body: JSON.stringify(pArray)
		}).then(res => res.text())
		.then(response => {
			if(response=='Datos correctos'){
				Swal.fire({
					icon: 'success',
					html: 'Bienvenido a la plataforma.',
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
				localStorage.sesion = 1;
				setTimeout(function(){
					window.location.href = "./index.html"
				},2000);
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
		}).catch(error => console.log('Error: ', error));

//************************************************Fin Metodo************************************************************ */		

		form1.reset();  
	}
});
//**************************************************Fin de codigo****************************************************************** */

//*********************************************Codigo de validacion de usuario***************************************************** */

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

const BtnBuscar = document.getElementById("BtnBuscar");

BtnBuscar.addEventListener('click',()=>{
	localStorage.categoria='Resultados';
});