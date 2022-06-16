//************************************************Codigo de validacion de campos*************************************************** */
const correo1 = document.getElementById("correo1");
const password1 = document.getElementById("password1");
const btnSubmit1 = document.getElementById("btnSubmit1");
const form1 = document.getElementById("formulario1");

// Contenidor del header
var infoHeader = `
<nav class="navbar navbar-expand-lg navbar-light grey">
	<a href="./index2.html"><img class="logo" src="./assets/img/MB_Logo.png"></a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
		aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>

	<!--
		El siguiente div es para que el menu se expanda
	-->
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<!--Esta es la lista que se va mostrar cuando el menu se expande-->
		<ul class="navbar-nav mr-auto">
			<li class="nav-item active">
				<a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
			</li>
			<li class="nav-item active">
				<a class="nav-link" href="#">Acerca De Nosotros <span class="sr-only">(current)</span></a>
			</li>
			<li class="nav-item active">
				<a class="nav-link" href="#">Contactanos <span class="sr-only">(current)</span></a>
			</li>
			<li class="nav-item active">
				<a class="nav-link" href="#">Vendedor <span class="sr-only">(current)</span></a>
			</li>
			<li class="nav-item active">
				<a class="nav-link" href="#">Comprador <span class="sr-only">(current)</span></a>
			</li>
			<form class="form-inline my-2 my-lg-0">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
			</form>
		</ul>
		<br>			
		<br>
	</div>
</nav>`;

// Contenido del footer
var infoFooter = `
<div class="container">
  <div class="row">
	<!--Este es el pirmer apartado de footer que incluye informacion sobre nosotros-->
	<div class="col-sm-12 col-md-6">
	  <h6>About us</h6>
	  <p class="text-justify">We are a team of 7 Full Stack Jr developers, graduates of the Generation Mx bootcamp.</p>
	</div>


	<!--Este es el segundo apartado de footer que incluye los contactos-->
	<div class="col-xs-6 col-md-3">
		<h6>Contact</h6>
		<ul class="footer-links">
		  <li><a href="./aboutUs.html">About Us</a></li>
		  <li><a href="./contactUs.html">Contact Us</a></li>
		  <li><a href="./privacyPolicy.html">Privacy Policy</a></li>
		</ul>
	  </div>
	
	<!--Este es el tercer apartado de footer que incluye la direccion y links de la pagina-->
	<div class="col-xs-6 col-md-3">
	  <h6>social networks</h6>
	  <ul class="footer-links">

		  <!--ICONO DE GITHUB-->
		  <!--Los siguientes estilos sirven para darle formato, color y diseño a los iconos del footer-->
		<svg width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
			<!--
				El Path sirve permite dibujar cualquier tipo de curva
				El fill="currentColor" permite darle un color al icono en base al CSS de Bootstrap
			-->
			<a href="..." target="_blank"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></a>
		  </svg>

		  <!--ICONO DE INSTAGRAM-->
			  <svg width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
				<a href="..." target="_blank"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></a>
			  </svg>

		  <!--ICONO DE FACEBOOK-->
			<svg width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
				<a href="..." target="_blank"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></a>
			  </svg>

		<!--ICONO DE TWITTER-->
		<svg width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
			<a href="..." target="_blank"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></a>
		  </svg>
	  </ul>
	</div>
  </div>
</div>
`;

function addHeader() {
	console.log(document.getElementById("site-header").innerHTML);
	document.getElementById("site-header").innerHTML = infoHeader;
	
}

function addFooter() {
	// El elemento debe ser diferente de null para que se muestre el footer
	console.log(document.getElementById("site-footer").innerHTML);
	document.getElementById("site-footer").innerHTML = infoFooter;
}

// addHeader();
// addFooter();

btnSubmit1.addEventListener('click',(e)=>{
	e.preventDefault();
	let formValid = true;


	if (!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z-.]+$/.test(correo1.value))){
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
