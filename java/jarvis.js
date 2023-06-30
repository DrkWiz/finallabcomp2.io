// Variables para almacenar las selecciones y el total
let selectedPackages = []; // Almacena los índices de los paquetes seleccionados
let selectedDestinations = []; // Almacena los índices de los destinos seleccionados
let selectedTransportation = []; // Almacena los índices de las opciones de transporte seleccionadas
let total = 0; // Almacena el total

// Función para seleccionar un paquete
function selectPackage(packageIndex) {
    selectedPackages = [packageIndex]; // Guardar el índice del paquete seleccionado en el arreglo de selecciones de paquete
    total = 10; // Establecer el total inicial en $10 para el paquete
    updateSummary(); // Actualizar el resumen
}//La función "selectPackage" se utiliza para seleccionar un paquete específico dentro de un sistema. 
//Toma como argumento el índice del paquete que se desea seleccionar y lo guarda en un arreglo llamado "selectedPackages". 
//Además, establece un valor inicial de $10 para el total del paquete seleccionado y luego llama a la función "updateSummary" 
//para actualizar el resumen.


// Función para seleccionar un destino
function selectDestination(destinationIndex) {
    selectedDestinations = [destinationIndex]; // Guardar el índice del destino seleccionado en el arreglo de selecciones de destino
    total = 10; // Establecer el total inicial en $10 para el destino
    updateSummary(); // Actualizar el resumen
}//Esta función se encarga de seleccionar un destino a partir de un índice dado. El índice del destino seleccionado 
//se guarda en un arreglo llamado "selectedDestinations". Además, se establece un total inicial de $10 para ese destino. 
//Luego, se llama a la función "updateSummary()" para actualizar el resumen.


// Función para seleccionar una opción de transporte
function selectTransportation(transportationIndex) {
    selectedTransportation = [transportationIndex]; // Guardar el índice de la opción de transporte seleccionada en el arreglo de selecciones de transporte
    total = 10; // Establecer el total inicial en $10 para la opción de transporte
    updateSummary(); // Actualizar el resumen
}//La función "selectTransportation" se utiliza para seleccionar una opción de transporte. Toma como argumento el índice de la opción 
//de transporte seleccionada y guarda este índice en una variable llamada "selectedTransportation". Además, establece el total inicial 
//en $10 para la opción de transporte seleccionada y luego llama a la función "updateSummary" para actualizar el resumen.


// Función para agregar una selección al resumen
function addToSummary(item, category) {
    const summaryItems = document.getElementById('summary-items'); // Obtiene el elemento del resumen
    const listItem = document.createElement('li'); // Crea un nuevo elemento de lista
    listItem.textContent = `${category}: ${item}`; // Establece el texto del elemento de lista con la categoría y el elemento seleccionado
    summaryItems.appendChild(listItem); // Agrega el elemento de lista al resumen appendChild es un método 
                                        //en JavaScript que se utiliza para agregar un nodo como hijo de otro nodo existente en el 
                                        //árbol DOM (Document Object Model). Se puede utilizar para agregar elementos HTML, como elementos 
                                       // de lista, párrafos, imágenes, etc., como hijos de otros elementos existentes en el documento HTML.
}
//La función "updateTotal" se utiliza para actualizar el valor total y mostrarlo en el resumen. Primero, se obtiene el elemento del total en el resumen mediante su ID. Luego, se crea una variable local llamada "total" para almacenar el nuevo valor total. 
// A continuación, se calcula el total según las selecciones de paquete. Se recorre el array "selectedPackages" y se suma una cantidad específica al total dependiendo del índice del paquete seleccionado. 
// Después, se calcula el total según las selecciones de destino. Se recorre el array "selectedDestinations" y se suma una cantidad específica al total dependiendo del índice del destino seleccionado. 
// Finalmente, se calcula el total según las selecciones de transporte. Se recorre el array "selectedTransportation" y se suma una cantidad específica al total dependiendo del índice del transporte seleccionado. 
// Una vez calculado el nuevo total, se actualiza el elemento HTML con el valor correspondiente utilizando la propiedad "textContent" del elemento. 

//Función para actualizar el resumen
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
} //Esta función actualiza el resumen de la selección realizada en la página. Primero, obtiene el elemento del resumen y lo limpia. Luego, agrega el paquete seleccionado al resumen, si hay alguno. Después, agrega los destinos seleccionados al resumen, si los hay. Por último, agrega la opción de transporte seleccionada al resumen, si hay alguna. Luego, llama a la función updateTotal() para actualizar el total en el resumen.

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
}//La función "updateTotal" se utiliza para actualizar el valor total y mostrarlo en el resumen. Primero, se obtiene el elemento del total en el resumen mediante su ID. Luego, se crea una variable local llamada "total" para almacenar el nuevo valor total. 
// A continuación, se calcula el total según las selecciones de paquete. Se recorre el array "selectedPackages" y se suma una cantidad específica al total dependiendo del índice del paquete seleccionado. 
// Después, se calcula el total según las selecciones de destino. Se recorre el array "selectedDestinations" y se suma una cantidad específica al total dependiendo del índice del destino seleccionado. 
// Finalmente, se calcula el total según las selecciones de transporte. Se recorre el array "selectedTransportation" y se suma una cantidad específica al total dependiendo del índice del transporte seleccionado. 
// Una vez calculado el nuevo total, se actualiza el elemento HTML con el valor correspondiente utilizando la propiedad "textContent" del elemento. 
// Por favor, avísame si tienes alguna pregunta adicional.


