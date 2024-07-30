// import { heroes } from "./data/heroes";
// import { heroes } from "./data/heroes"; utilizando el short imp
import heroes, { owners } from "../data/heroes";

console.log(owners);

export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

console.log(getHeroeById(1));

const getHeroesByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};
console.log(getHeroesByOwner("Marvel"));
