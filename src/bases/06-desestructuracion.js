// Desestructuración -> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
  nombre: "Joseph",
  edad: 31,
  clave: "developer",
};

// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.clave)

const { nombre: nombre2, edad, clave } = persona; // aqui lo que se esta haciendo es extraer el valor nombre del objeto y asignarlo a una constante con nombre, nombre2.

console.log(nombre2);
console.log(edad);
console.log(clave);

// const retornaPersona = (usuario) => {
//   const { edad, clave, nombre } = usuario;

//   console.log(edad, clave, nombre);
// };

const retornaPersona = ({ nombre, edad, rango = "Capitan" }) => {
  console.log(nombre, edad, rango);
};

retornaPersona(persona);

const usecontext = ({ clave, nombre, edad, rango = "Capitan" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    lating: {
      lat: 12.3124,
      long: -13.42423,
    },
  };
};

// const {
//   nombreClave,
//   anios,
//   lating: { lat, long },
// } = usecontext(persona);
const { nombreClave, anios, lating } = usecontext(persona);
const { lat, long } = lating; // esta es una forma mas habitual de desestructurar un objeto anidado

console.log(nombreClave, anios);
console.log(lat, long);
