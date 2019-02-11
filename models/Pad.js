const Notes = [];

const BaseNotes = ["A", "B", "C", "D", "E", "F", "G"];

const createNotes = BaseNotes.map(value => {
  [1, 2, 3, 4, 5, 6].forEach(number => Notes.push(value + number));
  return Notes;
});

const COLORS = [
  "#028782",
  "#0e8c55",
  "#08918c",
  "#be0ddd",
  "#0b8454",
  "#0c8e6c",
  "#9b150d",
  "#d88f11",
  "#066d7c",
  "#a90fc4",
  "#b50701",
  "#00874e",
  "#c9490e",
  "#370277",
  "#778c02",
  "#045760",
  "#c10bc4",
  "#84031b",
  "#02307a",
  "#dd16cd",
  "#ce0cbb",
  "#097a43",
  "#c50ed6",
  "#130b7f",
  "#069e3b",
  "#a20ddd",
  "#0da312",
  "#e00690",
  "#010870",
  "#019913",
  "#004c70",
  "#eddb15",
  "#1f7500",
  "#c48b11",
  "#8b960d",
  "#03546b",
  "#0da817",
  "#10a887",
  "#d68b00",
  "#011e5b",
  "#560d89",
  "#270477",
  "#bc0074",
  "#932f07",
  "#067202",
  "#9e1b07",
  "#c46301",
  "#c413ac",
  "#db11c3",
  "#03197c",
  "#032382",
  "#01366b",
  "#0c8c24",
  "#094687"
];
const PAD_SIZE = Notes.length;

class Pad {
  constructor(id, note, duration, time, color) {
    this.id = id;
    this.note = note;
    this.duration = duration;
    this.time = time;
    this.color = color;
  }

  get getColor() {
    return this.color;
  }
}

class PadArea {
  constructor(id, selected = false, pad) {
    this.id = id;
    this.selected = selected;
    this.pad = pad;
  }

  get select() {
    return !!this.selected;
  }

  setSeleted() {
    this.selected = !this.selected;
  }
}

class Board {
  constructor(rows = 5, cols = 5, playing = false) {
    this.rows = rows;
    this.cols = cols;
    this.playing = playing;
    this.cells = createArray(this.size).map((pad, index) => new PadArea(index));
    this.pads = createArray(PAD_SIZE).map(
      (pad, index) => new Pad(index, Notes[index], "16n", "2n", COLORS[index])
    );
  }

  get size() {
    return this.rows * this.cols;
  }

  togglePlaying() {
    this.playing = !this.playing;
  }

  getPlaying() {
    return this.playing;
  }

  setSelectedPadArea(index) {
    this.cells[index].setSeleted();
  }
}
