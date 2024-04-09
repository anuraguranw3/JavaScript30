const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

const togglePlay = () => {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
};

const updateBtn = (e) => {
    const icon = e.target.paused ? "▶️" : "⏸️";
    toggle.textContent = icon;
};

const skip = (e) => {
    video.currentTime += parseFloat(e.target.dataset.skip);
};

const rangeUpdate = (e) => {
    video[e.target.name] = e.target.value;
};

const handleUpdate = () => {
    const per = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${per}%`;
};

const move = (e) => {
    const time = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = time;
};

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach(btn => btn.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("input", rangeUpdate));

video.addEventListener("timeupdate", handleUpdate);

let mousedown = false;
progress.addEventListener("mousemove", (e) => mousedown && move(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);