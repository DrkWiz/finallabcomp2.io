// Variables para almacenar las selecciones y el total
let selectedPackages = []; // Almacena los índices de los paquetes seleccionados
let selectedDestinations = []; // Almacena los índices de los destinos seleccionados
let selectedTransportation = []; // Almacena los índices de las opciones de transporte seleccionadas
let total = 0; // Almacena el total

// Función para agregar una selección al resumen
function addToSummary(item, category) {
    const summaryItems = document.getElementById('summary-items'); // Obtiene el elemento del resumen
    const listItem = document.createElement('li'); // Crea un nuevo elemento de lista
    listItem.textContent = `${category}: ${item}`; // Establece el texto del elemento de lista con la categoría y el elemento seleccionado
    summaryItems.appendChild(listItem); // Agrega el elemento de lista al resumen
}

// Función para actualizar el total y mostrarlo en el resumen
function updateTotal() {
    const totalElement = document.getElementById('summary-total'); // Obtiene el elemento del total en el resumen
    let total = 0; // Variable local para almacenar el nuevo total

    // Calcular el total según las selecciones de paquete
    selectedPackages.forEach((packageIndex) => {
        if (packageIndex === 1) {
            total += 10; // Suma $10 al total por el Paquete Económico
        } else if (packageIndex === 2) {
            total += 20; // Suma $20 al total por el Paquete Estándar
        } else if (packageIndex === 3) {
            total += 30; // Suma $30 al total por el Paquete Premium
        }
    });

    // Calcular el total según las selecciones de destino
    selectedDestinations.forEach((destinationIndex) => {
        if (destinationIndex === 1) {
            total += 15; // Suma $15 al total por Cuba como destino
        } else if (destinationIndex === 2) {
            total += 25; // Suma $25 al total por Cancún como destino
        } else if (destinationIndex === 3) {
            total += 35; // Suma $35 al total por Bali como destino
        } else if (destinationIndex === 4) {
            total += 45; // Suma $45 al total por Canarias como destino
        }
    });

    // Calcular el total según las selecciones de transporte
    selectedTransportation.forEach((transportationIndex) => {
        if (transportationIndex === 1) {
            total += 100; // Suma $100 al total por la opción de Avión como transporte
        } else if (transportationIndex === 2) {
            total += 90; // Suma $90 al total por la opción de Colectivo como transporte
        }
    });

    totalElement.textContent = `$${total}`; // Actualizar el elemento HTML con el nuevo total
}

// Función para seleccionar un paquete
function selectPackage(packageIndex) {
    selectedPackages = [packageIndex]; // Guardar el índice del paquete seleccionado en el arreglo de selecciones de paquete
    total = 10; // Establecer el total inicial en $10 para el paquete
    updateSummary(); // Actualizar el resumen
}

// Función para seleccionar un destino
function selectDestination(destinationIndex) {
    selectedDestinations = [destinationIndex]; // Guardar el índice del destino seleccionado en el arreglo de selecciones de destino
    total = 10; // Establecer el total inicial en $10 para el destino
    updateSummary(); // Actualizar el resumen
}

// Función para seleccionar una opción de transporte
function selectTransportation(transportationIndex) {
    selectedTransportation = [transportationIndex]; // Guardar el índice de la opción de transporte seleccionada en el arreglo de selecciones de transporte
    total = 10; // Establecer el total inicial en $10 para la opción de transporte
    updateSummary(); // Actualizar el resumen
}

// Función para actualizar el resumen
function updateSummary() {
    const summaryItems = document.getElementById('summary-items'); // Obtiene el elemento del resumen
    summaryItems.innerHTML = ''; // Limpiar el contenido actual del resumen

    // Agregar el paquete seleccionado al resumen
    if (selectedPackages.length > 0) {
        const packageName = document.getElementById(`package-${selectedPackages[0]}`).textContent; // Obtiene el nombre del paquete seleccionado
        addToSummary(packageName, 'Paquete'); // Agrega el nombre del paquete al resumen
    }

    // Agregar los destinos seleccionados al resumen
    if (selectedDestinations.length > 0) {
        selectedDestinations.forEach((destinationIndex) => {
            const destinationName = document.getElementById(`destination-${destinationIndex}`).textContent; // Obtiene el nombre del destino seleccionado
            addToSummary(destinationName, 'Destino'); // Agrega el nombre del destino al resumen
        });
    }

    // Agregar la opción de transporte seleccionada al resumen
    if (selectedTransportation.length > 0) {
        const transportationName = document.getElementById(`transportation-${selectedTransportation[0]}`).textContent; // Obtiene el nombre de la opción de transporte seleccionada
        addToSummary(transportationName, 'Transporte'); // Agrega el nombre de la opción de transporte al resumen
    }

    updateTotal(); // Actualizar el total en el resumen
}
