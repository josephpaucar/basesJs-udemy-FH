//const arreglo = new Array(100); // Esta notacion solo es recomendable cuando quiero añadir una cantidad de espacios especificos al arreglo
const arreglo = [1, 2, 3, 4];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

let arreglo2 = [...arreglo, 5];
//arreglo2.push(5);

const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});

console.log("🚀 ~ arreglo:", arreglo);
console.log("🚀 ~ arreglo2:", arreglo2);
console.log("🚀 ~ arreglo3:", arreglo3);
