const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChanges);

function onInputChanges(event) {
  if (refs.input.value === "") refs.output.textContent = "Anonymous";
  else refs.output.textContent = event.currentTarget.value;
}
