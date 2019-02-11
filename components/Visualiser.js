const colors_visualizer = ["#61DBD7", "#FF7F41", "#8FB809"];

function Wave() {
  resetVisualiser();
  canvas_context.fillStyle = pick(colors_visualizer);
  let phase = 170;
  let height = audio_visualization.height / 2;
  for (let x = 0; x < audio_visualization.width; x += 2) {
    let envelopeValue = synth.envelope.value * 200;
    let y = Math.sin(x / 60 + phase) * envelopeValue;
    point(x, height - y, 2, canvas_context);
    point(x, height - Math.sin(y) * y, 2, canvas_context);
  }
  phase += 0.01;
}

function loop() {
  requestAnimationFrame(loop);
  switch (visualization.value) {
    case "wave":
      Wave();
      break;
    case "spiral":
      Spiral();
      break;
    default:
      Wave();
      break;
  }
}

function resetVisualiser() {
  canvas_context.fillStyle = "#181d20";
  canvas_context.fillRect(
    0,
    0,
    audio_visualization.width,
    audio_visualization.height
  );
}

function Spiral() {
  resetVisualiser();
  canvas_context.fillStyle = pick(colors_visualizer);
  var angle = 0;
  let envelopeValue = synth.envelope.value * 50;
  for (var i = 0; i < envelopeValue * 100; i++) {
    let x =
      audio_visualization.width / 2 - Math.sin(angle) * envelopeValue * angle;
    let y =
      audio_visualization.height / 2 - Math.cos(angle) * envelopeValue * angle;
    point(x, y, 3, canvas_context);
    angle = angle + 0.1;
  }
}
