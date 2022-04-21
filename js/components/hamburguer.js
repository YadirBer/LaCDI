export function hamburgerMenu(menu, button) {
  const d = document,
    $button = d.querySelector(button),
    $menu = d.querySelector(menu);

  $button.addEventListener("click", (e) => {
    //alert("funciona");
    $button.classList.toggle("is-active");
    $menu.classList.toggle("is-active");
  });
}
