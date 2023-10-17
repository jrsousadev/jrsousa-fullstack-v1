
function handleSwitchValue(value) {
  if (value) {
    localStorage.setItem("theme-color", "dark");
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
  }
  else {
    localStorage.setItem("theme-color", "light");
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.remove("dark");
  }
}

export default handleSwitchValue;

