function renderPads() {
  removeChilds(pad_list);
  board.pads.forEach(pad => {
    let pad_item = document.createElement("div");
    pad_item.className = "pad_item pad noselect";
    pad_item.style.backgroundColor = pad.getColor;
    pad_item.append(pad.note);
    pad_item.addEventListener("click", () => addNoteIntoGrid(pad));
    pad_list.appendChild(pad_item);
  });
}

function addNoteIntoGrid(note) {
  let selected_pad_areas = board.cells.filter(x => x.selected == true);
  triggerSynth(note.note, note.duration)
  if (!selected_pad_areas) {
    return;
  }
  selected_pad_areas.forEach(pad_area => {
    pad_area.pad = Object.assign({}, note);
    pad_area.pad.time = pad_area.id;
    pad_area.selected = false;
  });
  renderGrid({ cells: board.cells });
}
