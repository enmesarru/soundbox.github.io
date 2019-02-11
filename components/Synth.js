function buildSynth(options, type) {
  return SynthFactory.create(options, type);
}

function triggerSynth(note, duration = "16n", time) {
  synth.triggerAttackRelease(note, duration, time);
}

function triggerTone(isPlaying) {
  let notes = getNotes();
  if (notes.length == 0) {
    return;
  }
  if (isPlaying) {
    Tone.Transport.start("+0.1");
    part.values.push(...notes);
    part.start(0);
    loop();
  } else {
    Tone.Transport.stop();
    Tone.Transport.clear();
    part.stop();
    part.values = [];
    notes.length = 0;
  }
}

function synthOptions() {
  document.getElementById("synth_type").addEventListener("change", function() {
    let synth_type_value = this.value;
    synth = buildSynth(SynthTypes[synth_type_value], synth_type_value);
    synth.connect(gain);
    gain.toMaster();
  });

  document
    .getElementById("oscillator_type")
    .addEventListener("change", function() {
      let oscillator_type_value = this.value;
      synth.oscillator.type = oscillator_type_value;
    });

  document
    .getElementById("envelope_sustain")
    .addEventListener("change", function() {
      let envelope_sustain = this.value;
      synth.envelope.sustain = envelope_sustain;
    });

  range_bpm_value.addEventListener("change", function() {
    let range_bpm_value = this.value;
    changeBpmValue(range_bpm_value);
  });
}
