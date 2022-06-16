const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {//Aqui ponemos las expersiones que son validas
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,// Correo electronico con @ y punto.
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {// Aqui guardamos los campos que son validos
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false	
}

const validarFormulario = (e) => {// Funcion que valida el formulario
	switch (e.target.name) {// Aqui seleccionamos el campo que se esta validando
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');// Aqui se llama a la funcion que valida el campo
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');// Aqui se llama a la funcion que valida el campo
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');// Aqui se llama a la funcion que valida el campo
			validarPassword2();
		break;
		case "password2":
			validarPassword2();// Aqui se llama a la funcion que valida el campo
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');// Aqui se llama a la funcion que valida el campo
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');// Aqui se llama a la funcion que valida el campo
		break;
	}
}

const validarCampo = (expresion, input, campo) => {// Aqui se valida el campo
	if(expresion.test(input.value)){// Aqui se valida la expresion
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {// Aqui se valida el campo password2
	const inputPassword1 = document.getElementById('password');// Aqui se obtiene el campo password1
	const inputPassword2 = document.getElementById('password2');// Aqui se obtiene el campo password2

	if(inputPassword1.value !== inputPassword2.value){// Aqui se valida que los campos password1 y password2 sean iguales
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');// Aqui se agrega la clase incorrecto
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');// Aqui se quita la clase correcto
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;// Aqui se cambia el valor del campo password a false
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;// Aqui se cambia el valor del campo password a true
	}
}

inputs.forEach((input) => {// Aqui se agregan los eventos a los campos
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {// Aqui se agrega el evento submit al formulario
	e.preventDefault();

	const terminos = document.getElementById('terminos');// Aqui se obtiene el campo terminos
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){// Aqui se valida que todos los campos esten correctos
		
		//Si todos los campos estan validados correctamemnte se armara el json para poder enviarse
        //localStorage.clear();//Aqui se limpia el localStorage
        
		
        //Aqui se arma el .json
        const pArray = {
            usuario: document.getElementById("usuario").value,
            nombre: document.getElementById("nombre").value,
            contrasenia: document.getElementById("password").value,
            correo: document.getElementById("correo").value,
            telefono: document.getElementById("telefono").value
        }


		//*************************************************Metodo POST********************************************************** */
		const url = "http://localhost:8080/Meet&Buy/usuario/";
		//const data = new URLSearchParams("?usuario="+pArray.usuario+"&nombre="+pArray.nombre+"&contrasenia="+pArray.contrasenia+"&correo="+pArray.correo+"&telefono="+pArray.telefono);
		
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

        console.log(JSON.stringify(pArray));
		formulario.reset();// Aqui se resetea el formulario
		
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {// Aqui se agrega un tiempo de espera para que el mensaje desaparezca
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);// Aqui se le da un tiempo de 5 segundos

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {// Aqui se agregan los iconos de exito
			icono.classList.remove('formulario__grupo-correcto');// Aqui se quita la clase correcto
		});
	} else {
		//un alert para que el usuario sepa que falta algo completar o que no acepto los terminos.
		Swal.fire({
			icon: 'warning',
			html: 'Falta completar la informacion o no acepto los terminos.',
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
	}
});