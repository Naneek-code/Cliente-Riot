const UserPss = document.getElementById("user_pss");
const UserLogin = document.getElementById("user_id");
const loginOn = document.querySelector(".login_btn");
const login = document.getElementById("form_login");

login.addEventListener("input", () => {
  if (UserPss.value != "" && UserLogin.value != "") {
    loginOn.classList.add("active");
  } else {
    loginOn.classList.remove("active");
  }
});
