//Efecto de maquina de escribir
const typeWriter = document.getElementById("typewriter-text");
const text = "↓ ↓ ↓ ↓";

typeWriter.innerHTML = text;
typeWriter.style.setProperty("--characters", text.length);