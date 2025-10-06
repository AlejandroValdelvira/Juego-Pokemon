async function actualizarRanking() {
    try {
        const res = await fetch('getRanking.php');
        const data = await res.json();

        const ul = document.getElementById('rankingList');
        ul.innerHTML = ''; // Limpiar lista

        data.forEach((jugador, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${jugador.nombre} - ${jugador.puntuacion}`;
            if (index === 0) li.classList.add("first");
            else if (index === 1) li.classList.add("second");
            else if (index === 2) li.classList.add("third");
            ul.appendChild(li);
        });

    } catch (error) {
        console.error("Error al cargar el ranking:", error);
    }
}

// Actualiza cada 5 segundos
setInterval(actualizarRanking, 5000);

// Cargar al inicio
actualizarRanking();