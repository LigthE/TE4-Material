console.log("Hello Wanderer");

/* låt darkmode lägga darkmode text i localstorage
konstant themeswitch 
kör konstant eneabledarkmode lägg till darkmode i local storage
om aktiv

const disabledarkmode den tar bort darkmode från localstorage
och lägger null vilket står för none
osen themeswitch.acceventlistener när klikas om darkmode inte aktive 
då aktivera darkmode annars ta bort darkmode*/

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
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

/*när det klikas på darkmode knappen om darkmode är inte aktive  då aktiveras det darkmode
annars det deaktiveras och darkmode getitem visar darkmode som text inne i localstorage
för att stora info där*/

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  if (darkmode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});

/*när scrollas mer än 200px back to top button visas annars t.ex inte kommit till 200px den visas inte
men add hämtar knappen gör den synlig och remove visar den inte den visar inte om du har tryckt på 
knappen eller om du inte har scrollat 200px neråt*/

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

/* när scrollas så körs det reveal och om det scrollas ner 
så körs active reveal*/

window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
});
