import { Crud } from "./Crud";

type TPet = {
  id: number;
  nome: string;
  dono: string;
  idade: number;
  peso: number;
};

export class Pet extends Crud<TPet> {}
