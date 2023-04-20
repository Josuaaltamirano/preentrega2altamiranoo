// Pedimos al usuario que ingrese dos fechas a través de un prompt
const fecha1 = new Date(prompt("Por favor, introduce una fecha en formato dd/mm/yyyy:"));
const fecha2 = new Date(prompt("Por favor, introduce otra fecha en formato dd/mm/yyyy:"));

// Variable global
let nombreGlobal = "josua";

// Función que utiliza una variable local y un prompt
function saludar() {
  // Variable local
  let nombreLocal = prompt("Por favor, introduce tu nombre:");
  alert("Hola, " + nombreLocal + ". Mi nombre es " + nombreGlobal + ".");
}

// Invocamos a la función para que se ejecute
saludar();

// Pedimos al usuario que ingrese un número del 1 al 10 a través de un prompt
let cantidad = parseInt(prompt("Por favor, introduce un número del 1 al 10:"));

// Verificamos si el valor ingresado es un número válido y está entre 1 y 10
if (isNaN(cantidad) || cantidad < 1 || cantidad > 10) {
  alert("Por favor, introduce un número válido del 1 al 10.");
} else {
  // Si el valor ingresado es válido, ejecutamos el ciclo para mostrar "Hola" la cantidad de veces indicada
  for (let i = 1; i <= cantidad; i++) {
    console.log("Hola, gracias por estar aquí y espero no esté tan mal hecho :)");
  }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

console.log(numerosPares); // muestra [2, 4, 6, 8, 10]

const fechas = [
  new Date("2022-01-01"),
  new Date("2022-02-14"),
  new Date("2022-03-08"),
  new Date("2022-04-22"),
  new Date("2022-05-01"),
  new Date("2022-06-21")
];

const diferenciaEnDias = calcularDiferenciaEnDias(fechas);

console.log(`La diferencia entre la primera y la última fecha es de ${diferenciaEnDias} días.`);

function calcularDiferenciaEnDias(fechas) {
  // Ordenamos el array de fechas de forma ascendente
  fechas.sort((a, b) => a - b);

  // Calculamos la diferencia en milisegundos entre la última fecha y la primera fecha
  const diferenciaEnMilisegundos = fechas[fechas.length - 1] - fechas[0];

  // Convertimos la diferencia en milisegundos a días
  const dias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

  // Devolvemos la diferencia en días
  return dias;
}

// Función que calcula la diferencia entre dos fechas en días
function calcularDiferenciaFechasEnDias(fecha1, fecha2) {
  // Calculamos la diferencia en milisegundos entre las dos fechas
  const diferenciaEnMilisegundos = fecha2 - fecha1;

  // Convertimos la diferencia en milisegundos a días
  const dias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60)

