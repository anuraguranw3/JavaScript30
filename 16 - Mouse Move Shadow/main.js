const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 800;

function shadow(e) {
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    let x = e.offsetX;
    let y = e.offsetY;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = (x / width * walk) - (walk / 2);
    const yWalk = (y / height * walk) - (walk / 2);

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 red,
        ${xWalk * -1}px ${yWalk}px 0 lightgreen,
        ${yWalk}px ${xWalk * -1}px 0 orange,
        ${yWalk * -1}px ${xWalk}px 0 blue
    `;
}

hero.addEventListener("mousemove", shadow);