import React from "react";
import "./Formulario.css";

const Formulario = () => {
  const [campoNome, setcamponome] = React.useState("");
  const [numero1, setNumero1] = React.useState(0);
  const [numero2, setNumero2] = React.useState(0);

  const alterarCampoNome = (event) => {
    setcamponome(event.target.value);
};
const calcular = (event) => {
  alert(numero1 + numero2);
};

  return (
    <div>
      <input
        type="text"
        value={campoNome}
        onChange={alterarCampoNome}
        placeholder="nome"
      />
      <br />
      <br />
      <input
        type="number"
        value={numero1}
        onChange={(event) => setNumero1(+event.target.value)}
      />
      +
      <input
        type="number"
        value={numero2}
        onChange={(event) => setNumero2(+event.target.value)}
      />
      = <button onClick={calcular}> calcular </button>
    </div>
  );
};
export default Formulario;
