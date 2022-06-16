//Efecto de maquina de escribir
const typeWriter = document.getElementById("typewriter-text");
const text = "Resultados de la búsqueda.";

typeWriter.innerHTML = text;
typeWriter.style.setProperty("--characters", text.length);