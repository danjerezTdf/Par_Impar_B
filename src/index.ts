/*Par/Impar
• Realizar un algoritmo que dado un
número entero ingresado por el
usuario, visualice en pantalla si es
par o impar
• En el caso de ingresar un cero, se
debe volver a pedir el número por
teclado (hasta que se ingrese un
número mayor que cero)*/

let numeroValor: number = Number(prompt(`Ingreser Valor a comprobar`));
//console.log(numeroValor);
while (numeroValor === 0) {
  numeroValor = Number(prompt(`ingrese un valor distinto de 0`));
  //console.log(`El numero Ingresado es 0`);
}
if (numeroValor % 2 === 0) {
  console.log(`El nuemro: ${numeroValor} es Par `);
} else {
  console.log(`El numero: ${numeroValor} es Impar`);
}
