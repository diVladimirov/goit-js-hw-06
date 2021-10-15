const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const liEl = ingredients.map((el) => {
  const element = document.createElement("li");
  element.textContent = el;
  element.classList.add("item");
  return element;
});

ingredientsEl.append(...liEl);
