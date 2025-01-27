import Categoria from "./Categoria";

export default interface Produto {
  id: number;
  nomeProduto: string;
  descicao: string;
  preco: number;
  quantidadeEstoque: number;
  Categoria?: Categoria | null;
}