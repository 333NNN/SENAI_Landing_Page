import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  BsBookHalf,
  BsFillPinMapFill,
  BsFillPencilFill,
  BsCalendar2Check,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const CardCurso = (props) => {
  return (
    <div>
      <Card
        className="d-flex flex-column mb-3"
        style={{
          display: "flex",
          width: "17rem",
          height: "34rem",
          marginBottom: "5px",
        }}
      >
        <Link to={`/cursos/${props.id}`}>
          <Card.Img
            variant="top"
            src={
              props.imagemUrl && props.imagemUrl.trim() !== ""
                ? props.imagemUrl
                : "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png"
            }
            height="200px"
          />
        </Link>
        <Card.Body className="d-flex flex-column justify-content-between">
          <div style={{ flexGrow: 1 }}>
            <Card.Title
              className="fs-5 fw-bold text-break text-center mb-3"
              style={{ minHeight: "3.5em", lineHeight: "1.2em" }} // até 2-3 linhas
            >
              {props.nome}
            </Card.Title>
          </div>
          <Card.Text>
            <BsBookHalf className="mb-1" />
            <b> Modalidade: </b>
            {props.modalidade}
          </Card.Text>

          <Card.Text>
            <BsFillPinMapFill className="mb-1" />
            <b> Cidade: </b>
            {props.cidade}
          </Card.Text>
          <Card.Text>
            <BsFillPencilFill className="mb-1" />
            <b> Carga Horária: </b>
            {props.cargaHoraria}
          </Card.Text>
          <Card.Text>
            <BsCalendar2Check className="mb-1" />
            <b> Início: </b>
            {props.inicio}
          </Card.Text>

          <Card.Subtitle className="mb-2 text-muted">
            À vista: R${props.preco}
          </Card.Subtitle>

          <div className="mt-auto">
            <Button variant="primary" className="w-100">
              Matricular
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCurso;
