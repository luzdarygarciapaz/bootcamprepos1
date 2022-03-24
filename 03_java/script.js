// estructuras de datos
var variable1 = 'soy var';
let variable2 = 'soy let';
const constante = 'soy const';

const arreglo = ['amarillo', 'azul', 'rojo'];
console.log(arreglo[0]);

for (let index = 0; index < arreglo.length; index++) {
    //console.log(index);
    //console.log(arreglo[index]);
  }
  
// Estructuras condicionales

const edad = 10;
for (let edad=0; edad<20; edad++){
    //console.log(edad);
if (edad >= 18) {
  //console.log('es mayor de edad');
} else {
  //console.log('no es mayor de edad');
}
}

const countries = ['Colombia', 'Perú', 'Brasil'];

for (let index = 0; index < countries.length; index++) {
    //console.log(countries[index])
  if (countries[index] === 'Colombia') {
    //console.log('es Colombia');
  } else if (countries[index] === 'Brasil') {
    //console.log('es Brasil');
  } else {
    //console.log('no es Colombia ni Brasil, es perú');
  }
}

//console.log(navigator.language);

const lang = navigator.language;
//console.log(navigator.language);

//console.log(lang);
console.log(lang);

// operadores
const nombre = 'Pepita';
const apellido = 'Pérez';
const concatenar = nombre + apellido + edad;
//console.log(concatenar);

function operar(num1, num2, operacion) {
    //console.log(num1, num2, operacion);
    /*  if (operacion === 'suma') {
      console.log(num1 + num2);
    } */
    switch (operacion) {
      case 'suma':
        console.log('suma:', num1 + num2);
        break;
      case 'resta':
        console.log('resta:', num1 - num2);
        break;
      case 'multiplicar':
        console.log('multiplicar:', num1 * num2);
        break;
      case 'dividir':
        console.log('dividir:', num1 / num2);
        break;
      default:
        console.log('esta operación no está contemplada');
        break;
    }
  }
operar(8, 4, 'suma');
operar(8, 4, 'resta');
operar(8, 4, 'multiplicar');
operar(8, 4, 'dividir');


