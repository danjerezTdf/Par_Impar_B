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
