const keys = document.querySelectorAll(".keys");

keys.forEach((key) => {
    key.addEventListener("click", () => {
        playPiano(key.getAttribute("data-note"));
    });
});

const playPiano = (nota) => {
    const audio = new Audio(`audio/${nota}.wav`);

    audio.play();
};
