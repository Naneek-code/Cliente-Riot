const UserPss = document.getElementById("user_pss");
const UserLogin = document.getElementById("user_id");
const loginOn = document.querySelector(".login_btn");
const login = document.getElementById("form_login");
const clientButtons = document.querySelector(".btns_client");
const riotInk = document.querySelector(".RIOT");
const riotClient = document.querySelector(".RiotClient");

function toggleClientState() {
  if (riotClient.classList.contains("closed")) {
    riotClient.classList.remove("closed");
  } else {
    riotClient.classList.add("closed");
  }
}

function toggleLoginButtonState() {
  if (UserPss.value !== "" && UserLogin.value.trim() !== "") {
    loginOn.classList.add("active");
  } else {
    loginOn.classList.remove("active");
  }
}

form_login.addEventListener("submit", (e) => {
  e.preventDefault();
});

if (UserPss && UserLogin) {
  UserPss.addEventListener("input", toggleLoginButtonState);
  UserLogin.addEventListener("input", toggleLoginButtonState);
}

riotInk.addEventListener("dblclick", toggleClientState);
clientButtons.addEventListener("click", toggleClientState);
