describe("Testing the synth object models", () => {
  it("SynthTypes objects must contain envelope and oscillator properties", () => {
    var genericKeys = ["oscillator", "envelope"];

    var Synth = Object.keys(SynthTypes.Synth);
    var MonoSynth = Object.keys(SynthTypes.MonoSynth);
    var AMSynth = Object.keys(SynthTypes.AMSynth);
    var FMSynth = Object.keys(SynthTypes.FMSynth);

    expect(Synth).toEqual(genericKeys);
    expect(MonoSynth).toEqual(jasmine.arrayContaining(genericKeys));
    expect(AMSynth).toEqual(jasmine.arrayContaining(genericKeys));
    expect(FMSynth).toEqual(jasmine.arrayContaining(genericKeys));
  });

  it("Synth generator", () => {
    var options = { ...SynthTypes.Synth, ...options };

    var Synth = SynthFactory.create(options, "Synth");
    var MonoSynth = SynthFactory.create(options, "MonoSynth");
    var AMSynth = SynthFactory.create(options, "AMSynth");
    var FMSynth = SynthFactory.create(options, "FMSynth");

    var defaultSynth = SynthFactory.create(options, "wrongType");

    expect(Synth.toString()).toEqual("Synth");
    expect(MonoSynth.toString()).toEqual("MonoSynth");
    expect(AMSynth.toString()).toEqual("AMSynth");
    expect(FMSynth.toString()).toEqual("FMSynth");

    expect(defaultSynth.toString()).toEqual("Synth");
  });
});
