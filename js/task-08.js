const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const formData = { email: email.value, password: password.value };

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены");
  }
  event.currentTarget.reset();
}
