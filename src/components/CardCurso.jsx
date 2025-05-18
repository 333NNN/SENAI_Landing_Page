import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsFillPinMapFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { BsCalendar2Check } from "react-icons/bs";

const CardCurso = (props) => {
  return (
    <div>
      <Card style={{ display: "flex", width: "15rem", height: "27rem" }}>
        <Card.Img
          variant="top"
          src={
            props.imagemUrl && props.imagemUrl.trim() !== ""
              ? props.imagemUrl
              : "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png"
          }
          height="200px"
        />
        <Card.Body>
          <Card.Title>{props.nome}</Card.Title>

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

          <Button variant="primary">Matricular</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCurso;
