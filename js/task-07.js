const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

input.addEventListener("input", onChangeFontsize);

function onChangeFontsize(event) {
  output.style.fontSize = `${event.currentTarget.value}px`;
}
