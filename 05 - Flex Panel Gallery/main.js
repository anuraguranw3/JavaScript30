const panels = document.querySelectorAll(".panel");

function toggleOpen() {
    this.classList.toggle("open");
}

function toggleActive(e) {
    if (e.propertyName.includes("flex")) {
        console.log(e.propertyName)
        e.target.classList.toggle("open-active");
    }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));