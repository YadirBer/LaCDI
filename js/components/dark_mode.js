export function darkMode(button, classDark) {
  const d = document,
    $button = d.querySelector(button),
    $style = d.getElementById("style"),
    ls = localStorage;

  let moon = "dark_mode",
    sun = "light_mode",
    dark = classDark.slice(1);

  function lightMode() {
    $style.classList.remove(dark);
    $button.innerHTML = moon;
    ls.setItem("themeUI", "light");
  }

  function darkMode() {
    $style.classList.add(dark);
    $button.innerHTML = sun;
    ls.setItem("themeUI", "dark");
  }

  $button.addEventListener("click", (e) =>
    e.target.innerHTML === moon ? darkMode() : lightMode()
  );

  //console.log(e.target.innerHTML);
  if (ls.getItem("themeUI") === null) ls.setItem("themeUI", "light");
  else if (ls.getItem("themeUI") === "light") lightMode();
  else if (ls.getItem("themeUI") === "dark") darkMode();
}
