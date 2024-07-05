    // Función para generar la fecha aleatoria
    function generarFechaAleatoria() {
        // Crear un objeto de fecha aleatoria entre 1970 y 2023
        var randomYear = Math.floor(Math.random() * (2024 - 2023 + 1)) + 2023;
        var randomMonth = Math.floor(Math.random() * 12) + 1; // Mes de 1 a 12
        var randomDay = Math.floor(Math.random() * 28) + 1; // Día de 1 a 28 (considerando febrero)
    
        // Formatear la fecha como 'YYYY-MM-DD'
        var formattedDate = randomYear + '-' + (randomMonth < 10 ? '0' + randomMonth : randomMonth) + '-' + (randomDay < 10 ? '0' + randomDay : randomDay);
    
        // Asignar la fecha al campo de texto
        document.getElementById('randomDate').value = formattedDate;
    }