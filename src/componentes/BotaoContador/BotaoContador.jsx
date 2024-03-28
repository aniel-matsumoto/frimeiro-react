import React from "react";

const BotaoContador = () => {
  const [numero, setNumero] = React.useState(0);

  const incrementarNumero = () => {
    setNumero(numero + 1);
  };
  return <button onClick={incrementarNumero} > {numero} </button>;
};

export default BotaoContador
