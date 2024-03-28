import React from "react";
import BotaoContador from "../BotaoContador/BotaoContador";
import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import ListaProdutos from "../ListaProdutos/ListaProdutos";
import "./Principal.css";
import Formulario from "../Formulario/Formulario";

const Principal = () => {
  const [exemplo, setexemplo] = React.useState("");

  return (
    <main>
      <nav>
        <BotaoCustomizado
          tipo="primario"
          onClick={() => setexemplo("listaProdutos")}
        >
          listaProdutos
        </BotaoCustomizado>

        <BotaoCustomizado
          tipo="secundario"
          onClick={() => setexemplo("BotaoContador")}
        >
          BotaoContador
        </BotaoCustomizado>

        <BotaoCustomizado
          tipo="secundario"
          onClick={() => setexemplo("Formulario")}
        >
          formulario
        </BotaoCustomizado>
      </nav>

      {exemplo === "listaProdutos" && <ListaProdutos />}
      {exemplo === "BotaoContador" && <BotaoContador />}
      {exemplo === "Formulario" && <Formulario />}
    </main>
  );
};

export default Principal;
