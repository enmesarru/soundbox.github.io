const SynthTypes = {
  Synth: {
    oscillator: {
      type: "triangle"
    },
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0.9,
      release: 1
    }
  },
  MonoSynth: {
    frequency: "C4",
    detune: 0,
    filter: {
      Q: 6,
      type: "lowpass",
      rollof: -24
    },
    filterEnvelope: {
      attack: 0.06,
      decay: 0.2,
      sustain: 0.5,
      release: 2,
      baseFrequency: 200,
      octaves: 7,
      exponent: 2
    },
    oscillator: {
      type: "triangle"
    },
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0.9,
      release: 1
    }
  },
  AMSynth: {
    detune: 0,
    harmonicity: 0,
    modulation: {
      type: "square"
    },
    modulationEnvelope: {
      attack: 0.5,
      decay: 0,
      sustain: 1,
      release: 0.5
    },
    oscillator: {
      type: "triangle"
    },
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0.9,
      release: 1
    }
  },
  FMSynth: {
    harmonicity: 3,
    modulationIndex: 10,
    detune: 0,
    modulation: {
      type: "square"
    },
    modulationEnvelope: {
      attack: 0.5,
      decay: 0,
      sustain: 1,
      release: 0.5
    },
    oscillator: {
      type: "triangle"
    },
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0.9,
      release: 1
    }
  }
};

const SynthFactory = {
  create(options, synth_type) {
    switch (synth_type) {
      case "Synth":
        return new Tone.Synth(options);
        break;
      case "MonoSynth":
        return new Tone.MonoSynth(options);
        break;
      case "FMSynth":
        return new Tone.FMSynth(options);
        break;
      case "AMSynth":
        return new Tone.AMSynth(options);
        break;
      default:
        return new Tone.Synth(options);
        break;
    }
  }
};
