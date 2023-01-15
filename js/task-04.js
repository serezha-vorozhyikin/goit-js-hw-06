const buttonDecrement = document.querySelector(
  'button[data-action = "decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action = "increment"]'
);
let counter = document.querySelector("#value");
let counterValue = 0;

buttonDecrement.addEventListener("click", onDecrement);
buttonIncrement.addEventListener("click", onIncrement);

function onDecrement() {
  counterValue -= 1;
  return (counter.textContent = counterValue);
}

function onIncrement() {
  counterValue += 1;
  return (counter.textContent = counterValue);
}
