//? Importar las clases desde los archivos respectivos
import { Vehiculo } from './vehiculo.js';
import { Furgoneta } from './furgoneta.js';
import { Todoterreno } from './todoterreno.js';

//? Crear un contenedor para mostrar los resultados
const resultadoContainer = document.createElement('div');
document.body.appendChild(resultadoContainer);

//? Funcion para mostrar datos
export function mostrarResultado(mensaje) {
  resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}

//? Muestra de un objeto vehiculo
const vehiculo1 = new Vehiculo('BMW', 'CLK', 'rojo', 1992, '2400');
mostrarResultado(`--vehiculo 1--`);
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

//? Variable de tipo Object de un objeto vehiculo

const vehiculoObject = {
  marca: 'BMW',
  modelo: 'CLK',
  color: 'rojo',
  fabricacion: 1992,
  cilindrada: '2400'
  //! tiene la forma de un JSON pero no lo es hay que castearla
}

//? Almacenar datos - Guardar el JSON en LocalStorage

localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject));
//! D e variable tipo objeto a JSON "stringify"
//? Recuperar datos - Mostrar el Object en consola del JSON que hemos guardado en el LocalStorage

console.log(JSON.parse(localStorage.getItem("vehiculo")));
//! JSON a variable tipo objeto "parse"

//? Muestra de un objeto furgoneta
const furgoneta1 = new Furgoneta('Mercedes', 'Kangoo', 'azul', 2015, '1800', 8);
mostrarResultado('<br /><br />-----------Furgoneta 1-----------');
furgoneta1.arrancar();
furgoneta1.acelerar(130);
furgoneta1.frenar();

//? Guardar en el localStorage la marca de una furgoneta

localStorage.setItem("marca furgoneta", furgoneta1.marca)

console.log(furgoneta1.marca)

//! El polimorfismo: utilizar el mismo metodo para dos objetos diferentes

//? Muestra un objeto todoterreno
const todoterreno1 = new Todoterreno('Suzuki', 'fullpower', 'negro', 2016, '3600', 'true');
mostrarResultado('<br /><br />-----------Todoterreno 1-----------');
todoterreno1.mostrarDatos();
mostrarResultado('<br />Traccion: ' + todoterreno1.traccion);
todoterreno1.arrancar();
todoterreno1.acelerar(150);
todoterreno1.frenar();

//? Generar variable de tipo Object con POO 

const todoterrenoObject = {
  marca: todoterreno1.marca,
  modelo: todoterreno1.modelo,
  color: todoterreno1.color,
  fabricacion: todoterreno1.fabricacion,
  cilindrada: todoterreno1.cilindrada,
  traccion: todoterreno1.traccion
}

//? Almacenar los datos en un LocalStorage mediante un buvle iterativo

for( let key in todoterrenoObject) {
  //? hasOwnProperty lo utilizamos para almacenar el nombre de la propiedad de cada objeto
  if (todoterrenoObject. hasOwnProperty(key)){
    localStorage.setItem(key, todoterrenoObject[key]);
  }
}

//? Eliminar un elemento del LocalStorage

localStorage.removeItem('color');
localStorage.removeItem('marca');

//? Eliminar todos los elementos del LocalStorage
//! Pregunta de examen

localStorage.clear();