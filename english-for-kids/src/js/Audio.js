function audioPlay(fileName) {
  const audio = new Audio(`audio/${fileName}.mp3`);

  if (audio) {
    audio.play();
  }
}

export default audioPlay;
