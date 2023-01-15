const form = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};
form.input.addEventListener("input", onInput);

function onInput(event) {
  form.nameLabel.textContent = event.currentTarget.value;
  //   console.dir(event.currentTarget.value);
  if (form.nameLabel.textContent.length === 0) {
    form.nameLabel.textContent = "Anonymous";
  }
}
