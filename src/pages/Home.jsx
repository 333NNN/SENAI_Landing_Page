import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Row";
import Cursos from "./Cursos";
import Sobre from "./Sobre";
import Modalidades from "../components/Modalidades";

const Home = () => {
  return (
    <div>
      <Modalidades />
      <Cursos />
      <Sobre />
    </div>
  );
};

export default Home;
