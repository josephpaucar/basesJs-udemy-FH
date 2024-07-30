const persona = {
  nombre: "Tony",
  apellio: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 6546512,
    lat: 14.3123,
    long: 34.31231,
  },
};

//console.table( persona )
console.log("🚀 ~ persona:", persona);

// const persona2 = persona; // esta asignación modifica al objeto original, No es recomendable hacerlo
const persona2 = { ...persona }; // Esto si genera una copia del objeto original y evita el error anterior
persona2.nombre = "Peter";

console.log("🚀 ~ persona2:", persona2);
console.log("🚀 ~ persona:", persona);
