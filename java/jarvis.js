
// Variables para almacenar las selecciones y el total
let selectedPackages = [];
let selectedDestinations = [];
let selectedTransportation = [];
let total = 0;

// Función para agregar una selección al resumen
function addToSummary(item, category) {
    const summaryItems = document.getElementById('summary-items');
    const listItem = document.createElement('li');
    listItem.textContent = `${category}: ${item}`;
    summaryItems.appendChild(listItem);
}

// Función para actualizar el total y mostrarlo en el resumen
function updateTotal() {
    const totalElement = document.getElementById('summary-total');
    let total = 0; // Variable local para almacenar el nuevo total

    // Calcular el total según las selecciones de paquete
    selectedPackages.forEach((packageIndex) => {
        if (packageIndex === 1) {
            total += 10; // Paquete Económico
        } else if (packageIndex === 2) {
            total += 20; // Paquete Estándar
        } else if (packageIndex === 3) {
            total += 30; // Paquete Premium
        }
    });

    // Calcular el total según las selecciones de destino
    selectedDestinations.forEach((destinationIndex) => {
        if (destinationIndex === 1) {
            total += 15; // Cuba
        } else if (destinationIndex === 2) {
            total += 25; // Cancún
        } else if (destinationIndex === 3) {
            total += 35; // Bali
        } else if (destinationIndex === 4) {
            total += 45; // Canarias
        }
    });

    // Calcular el total según las selecciones de transporte
    selectedTransportation.forEach((transportationIndex) => {
        if (transportationIndex === 1) {
            total += 100; // Avión
        } else if (transportationIndex === 2) {
            total += 90; // Colectivo
        }
    });

    totalElement.textContent = `$${total}`; // Actualizar el elemento HTML con el nuevo total
}

// Función para seleccionar un paquete
function selectPackage(packageIndex) {
    selectedPackages = [packageIndex]; // Guardar el paquete seleccionado
    total = 10; // Establecer el total inicial para el paquete
    updateSummary(); // Actualizar el resumen
}

// Función para seleccionar un destino
function selectDestination(destinationIndex) {
    selectedDestinations = [destinationIndex]; // Guardar el destino seleccionado
    total = 10; // Establecer el total inicial para el destino
    updateSummary(); // Actualizar el resumen
}

// Función para seleccionar una opción de transporte
function selectTransportation(transportationIndex) {
    selectedTransportation = [transportationIndex]; // Guardar la opción de transporte seleccionada
    total = 10; // Establecer el total inicial para el transporte
    updateSummary(); // Actualizar el resumen
}

// Función para actualizar el resumen
function updateSummary() {
    const summaryItems = document.getElementById('summary-items');
    summaryItems.innerHTML = ''; // Limpiar el contenido actual del resumen

    // Agregar el paquete seleccionado al resumen
    if (selectedPackages.length > 0) {
        const packageName = document.getElementById(`package-${selectedPackages[0]}`).textContent;
        addToSummary(packageName, 'Paquete');
    }

    // Agregar los destinos seleccionados al resumen
    if (selectedDestinations.length > 0) {
        selectedDestinations.forEach((destinationIndex) => {
            const destinationName = document.getElementById(`destination-${destinationIndex}`).textContent;
            addToSummary(destinationName, 'Destino');
        });
    }

    // Agregar la opción de transporte seleccionada al resumen
    if (selectedTransportation.length > 0) {
        const transportationName = document.getElementById(`transportation-${selectedTransportation[0]}`).textContent;
        addToSummary(transportationName, 'Transporte');
    }

    updateTotal(); // Actualizar el total en el resumen
}



