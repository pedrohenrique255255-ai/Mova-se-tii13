const modal = document.getElementById("modalReserva");
    const botoes = document.querySelectorAll(".pac-reserva, .pac-fotos");
    const fechar = document.querySelector(".fechar");

    // abrir modal em TODOS os botões (reserva + fotos)
    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            modal.style.display = "block";
        });
    });

    // fechar no X
    fechar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // fechar clicando fora
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });