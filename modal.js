const modal = document.getElementById("miModal");
const cerrarBtn = document.getElementById("cerrarBtn");
const botonInfinito = document.getElementById("modoInfinito");
let modoInfinto = false;
const textoInfo = document.getElementById("textoinfo");
// Cerrar modal con el botón
cerrarBtn.onclick = function () {
  modal.style.display = "none";
  limpiar();
  contador = 0;
};

botonInfinito.onclick = function () {
  modoInfinto = true;
  consulta();
  intup.value = "";
  
  modal.style.display = "none";
};

//Modal infinito

//const miModalInfinito = document.getElementById("miModalInfinito");


document
  .getElementById("formPuntuacion")
  .addEventListener("submit",  function (e) {
    e.preventDefault();
    miModalInfinito.style.display = "none";
    const nombre = this.nombre.value;
    const puntuacion = contador;

      fetch("insertar.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `nombre=${encodeURIComponent(nombre)}&puntuacion=${puntuacion}`,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Guardado:", data);
        alert("Puntuación guardada!");
        location.reload(); //recargar la pagina lo ultimo para reiniciar
      });
  });

