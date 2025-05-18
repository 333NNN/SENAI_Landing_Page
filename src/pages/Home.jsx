import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Cursos from "./Cursos";
import Sobre from "./Sobre";

const Home = () => {
  return (
    <div>
      <Sobre />
      <Cursos />
    </div>
  );
};

export default Home;
