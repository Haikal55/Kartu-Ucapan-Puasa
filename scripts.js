document.addEventListener('DOMContentLoaded', function () {
    const doodleContainer = document.querySelector('.doodle-container');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        doodleContainer.appendChild(star);

        setPosition(star);

        setTimeout(() => {
            star.style.opacity = 1;
        }, Math.random() * 2000);
    }

    function setPosition(element) {
        element.style.left = `${Math.random() * 100}vw`;
        element.style.top = `${Math.random() * 100}vh`;
    }
});