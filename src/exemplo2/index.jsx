import { useEffect, useState } from "react";

export default function App() {
  
  const [Usuario,setUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const resposta = await fetch('https://fakestoreapi.com/products');
        const dados = await resposta.json();            ;
        setUsuario(dados);
    }
    buscarUsuario();
  },[]);

  return(
    <>
      <h1>Usuário</h1>
      <ul>
        {Usuario.map((produto) => (<li key={produto.id}>
        <h2>{produto.title}</h2>
        <p>{produto.description}</p>
        <p>Preço: ${produto.price}</p>
        <img src={produto.image} alt={produto.title} width={100} />
        </li>))}
      </ul>
    </>
  );
}
