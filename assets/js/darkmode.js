const DARK_STRING = "dark";
const LIGHT_STRING = "light";

let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: " + DARK_STRING + ")");
let theme = sessionStorage.getItem("theme");
let button = document.getElementById("theme-toggle");

if (systemInitiatedDark.matches) {
  button.innerHTML = sunSvg();
} else {
  button.innerHTML = moonSvg();
}

function prefersColorTest(systemInitiatedDark) {
  let button = document.getElementById("theme-toggle");
  if (systemInitiatedDark.matches) {
    setDarkDataTheme();
    button.innerHTML = sunSvg();
    setSessionStorageEmpty();
  } else {
    setLightDataTheme()
    button.innerHTML = moonSvg();
    setSessionStorageEmpty();
  }
}
systemInitiatedDark.addEventListener("change", function (event) {
  prefersColorTest(event.target);
});

function modeSwitcher() {
  let button = document.getElementById("theme-toggle");
  let theme = sessionStorage.getItem("theme");
  if (theme === DARK_STRING) {
    setLightDataTheme()
    setSessionStorageLight();
    button.innerHTML = moonSvg();
  } else if (theme === LIGHT_STRING) {
    setDarkDataTheme();
    setSessionStorageDark();
    button.innerHTML = sunSvg();
  } else if (systemInitiatedDark.matches) {
    setLightDataTheme()
    setSessionStorageLight();
    button.innerHTML = moonSvg();
  } else {
    setDarkDataTheme();
    setSessionStorageDark();
    button.innerHTML = sunSvg();
  }
}

function setDarkDataTheme() {
  document.documentElement.setAttribute("data-theme", DARK_STRING);
}

function setLightDataTheme() {
  document.documentElement.setAttribute("data-theme", LIGHT_STRING);
}

function setSessionStorageLight() {
  sessionStorage.setItem("theme", LIGHT_STRING);
}

function setSessionStorageDark() {
  sessionStorage.setItem("theme", DARK_STRING);
}

function setSessionStorageEmpty() {
  sessionStorage.setItem("theme", "");
}

function moonSvg() {
  return '<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
}

function sunSvg() {
  return '<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
}

if (theme === DARK_STRING) {
  setDarkDataTheme();
  setSessionStorageDark();
  button.innerHTML = sunSvg();
} else if (theme === LIGHT_STRING) {
  setLightDataTheme()
  setSessionStorageLight();
  button.innerHTML = moonSvg();
}
