import { mostrarResultado } from "./main.js";

export class Vehiculo{
    #marca;
    #modelo;
    #color;
    #fabricacion;
    #cilindrada;

    //? Constructor con parametros
    constructor(marca, modelo, color, fabricacion, cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#fabricacion = fabricacion;
        this.#cilindrada = cilindrada;
    }

    //? Constructor por defecto o sin parametros
  /*   constructor(){

    } */

    mostrarDatos(){
        const datos = `
        La marca es ➜ ${this.#marca}
        <br />
        El modelo es ➜ ${this.#modelo}
        <br />
        Su color es ➜ ${this.#color}
        <br />
        Se fabricó el año ➜ ${this.fabricacion}
        <br />
        Cilindrada ➜ ${this.cilindrada}
        `;

        //? LLamar a la funcion mostrarResultado definida en el main.js
        mostrarResultado(`<p>${datos}</p>`)
    }

  acelerar(velocidad){
    const mensaje = `<br />Se ha acelerado hasta ➤ ${velocidad}`;
    mostrarResultado(`<p>${mensaje}</p>`)
  } 
  
  arrancar(){
    const mensaje = `<br>El coche ${this.modelo}, de color ${this.colot} ha arrancado</br>`;
    mostrarResultado(`<p>${mensaje}</p>`)
  }

//! Podemos poner el mismo nombre en las variables por que estan en local
  frenar(){
    const mensaje = `<br>El coche ${this.modelo}, de color ${this.colot} ha parado</br>`;
    mostrarResultado(`<p>${mensaje}</p>`)
  }

get marca(){
    return this.#marca;
}

set marca(marca){
    this.#marca = marca;
}

get modelo(){
    return this.#modelo;
}

set modelo(modelo){
    this.#modelo = modelo;

}

get color(){
    return this.#color;
}

set color(color){
    this.#color = color;

}

get fabricacion(){
    return this.#fabricacion;
}

set fabricacion(fabricacion){
    this.#fabricacion = fabricacion;
}

get cilindrada() {
    return this.#cilindrada;
}

set cilindrada(cilindrada) {
    this.#cilindrada = cilindrada;
}
  

}
