function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsElement = document.querySelector("#controls");
const boxesAll = document.querySelector("#boxes");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const inputElement = document.querySelector("input");
let size = 30;

buttonCreate.addEventListener("click", () => {
  console.log(inputElement.value);
  createBoxes(inputElement.value);
  inputElement.value = "";
});

buttonDestroy.addEventListener("click", () => {
  boxesAll.innerHTML = "";
  size = 30;
});

controlsElement.addEventListener("change", (event) => {
  let inputAsNumber = event.target.valueAsNumber;
});

function createBoxes(amount) {
  const divAllElement = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const divElement = document.createElement("div");
    divElement.style.height = `${size}px`;
    divElement.style.width = `${size}px`;
    divElement.classList = "item";
    divElement.style.backgroundColor = getRandomHexColor();
    console.log("divElement", divElement);
    boxesAll.appendChild(divElement);
  }
  console.log("divAllElement", divAllElement);
  boxesAll.append(...divAllElement);
}
