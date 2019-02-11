const createArray = length => Array.from(new Array(length));

const removeChilds = node => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

const disableMouseWheel = () => {
  document.body.onmousedown = event => {
    if (event.button === 1) return false;
  };
};

function point(x, y, size, canvas) {
  canvas.fillRect(x, y, size, size);
}

function pick(array) {
  if (array.length === 0) return undefined;
  return array[Math.floor(Math.random() * array.length)];
}
