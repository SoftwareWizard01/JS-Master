let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();
  document.querySelector("#emailerror").textContent = "";
  document.querySelector("#passworderror").textContent = "";

  const emregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const pwdregex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emans = emregex.test(email.value);
  let pwdans = pwdregex.test(password.value);

  if (!emans) {
    document.querySelector(".emailerror").textContent = "Email is incorrect";
    document.querySelector(".emailerror").style.display = "initial";
  }

  if (!pwdans) {
    document.querySelector(".passworderror").textContent =
      "Password is invalid";
    document.querySelector(".passworderror").style.display = "initial";
  }
});
