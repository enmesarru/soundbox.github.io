const grid = document.getElementById("grid");
const pad_list = document.getElementById("pad_list");
const duration_field = document.getElementById("duration");
const save_button = document.getElementById("btn_save");
const bpm_value = document.getElementById("bpm_value");
const grid_body = document.getElementById("grid_body");
const audio_visualization = document.getElementById("audio_visualization");
const visualization = document.getElementById("visualization");
const range_bpm_value = document.getElementById("range_bpm_value");
const canvas_context = audio_visualization.getContext("2d");

var board = new Board(5, 5);
var synth = buildSynth(SynthTypes.Synth, "Synth");

Object.freeze(board.pads);

var gain = new Tone.Gain(0.7);
synth.connect(gain);
gain.toMaster();

var part = new Tone.Pattern(function(time, event) {
  triggerSynth(event.note, event.duration, time);
});

initialize();

function initialize() {
  disableMouseWheel();

  renderGrid();
  renderPads();
  renderPlayButton();
  renderBpm();
  synthOptions();

  audio_visualization.width = grid_body.clientWidth;
  audio_visualization.height = grid_body.clientHeight;
  save_button.addEventListener("click", () => saveOptions());
  duration_field.value = null;
}
