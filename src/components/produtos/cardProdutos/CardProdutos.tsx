import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { AuthContext } from "../../../contexts/AuthContext.tsx";
import Produto from "../../../models/Produto.ts";
import { toastAlerta } from "../../../utils/toastAlerta.ts";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const { isAdmin } = useContext(AuthContext);

  const { adicionaProdutoNoCarrinho } = useContext(CartContext);

  const handleComprarClick = () => {
    adicionaProdutoNoCarrinho(produto);
    toastAlerta("Produto adicionado no carrinho", "info");
  };

  return (
    <div className="border flex flex-col flex-grow overflow-hidden place-content-centershadow-xl w-4/5 mx-12 h-full content-center justify-center ">
      <header className="py-2 px-6 bg-green-800 text-white font-bold text-2xl text-center">
        {produto.nome}
      </header>
      <Link to={`/produto/${produto.id}`}>
        <img
          src={produto.foto}
          className="w-fit h-fit p-2"
          alt={produto.nome}
        />
        <p className="p-8 text-3xl bg-slate-200 h-full">{produto.nome}</p>
        <p className="p-8 text-3xl bg-slate-200 h-full">{produto.preco}</p>
      </Link>

      {isAdmin && (
        <>
          <Link
            to={`/editar-produto/${produto.id}`}
            className="w-full text-slate-100 bg-primary hover:bg-secondary flex items-center justify-center py-2 mb-px"
          >
            <button>Editar</button>
          </Link>
          <Link
            to={`/deletar-produto/${produto.id}`}
            className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
          >
            <button className="w-full text-slate-100 bg-red-400 hover:bg-main-light-red flex items-center justify-center py-2">
              Deletar
            </button>
          </Link>
        </>
      )}

      <div className="flex">
        <button
          onClick={handleComprarClick}
          className="w-full text-slate-100 bg-primary hover:bg-secondary flex items-center justify-center py-2"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default CardProduto;
