const elemento = document.getElementById("element-animar");

setTimeout(function () {
  elemento.style.opacity = 1;
  elemento.style.transform = "scale(1)";
}, 1000); // Espera 500 ms antes de aplicar la animación
