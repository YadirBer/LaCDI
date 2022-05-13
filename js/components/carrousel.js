export function carrousel() {
  const d = document,
    grande = d.querySelector(".grande"),
    punto = d.querySelectorAll(".punto");

  punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener("click", () => {
      let posicion = i,
        operacion = posicion * -33.3;

      grande.style.transform = `translateX(${operacion}%)`;

      punto.forEach((cadaPunto, i) => {
        punto[i].classList.remove("activo");
      });
      punto[i].classList.add("activo");
    });
  });
}
