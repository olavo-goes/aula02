import { useEffect, useState } from "react";

export default function App() {
  
  const [lista,setLista] = useState([]);

  useEffect(() => { 

    const  buscarUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setLista(dados);
    }
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Lista</h1>
      <ul>
        {lista.map((produto) => ( <li key={produto.id}>
        <h2>{produto.title}</h2>
        <p>{produto.description}</p>
        <p>Preço: ${produto.price}</p>
        <img src={produto.image} alt={produto.title} width={100} />
          </li>))}
      </ul>
    </>
  );
}
