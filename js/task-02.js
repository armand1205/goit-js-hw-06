const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const containerEl = document.getElementById("ingredients");

ingredients.forEach((element) => {
  const listEl = document.createElement("li");
  listEl.textContent = element;
  listEl.classList.add("item");
  containerEl.append(listEl);
});
