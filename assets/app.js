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
function capicua(num){
    let myArr = String(num).split("").map((num)=>{
        return Number(num)
      })
    let myArrI = myArr.reverse().join("")
        myArrI = parseInt(myArrI)

    if (num === myArrI){
        console.log(`El numero: "${num}", es capicua`)
    }else{
        console.log(`El numero: "${num}", NO es capicua`)
    }
}
capicua(2002)

//E10S2 Expresada y con validacion
const capicua2 = function (num="") {
    if(!num) console.warn("No Digitaste número para evaluar")
    
    let numA = parseInt(num.toString().split("").reverse().join(""))
    if (num===numA) {
        console.info(`El numero: "${num}", es capicua`)
    } else {
        console.info(`El numero: "${num}",NO es capicua`)
    }
}
capicua2(454)

//E10S3 Arrow function validacion y Op.ternario
const capicua3 = (num="") =>{
    if(!num) console.warn("No Digitaste número para evaluar")
    let numI = parseInt(num.toString().split("").reverse().join(""))
    (num===numI)
    ?console.info(`El numero: "${num}", es capicua`)
    :console.info(`El numero: "${num}",NO es capicua`)
}


//--------------------------------------------------------------------------------------------

//E11S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 11:")
function factorial (num) {
    let fact = 1;
    for (let index = 1; index <= num; index++) {
        fact = fact*index;
    }
    console.log(fact);
}
factorial(5)

//E11S2.F Expresada y con validacion
const factor = function (num){
    let fact = 1;
    for (let index = 1; index <= num; index++) {
        fact = fact*index;
    }
    console.log(fact);
}
factor(6);

//E11S3. Compresed solution and validation
const factorA = num =>{
    if(!num)console.warn("No digitaste un número.")
    let fac = 1;
    for (let i = 1; i <= num; i++) fac = fac*i;
    console.info(`El factorial de "${num}" es igual a "${fac}"`);
}
factorA(7)

//E11S4
const factB = (num=undefined) => {
    if (num===undefined) return console.warn("No ingresaste un número");

    if (typeof num !== "number") return console.error(`El valor "${num} ingresado no es un número`);

    if (num <= 0)return console.error("El numero no puede ser cero o negativo");

    let fact = 1;
    for (let i = num ; i>1 ; i--) fact *=i;
    console.info(`El factorial de "${num}" es igual a "${fact}"`);
}
factB(6)