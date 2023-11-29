 //? Importar las clases desde los archivos respectivos
 import { Vehiculo } from './vehiculo.js';
 import { Furgoneta } from './furgoneta.js'; 
 import { Todoterreno } from './todoterreno.js';

 //? Crear un contenedor para mostrar los resultados
 const resultadoContainer = document.createElement('div');
 document.body.appendChild(resultadoContainer);

 //? Funcion para mostrar datos
 export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
 }

 //? Muestra de un objeto vehiculo
 const vehiculo1 = new Vehiculo('BMW', 'CLK', 'rojo', 1992, '2400');
 mostrarResultado(`--vehiculo 1--`);
 vehiculo1.mostrarDatos();
 vehiculo1.arrancar();
 vehiculo1.acelerar(140);
 vehiculo1.frenar();

 //? Muestra de un objeto furgoneta
  const furgoneta1 = new Furgoneta('Mercedes', 'Kangoo', 'azul',2015, '1800', 8);
  mostrarResultado('<br /><br />-----------Furgoneta 1-----------');
  furgoneta1.arrancar();
  furgoneta1.acelerar(130);
  furgoneta1.frenar();

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