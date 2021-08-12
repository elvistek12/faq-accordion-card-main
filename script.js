let pregunta = document.querySelectorAll(".pregunta");
let caja = document.querySelector(".caja");

pregunta.forEach((objeto) => {
  objeto.addEventListener("click", () => {
    objeto.classList.toggle("activa");
    objeto.nextElementSibling.classList.toggle("volteada");
    objeto.nextElementSibling.nextElementSibling.classList.toggle("visible");
  });
});