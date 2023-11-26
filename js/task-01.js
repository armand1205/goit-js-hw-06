const categoriesList = document.getElementById("categories");

const categories = categoriesList.getElementsByClassName("item");

console.log(`Number of categories: ${categories.length}`);

for (let i = 0; i < categories.length; i = i + 1) {
  const category = categories[i];
  const categoryName = category.getElementsByTagName("h2")[0].innerText;
  const elements = category.getElementsByTagName("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements.length}`);
}
