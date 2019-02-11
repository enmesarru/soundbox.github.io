function renderPlayButton() {
  let playButton = document.getElementById("play_button");
  let [playing, stopped] = ["play-button.svg", "stop.svg"];

  playButton.addEventListener("click", () => {
    board.togglePlaying();

    if (Tone.context.state !== "running") {
      Tone.context.resume();
    }

    playButton.src = `public/${board.playing ? stopped : playing}`;
    triggerTone(board.getPlaying());
  });
}

function renderBpm() {
  bpm_value.innerText = parseFloat(Tone.Transport.bpm.value).toFixed(0);
  changeRangeBpmValue();
}

function incrementBpm() {
  Tone.Transport.bpm.value += 1;
  renderBpm();
}

function decrementBpm() {
  Tone.Transport.bpm.value -= 1;
  renderBpm();
}

function changeBpmValue(value) {
  Tone.Transport.bpm.value = value;
  renderBpm();
}
function changeRangeBpmValue() {
  range_bpm_value.value = Tone.Transport.bpm.value;
}
