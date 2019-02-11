describe("Pad Class", () => {
  it("Properties test", () => {
    const pad = new Pad(1, "A#", 0.5, 0.5, "#FF00CC");
    expect(pad.getColor).toEqual("#FF00CC");
  });
});

describe("PadArea Class", () => {
  it("behaviour of pad area select", () => {
    const pad = new Pad(1, "A#", 0.5, 0.5, "#FF00CC");
    const pad_area = new PadArea(1, false, pad);

    pad_area.setSeleted();
    expect(pad_area.select).toEqual(true);
  });
});

describe("Board Class", () => {
  it("Create board", () => {
    const board = new Board(6, 6, false);
    expect(board.size).toEqual(board.rows * board.cols);
    expect(board.cells.length).toEqual(board.size);
    expect(board.pads.length).toEqual(PAD_SIZE);

    let index = 0;
    board.setSelectedPadArea(index);
    expect(board.cells[index].select).toEqual(true);
  });
});
