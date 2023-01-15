const input = document.querySelector("#validation-input");
const lengthOfInput = document.querySelector("#validation-input[data-length]");

input.addEventListener("blur", onCheckAmountOfSymbols);

function changeClass(elem, remove, add) {
  elem.classList.remove(remove);
  elem.classList.add(add);
}

function onCheckAmountOfSymbols(event) {
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    changeClass(input, "invalid", "valid");
  } else {
    changeClass(input, "valid", "invalid");
  }
}
