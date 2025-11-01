console.log("Hello Wanderer");

let darkmode = localStorage.getItem(`darkmode`);
const themeSwitch = document.getElementById(`theme-switch`);

const enableDarkmode = () => {
  document.body.classList.add(`darkmode`);
  localStorage.setItem(`darkmode`, `active`);
};

const disableDarkmode = () => {
  document.body.classList.remove(`darkmode`);
  localStorage.setItem(`darkmode`, null);
};

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  if (darkmode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});

const BackToTop = document.getElementById("BackToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    BackToTop.classList.add("show");
  } else {
    BackToTop.classList.remove("show");
  }
});

BackToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  BackToTop.classList.remove("show");
});
