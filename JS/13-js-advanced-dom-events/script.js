console.log("Hello, World!");

/*const input = document.querySelector("input");
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

const div = document.querySelector(".box");
div.addEventListener("click", (e) => {
  console.log();
});*/

//theme selector //

const THEME_KEY = "theme-mode"; //system" or dark or ligth
const themeSelect = document.getElementById("themeSelect");
const media = window.matchMedia("(prefers-color-scheme: dark)");

const getSavedMode = () => {
  return localStorage.getItem(THEME_KEY) || "system";
};

const setSavedMode = (mode) => {
  localStorage.setItem(THEME_KEY, mode);
};
const applyMode = (mode) => {
  document.body.classList.remove("dark", "light");

  if (mode === "dark") {
    document.body.classList.add("dark");
  } else if (mode === "light") {
    document.body.classList.add("light");
  }
};

const syncUI = (mode) => {
  themeSelect.value = mode;
};

//initialize/

let mode = getSavedMode();
applyMode(mode);
syncUI(mode);

//handle select change

themeSelect.addEventListener("change", (e) => {
  mode = e.target.value;
  setSavedMode(mode);
  applyMode(mode);
});

//react to system changes if mode === system //
media.addEventListener("change", () => {
  if (getSavedMode() === "system") {
    applyMode("system");
  }
});

const photos = [
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
    thumb: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300",
    alt: "Mountain at sunrise",
    caption: "Alpine Sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300",
    alt: "Ocean wave",
    caption: "Blue Wave",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200",
    thumb: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300",
    alt: "Forest path",
    caption: "Forest Path",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",
    thumb: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300",
    alt: "Laptop on desk",
    caption: "Workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    thumb: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300",
    alt: "City skyline",
    caption: "City Lights",
  },
];

const ThumbsEL = document.querySelector("#thumbs");
const mainImage = document.querySelector("#mainImage");
const captionEL = document.querySelector("#caption");
const topBtn = document.querySelector("#topBtn");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const closeLightBox = document.querySelector("#closeLightbox");

//render thumbnail
const renderThumbs = (items) => {
  const frag = document.createDocumentFragment();
  items.forEach((p, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<img 
    src="${p.thumb}" 
    alt="${p.alt}"
    loading="lazy" 
    decoding="async" 
    data-index="${i}" 
    tabindex="0" />`;
    frag.appendChild(li);
  });
  ThumbsEL.appendChild(frag);
};

renderThumbs(photos);

// helpers

const setMain = (index) => {
  const { src, alt, caption } = photos[index];
  mainImage.src = src;
  mainImage.alt = alt;
  captionEL.textContent = caption || alt;

  ThumbsEL.querySelectorAll("li").forEach((li) => classList.remove("active"));
  const activeLi = ThumbsEL.children[index];

  if (activeLi) activeLi.classList.add("active");

  mainImage.dataset.activeIndex = String(index);
};
setMain(0);

const clampIndex = (i) => {
  return (i + photos.length) % photos.length;
};

ThumbsEL.addEventListener("click", (e) => {
  const img = e.target.closest("img");
  if (!img) return;
  setMain(Number(img.dataset.index));
});

ThumbsEL.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const img = e.target.closest("img");
    if (img) setMain(Number(img.dataset.index));
  }
});

//keyboard navigation
document.addEventListener("keydown", (e) => {
  if (lightbox.open) return;
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    const current = Number(mainImage.dataset.activeIndex || 0);
    const next =
      e.key === "ArrowRight"
        ? clampIndex(current + 1)
        : clampIndex(current - 1);
    setMain(next);
    const activeThumb = ThumbsEL.querySelector(`img[data-index ="${next}"]`);
    if (activeThumb) activeThumb.focus();
  }
});

//light box modal
mainImage.addEventListener("click", () => {
  lightboxImage.src = mainImage.src;
  lightboxImage.alt = mainImage.alt;
  lightboxCaption.textContent = captionEL.textContent;
  lightbox.showModal();
});

closeLightBox.addEventListener("click", () => {
  lightbox.close();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.open) lightbox.close();
});

lightbox.addEventListener("click", (e) => {
  const clickedOutside = [
    lightboxImage,
    lightboxCaption,
    closeLightBox,
  ].includes(e.target);
  if (!clickedOutside) lightbox.close();
});

//back to top button
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
