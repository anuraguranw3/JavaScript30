const inputs = document.querySelectorAll("input");

inputs.forEach(input => input.addEventListener("input", updateChange));

function updateChange() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}