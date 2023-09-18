function createConfetti() {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(confetti);
    setTimeout(() => {
        confetti.remove();
    }, 2000); // Čas, po kterém konfeta zmizí
}

setInterval(createConfetti, 200); // Interval pro vytváření konfet
//* Upravila jsem soubor 