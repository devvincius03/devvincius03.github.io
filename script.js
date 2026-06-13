console.log("Portfólio de Vinícius Santos carregado com sucesso!");
// TEXTO QUE VAI SER DIGITADO
const texto = "Olá, eu sou Vinícius Santos";
const elemento = document.getElementById("texto-digitado");
let i = 0;

// FUNÇÃO DE DIGITAÇÃO
function digitar() {
    if (i < texto.length) {
        elemento.textContent += texto.charAt(i);
        i++;
        // Velocidade: 100 = mais devagar, 50 = mais rápido
        setTimeout(digitar, 120); 
    }
}

// INICIAR ANIMAÇÃO QUANDO CARREGAR A PÁGINA
window.onload = digitar;
