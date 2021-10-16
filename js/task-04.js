let counterValue = 0;

const decrementRef = document.querySelector('button[data-action="decrement"]');
decrementRef.addEventListener("click", () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
});

const incrementRef = document.querySelector('button[data-action="increment"]');
incrementRef.addEventListener("click", () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
});
