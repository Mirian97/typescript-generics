import { Pet } from "./Pet";

const pets = new Pet();

pets.cadastrar({
  id: 1,
  nome: "Selena",
  dono: "Mirian",
  idade: 1,
  peso: 3,
});
pets.cadastrar({
  id: 2,
  nome: "Belind",
  dono: "Mirian",
  idade: 1,
  peso: 7,
});
pets.editar(2, {
  nome: "Jade",
  dono: "Mirian",
  idade: 3,
  peso: 6,
});
pets.excluir(2);
console.log(pets.listar());
