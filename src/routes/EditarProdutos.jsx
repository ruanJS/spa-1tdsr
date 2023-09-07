import { useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";


export default function EditarProdutos() {

  document.title = "Editar Produtos";

  //Utilizando o HOOK useParams()
  const {id} = useParams();

  //Filtrando o produto selecionado byId
  const produtoFiltrado = ListaProdutos.filter( (item)=> item.id === parseInt(id) )[0];

  


  return (
    <>
      <h1>EditarProdutos</h1>
      <p>Produto selecionado : {id}</p>
      <p>Nome do produto : {produtoFiltrado.nome}</p>
      <img src={produtoFiltrado.img} alt={produtoFiltrado.nome}/>
    </>
  )
}
