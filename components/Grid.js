function renderGrid() {
  removeChilds(grid);
  board.cells.forEach(note => {
    let pad_area = document.createElement("div");
    pad_area.className = `pad_area noselect ${
      note.selected ? "selected" : "not_selected"
    }`;
    pad_area.setAttribute("data-id", note.id);
    if (!note.pad) {
      pad_area.append(note.id);
    } else {
      pad_area.append(note.pad.note);
      pad_area.style.backgroundColor = note.pad.color;
    }
    pad_area.addEventListener("click", () => setSelectedPadArea(note.id));
    pad_area.addEventListener("auxclick", event =>
      removeNoteFromGrid(event, note.id)
    );
    pad_area.addEventListener(
      "contextmenu",
      event => changeNoteOptions(event, note.id),
      false
    );
    grid.appendChild(pad_area);
  });
}

function setSelectedPadArea(id) {
  board.setSelectedPadArea(id);
  renderGrid();
}

function changeNoteOptions(event, id) {
  event.preventDefault();
  let pad = board.cells[id].pad;
  console.trace(event, id, pad);
  if (!pad) {
    return false;
  }
  duration_field.value = pad.duration;
  duration_field.setAttribute("data-id", id);
}

function saveOptions() {
  let id = duration_field.getAttribute("data-id");
  if (!id) {
    return false;
  } else {
    board.cells[id].pad.duration = duration_field.value;
    duration_field.value = null;
  }
}

function removeNoteFromGrid(event, id) {
  if (event.button === 1) {
    let pad_area = board.cells.find(x => x.id === id);
    if (!pad_area.pad) {
      return;
    }
    pad_area.pad = undefined;
    renderGrid();
  }
}

function getNotes() {
  let sequence = [];
  const notes = board.cells.map(x => x.pad).filter(Boolean);
  notes.forEach(pad => {
    const { note, duration, time } = pad;
    sequence.push({ note: note, duration: duration, time: time });
  });
  return sequence;
}
