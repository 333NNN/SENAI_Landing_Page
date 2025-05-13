import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import CardDds from '../Componentes/card-curso/CardDds.jsx';
// import CardEletrotec from '../Componentes/card-curso/CardEletrotec.jsx';
// import CardEletromec from "../Componentes/card-curso/CardEletromec.jsx";

const Home = () => {
  return (
    <Container>
        <Row>
          <Col xxl={4} xl={6} lg={6} md={10} className='m-auto'>
            <CardDds/>
          </Col>
          <Col xxl={4} xl={6} lg={6} md={10} className='m-auto'>
            <CardEletrotec/>
          </Col>
          <Col xxl={4} xl={6} lg={6} md={10} className='m-auto'>
            <CardEletromec/>
          </Col>
        </Row>
    </Container>
  )
}

export default Home