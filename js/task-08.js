const loginForm = document.querySelector("form.login-form");

loginForm.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (!email || !password) {
    return alert("Все поля должны быть заполненны");
  }
  const formData = new FormData(event.currentTarget);
  const userData = {};
  formData.forEach((value, name) => {
    console.log(name, ":", value);
    userData[name] = value;
  });
  console.log(userData);
  console.log({ email, password });

  loginForm.reset();
}
