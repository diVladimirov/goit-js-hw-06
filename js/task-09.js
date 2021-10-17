function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", () => {
  let color = getRandomHexColor();
  refs.span.textContent = color;
  document.body.style.backgroundColor = color;
});
