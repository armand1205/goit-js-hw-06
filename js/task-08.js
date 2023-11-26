const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const dataForm = {};

  const elementsForm = this.elements;

  for (let element of elementsForm) {
    if (element.type !== "submit") {
      if (element.value.trim() === "") {
        alert("Toate câmpurile trebuie completate");
        return;
      }

      dataForm[element.name] = element.value;
    }
  }

  console.log(dataForm);

  this.reset();
});
