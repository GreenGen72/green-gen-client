import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
  foto: string;
  quantidadeNoCarrinho?: number;
  categoria?: Categoria;
  usuario?: Usuario;
}
