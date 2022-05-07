export function darkMode(button, classDark) {
  const d = document,
    $button = d.getElementById("mode"),
    $style = d.getElementById("style"),
    ls = localStorage;

  let moon = "dark_mode",
    sun = "light_mode";

  function lightMode() {
    $style.href = "css/estilos.css";
    $button.innerHTML = moon;
    ls.setItem("themeUI", "light");
  }

  function darkMode() {
    $style.href = "css/dark.css";
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
