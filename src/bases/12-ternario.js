const activo = true;
// let mensaje = "";

// if (!activo) {
//   mensaje = "Activo";
// } else {
//   mensaje = "Inactivo";
// }

const mensaje1 = activo ? "Activo" : "Inactivo"; // Operador ternario
// const mensaje = activo ? "Activo" : null;
const mensaje2 = activo && "Activo"; // Forma corta de hacer un if

console.log(mensaje1);
console.log(mensaje2);
