var numeros = [1,2,3];

console.log("así es al principio: ", numeros);

var isDesordenado = true;

for (var i = 0; i < numeros.length && isDesordenado; i++) {

  isDesordenado = false;

  for (var j = 0; j < numeros.length - i; j++) {

    // si el numero es mayor a su siguiente => intercambio!
    if (numeros[j] > numeros[j+1]) {
      var temp = numeros[j];
      numeros[j] = numeros[j+1];
      numeros[j+1] = temp;

      isDesordenado = true;
    }

    console.log(i, j);
  }
}

console.log("así e' al final: ", numeros);