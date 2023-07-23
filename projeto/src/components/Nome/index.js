import { useContext } from "react";

import { UserContext } from "../../context/users";

function Nome() {
  const { nomeAluno, setNomeAluno } = useContext(UserContext);
  return (
    <div>
      <span style={{ color: '#FF0000' }} >Bem vindo: {nomeAluno} </span>
      <br/>
      <button onClick={() => setNomeAluno('Jr') } >Trocar nome</button>
    </div>
  );
}

export default Nome;
