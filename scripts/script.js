const playPiano = (nota) => {
    const audio = new Audio(`audio/${nota}.mp3`);

    audio.play();
};
