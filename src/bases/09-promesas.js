import { getHeroeById } from "./08-exp-imp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //Tarea -- importar getHeroeById de la clase 8
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     // reject("No se pudo encontrar el héroe");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("Heroe: ", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Tarea -- importar getHeroeById de la clase 8
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject(`Error, no se encontro al heroe con id ${id}`);
      }

      // reject("No se pudo encontrar el héroe");
    }, 2000);
  });
};

getHeroeByIdAsync(1)
  .then(console.log)
  // .then((heroe) => console.log("Heroe: ", heroe))
  .catch(console.warn);
// .catch((err) => console.warn(err));
