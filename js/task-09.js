const refs = {
  body: document.querySelector("body"),
  changeColorBtn: document.querySelector(".change-color"),
  colorOutput: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", onChangeBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeBodyColor(event) {
  const color = getRandomHexColor();
  refs.body.style.background = color;
  refs.colorOutput.textContent = color;
}
