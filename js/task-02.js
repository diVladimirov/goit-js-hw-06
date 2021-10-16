const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const liEl = ingredients.map((element) => {
  const liElement = document.createElement("li");
  liElement.textContent = element;
  liElement.classList.add("item");
  return liElement;
});

ingredientsEl.append(...liEl);
