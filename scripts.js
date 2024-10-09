// Función para simular la obtención de datos del Modelo Asesor del Sistema (SAM)
document.getElementById('samBtn').addEventListener('click', function() {
    document.getElementById('samData').innerHTML = "<p>Predicción de rendimiento: 85%<br>Estimación de costos: $120,000</p>";
});

// Función para simular la obtención de datos de Dewesoft
document.getElementById('dewesoftBtn').addEventListener('click', function() {
    document.getElementById('dewesoftData').innerHTML = "<p>Estado de la turbina: Estable<br>Vibración estructural: 3.2 m/s²</p>";
});

// Simulación de condiciones de viento con un gráfico en canvas
document.getElementById('explorerBtn').addEventListener('click', function() {
    const canvas = document.getElementById('windCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 500;
    canvas.height = 300;

    // Inicializamos variables para la simulación de viento
    let windSpeed = 10;
    let time = 0;
    
    function drawWindSimulation() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0077b6";
        
        // Dibujar la velocidad del viento
        windSpeed = Math.random() * 30 + 10;  // Velocidad de viento entre 10 y 40 km/h
        ctx.font = "20px Arial";
        ctx.fillText("Velocidad del viento: " + windSpeed.toFixed(2) + " km/h", 10, 50);
        
        // Dibujar una barra que representa la velocidad del viento
        ctx.fillStyle = "#00b4d8";
        ctx.fillRect(50, 100, windSpeed * 10, 50);  // Longitud proporcional a la velocidad
        
        // Actualizamos el tiempo
        time += 1;
    }
    
    // Actualizar la simulación cada 1 segundo
    setInterval(drawWindSimulation, 1000);
});
