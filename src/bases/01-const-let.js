// Variables y constantes -- Ya no se utiliza var en las aplicaciones, puro const y let

const nombre = "Joseph";
console.log("🚀 ~ nombre:", nombre);
const apellido = "Paucar";
console.log("🚀 ~ apellido:", apellido);
let valorDado = 5;
valorDado = 4;
console.log("🚀 ~ valorDado:", valorDado);

if (true) {
  let valorDado = 6; // en este caso el valorDado solo se lee en el scope del condicional
  console.log("🚀 ~ valorDado:", valorDado);
}
console.log(valorDado);
