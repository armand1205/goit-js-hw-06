let counterValue = 0;
const valueElement = document.getElementById("value");

// Funcția de actualizare a valorii contorului și a interfeței:
function updateCounter(action) {
  if (action === "increment") {
    counterValue = counterValue + 1;
  } else if (action === "decrement") {
    counterValue = counterValue - 1;
  }
  valueElement.textContent = counterValue;
}

// Atașarea de handleri de evenimente la butoane:
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const action = button.getAttribute("data-action");
    updateCounter(action);
  });
});
