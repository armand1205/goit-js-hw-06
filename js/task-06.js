const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function () {
  const lengthValue = this.getAttribute("data-length");

  if (this.value.length === parseInt(lengthValue)) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
});
