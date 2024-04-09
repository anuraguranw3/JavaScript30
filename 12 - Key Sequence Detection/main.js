const text = document.querySelector(".text");
const key = document.querySelector(".code");

const pressed = [];
const code = "clicked";

window.addEventListener("keyup", (e) => {
    pressed.push(e.key);

    pressed.splice(-code.length - 1, pressed.length - code.length);
    if (pressed.join("").includes(code)) {
        text.textContent = "🎉🎉🎉🎉🎉";
        cornify_add();
    }
});