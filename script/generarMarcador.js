const marcador = document.getElementById("marcador");

//generar marcas
for (let i = 0; i < 10; i++) {
  let elemento = document.createElement("div");
  elemento.classList.add("marca");
  elemento.id = "m" + (i + 1);
  marcador.append(elemento);
}

//
function comprobarCheck(num) {
  for (let i = 1; i <= num; i++) {
    // de 1 a num
    let elemento = document.getElementById("m" + i.toString());
    if (elemento) {
      elemento.style.backgroundImage = "url('check.png')";
      elemento.style.backgroundSize = "cover";
    }
  }
}
