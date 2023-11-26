function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  const boxesDiv = document.getElementById("boxes");
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
    boxSize += 10;
  }
}

function createBoxesHandler() {
  const inputNumber = document.querySelector("input");
  const amount = inputNumber.value;
  createBoxes(amount);
}

function destroyBoxes() {
  const boxesDiv = document.getElementById("boxes");
  while (boxesDiv.firstChild) {
    boxesDiv.firstChild.remove();
  }
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
createButton.addEventListener("click", createBoxesHandler);
destroyButton.addEventListener("click", destroyBoxes);
