const refs = {
  inputRange: document.querySelector("#font-size-control"),
  textSize: document.querySelector("#text"),
};

refs.inputRange.addEventListener("input", onInputChanges);

function onInputChanges(event) {
  refs.textSize.style.fontSize = `${event.currentTarget.value}px`;
}
