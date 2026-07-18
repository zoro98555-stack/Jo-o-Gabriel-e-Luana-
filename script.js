const texto = "João Gabriel ❤️ Luana";
let indice = 0;

function escreverNome() {
    if (indice < texto.length) {
        document.getElementById("titulo").innerHTML += texto.charAt(indice);
        indice++;
        setTimeout(escreverNome, 150);
    }
}

escreverNome();
document.querySelector("button").addEventListener("click", function () {
    window.location.href = "historia.html";
});
const inicio = new Date("2026-05-06T00:00:00");

function atualizarContador() {
    const agora = new Date();

    const diferenca = agora - inicio;

    const segundos = Math.floor(diferenca / 1000) % 60;
const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
const meses = Math.floor(dias / 30);
const diasRestantes = dias % 30;
document.getElementById("contador").innerHTML = `
❤️ Estamos juntos há ❤️<br><br>

${meses} meses<br>
${diasRestantes} dias<br>
${horas} horas<br>
${minutos} minutos<br>
${segundos} segundos
`;
}

atualizarContador();
setInterval(atualizarContador, 1000);
function tocarMusica(){
    const musica = document.getElementById("musica");

    if(musica.paused){
        musica.play();
    } else {
        musica.pause();
    }
}
