document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('animatedImage');
    const container = document.querySelector('.container');
    const speed = 7; // Vitesse de déplacement, ajustez selon vos besoins

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let dx = (Math.random() - 0.5) * speed;
    let dy = (Math.random() - 0.5) * speed;

    function updatePosition() {
        x += dx;
        y += dy;

        if (x < 0 || x > window.innerWidth - image.width) dx = -dx;
        if (y < 0 || y > window.innerHeight - image.height) dy = -dy;

        image.style.left = `${x}px`;
        image.style.top = `${y}px`;

        requestAnimationFrame(updatePosition);
    }

    updatePosition();
});
