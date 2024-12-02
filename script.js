const buttons = document.querySelectorAll('.game-link');

buttons.forEach((button) => {
    let x = Math.random() * (window.innerWidth - button.offsetWidth);
    let y = Math.random() * (window.innerHeight - button.offsetHeight);
    let dx = Math.random() * 2 + 1; // Velocidad horizontal
    let dy = Math.random() * 2 + 1; // Velocidad vertical

    function moveButton() {
        x += dx;
        y += dy;

        // Rebote en los bordes
        if (x <= 0 || x + button.offsetWidth >= window.innerWidth) dx *= -1;
        if (y <= 0 || y + button.offsetHeight >= window.innerHeight) dy *= -1;

        button.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(moveButton);
    }

    moveButton();
});

