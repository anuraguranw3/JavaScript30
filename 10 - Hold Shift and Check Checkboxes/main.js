const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let last;

function clickHandler(e) {
    let inBet = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === last) {
                inBet = !inBet;
            }
            if (inBet) {
                checkbox.checked = true;
            }
        });
    }
    last = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", clickHandler));