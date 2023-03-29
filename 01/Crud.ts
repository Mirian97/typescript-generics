type TBase = {
  id: number;
};

export abstract class Crud<T extends TBase> {
  private bancoDeDados: T[];

  constructor() {
    this.bancoDeDados = [];
  }

  listar(): T[] {
    return this.bancoDeDados;
  }

  encontrarItem(id: number): number {
    const indexEncontrado = this.bancoDeDados.findIndex(
      (item) => item.id === id
    );
    if (indexEncontrado < 0) throw new Error("Não encontrado");
    return indexEncontrado;
  }

  detalhar(id: number): T {
    return this.bancoDeDados[this.encontrarItem(id)];
  }

  cadastrar(objeto: T): void {
    this.bancoDeDados.push(objeto);
  }

  editar(id: number, objeto: Omit<T, "id">): void {
    const itemASerEditado = this.bancoDeDados[this.encontrarItem(id)];
    Object.assign(itemASerEditado, objeto);
  }

  excluir(id: number): void {
    this.bancoDeDados.splice(this.encontrarItem(id), 1);
  }
}
