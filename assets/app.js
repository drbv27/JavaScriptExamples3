/*Ejercicios Basicos JS Nivel 1
    9.Programa una función que obtenga un numero aleatorio entre 501 y 600.
    10.Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro).Ejemplo: miFuncion(2002) devolverá true.
    11.Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n).Ejemplo: miFuncion(5) devolverá 120.
*/

//Soluciones:

//--------------------------------------------------------------------------------------------

//E9S1.Solucion Simple:
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 9:")
function getRandomArbitrary(min=501, max=600) {
    return Math.round(Math.random() * (max - min) + min);

  }
console.log(`El número aleatorio es: "${getRandomArbitrary()}"`);

//E9S2.Arrow Function
const aleatorio = (min=501, max=600) => Math.round(Math.random() * (max - min) + min);

console.log(`El número entre 501 y 600 es: "${aleatorio()}"`)

//--------------------------------------------------------------------------------------------

//E10S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 10:")



//--------------------------------------------------------------------------------------------

//E11S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 11:")
