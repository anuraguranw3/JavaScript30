// window.addEventListener("keydown", function(e) {
//     console.log(e.keyCode)
// })

window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const button = document.querySelector( `.key[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    button.classList.add("clicked");
});

const button = document.querySelectorAll(".key");
button.forEach(button => button.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
    this.classList.remove("clicked");
}