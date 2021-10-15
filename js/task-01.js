const quantityCategoriesItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${quantityCategoriesItemEl.length}`);

quantityCategoriesItemEl.forEach((item) => {
  const categoryEl = item.querySelector("h2");
  const elementEl = item.querySelector("ul");
  const itemOfElementEl = elementEl.querySelectorAll("li");
  console.log(`Category: ${categoryEl.textContent}`);
  console.log(`Elements: ${itemOfElementEl.length}`);
});
