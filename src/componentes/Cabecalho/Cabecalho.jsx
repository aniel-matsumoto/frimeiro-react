import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";

const Cabecalho = () => {
  return (
    <header>
      <img className="logoImage" src="/vite.svg"/>
      <Avatar nome='Aniel Matsumoto' />
    </header>
  );
};

export default Cabecalho;
