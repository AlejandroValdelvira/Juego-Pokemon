const boton = document.getElementById("generarPokemon");
const intup = document.getElementById("i");
const div = document.getElementById("container");
const parrafoIndicacion = document.getElementById("parrafoIndicacion");
const textoinfo = document.getElementById("textoinfo");
let contador = 0;


sessionStorage.setItem("skipCount", 3);

let flag = false;
let data; //contenido de la api

boton.addEventListener("click", (event) => {
  if (flag == true) {
    //si ya se ha generado la imagen
    let tex = intup.value.toLowerCase();
    comprobar(tex);
  } else {
    //generar imagen si no hay
    consulta();
  }
});


function insertar(texto) {
  //insertar en el html el contenido de la api
  div.innerHTML = "";

  console.log(contador);

  const imagen = document.createElement("img");
  imagen.src = texto.sprites.front_default;
  div.append(imagen);

  const botonskip = document.createElement("button");
  botonskip.classList.add("boton");
  botonskip.textContent = "skip: " + sessionStorage.getItem("skipCount");
  botonskip.id = "botonskip";
  div.append(botonskip);
}

async function consulta() {
  flag = true; //activa la generacion de la imgen
  boton.textContent = "comprobar";
  let num = await Math.round(Math.random() * 151); //generar id, hasta el 151 (1 gen)
  let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
  data = await respuesta.json();

  insertar(data); // enviamos solo el texto de la actividad
}

function comprobar(nombre){
  if (nombre == data.name) {
    contador++;
    if(modoInfinto==true){
      textoinfo.innerText = `Modo infinito (${contador})`;
    }
    
    textoIndicacion(true);
    comprobarCheck(contador);

    if (contador == 10) {
      modoInfinto=true;
      textoinfo.innerText = `Modo infinito (${contador})`;
      modal.style.display = "block";
      return;
    }

    intup.value = "";

    consulta();
  } else {
    if (modoInfinto == true) {
      
      //informar de la puntacion y pedir el nombre para poner en el rankin
      miModalInfinito.style.display = "block";
      const puntacion = document.getElementById("puntuacion");
      puntacion.innerText += `${contador}`;
    return;
  }

  textoIndicacion(false);
    sessionStorage.setItem("skipCount", 3);
    limpiar();
    contador = 0;
}}

function limpiar() {
  modoInfinto = false;
  textoInfo.innerText = "adivina 10 pokemons";
  for (let i = 1; i < 11; i++) {
    let elemento = document.getElementById("m" + i.toString());
    if (elemento) {
      elemento.style.backgroundImage = "none";
    }
  }
  flag = false;
  intup.value = "";
  div.innerHTML = "";
  boton.textContent = "Genera un pokemon";
}

function textoIndicacion(indicacion) {
  if (indicacion) {
    //añadir clase y quitar al rato
    parrafoIndicacion.innerText = "Acierto!";
    parrafoIndicacion.classList.add("acierto");
    setTimeout(() => {
      parrafoIndicacion.classList.remove("acierto");
    }, 1000);
  } else {
    parrafoIndicacion.innerText = "Fallaste!";
    parrafoIndicacion.classList.add("fallo");
    setTimeout(() => {
      parrafoIndicacion.classList.remove("fallo");
    }, 1000);
  }
}

//accionar boton con el addEventListener
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    boton.click();
  }
});

div.addEventListener("click", (event) => {
  if (event.target && event.target.id === "botonskip") {
    if (sessionStorage.getItem("skipCount") > 0) {
      let count = sessionStorage.getItem("skipCount");
      sessionStorage.setItem("skipCount", --count);
      consulta();
    } else {
      alert("no te quedan skips");
    }
  }
})
;
