const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

// saludar = 30;
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};
const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => "Hola Mundo!";

//console.log(saludar("Joseph"));
console.log(saludar("Joseph"));
console.log(saludar2("Joseph"));
console.log(saludar3("Joseph"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "Jpaucar92",
});

console.log(getUser());

// Tarea -- transdormar a funcion flecha, retornan un objeto implicito, pruebas
function getUsuarioActivo(nombre) {
  return {
    uid: "ABC123",
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo("Joseph");
console.log("🚀 ~ usuarioActivo:", usuarioActivo);

// Desarrollo de la Tarea

const getUsuarioActivo2 = (nombre) => ({
  uid: "ABC123",
  username: nombre,
});
const usuarioActivo2 = getUsuarioActivo2("Joseph");
console.log("🚀 ~ usuarioActivo2:", usuarioActivo2);
