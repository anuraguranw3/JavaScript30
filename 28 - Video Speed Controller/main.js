const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function playbackSpeed(e) {
    const y = e.pageY - this.offsetTop;
    const percent = 1 - (y / this.offsetHeight);
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + "%";
    bar.style.height = height;
    const playbackRate = percent * (max - min) + min;
    bar.textContent = playbackRate.toFixed(2) + "x";
    video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", playbackSpeed);