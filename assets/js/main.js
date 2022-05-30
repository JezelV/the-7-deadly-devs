
const formulario1 = document.getElementById('formulario1');
const input1 = document.querySelectorAll('#formulario1 input');

const expresiones1 = {  
    password1: /^[a-zA-Z0-9]{4,15}$/,
    correo1: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
const campos1 = {
    password1: false,
    correo1: false,
}
const validarFormulario1 = (e) => {
    switch (e.target.name) {
        case "password1":
            validarCampo1(expresiones1.password1, e.target, 'password1');
            break;
        case "correo1":
            validarCampo1(expresiones1.correo1, e.target, 'correo1');
            break;
    }
}
const validarCampo1 = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos1[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos1[campo] = false;
    }
}
input1.forEach(input => {
    input.addEventListener('keyup', validarFormulario1);
    input.addEventListener('blur', validarFormulario1);
});

formulario1.addEventListener('submit1', (e) => {

    e.preventDefault();
    const terminos1 = document.getElementById('terminos1');
    if (campos1.password1 && campos1.correo1 && terminos1.checked) {

    localStorage.clear();
    localStorage.correo1=document.getElementById('correo1').value;
    localStorage.password1=document.getElementById('password1').value;

    const lArray ={
        correo1:localStorage.correo1,
        password1:localStorage.password1
    }

    const lJSON=JSON.stringify(lArray);
    
    console.log(lJSON);
    formulario1.reset();

    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-activo');
    setTimeout(() => {
        document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-activo');
    }, 3000);
    document.querySelectorAll('formulario__grupo-correcto').forEach(icono => {
        icono.classList.remove('formulario__grupo-correcto');
    });
}else {
    alert('Todos los campos son obligatorios');
}
});