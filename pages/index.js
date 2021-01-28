import { useState } from 'react'


function Home() {

  return (
    <div>Home
      <Contador />
    </div>
  )
}

function Contador() {
  const [contador, setContando] = useState(1)
  function adicionarContador() {
      setContando(contador + 1);
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>adicionar</button>
    </div>
  )
}
export default Home;