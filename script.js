document.querySelector("button").addEventListener("click", function () {
    window.location.href = "historia.html";
});
const inicio = new Date("2026-05-06T00:00:00");

function atualizarContador() {
    const agora = new Date();

    const diferenca = agora - inicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    document.getElementById("contador").innerHTML =
        "❤️ Estamos juntos há<br><br>" + dias + " dias";
}

atualizarContador();
setInterval(atualizarContador, 1000);
