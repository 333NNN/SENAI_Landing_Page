import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardCurso = (props) => {
  return (
    <div>
      <Card style={{ width: "15rem", height: "30rem" }}>
        {/* Imagem do Card */}
        <Card.Img
          variant="top"
          // se a imagem for diferene de null, mostra a imagem do produto, se nao mostra uma imagem padrão
          src={
            props.imagemUrl != "null"
              ? props.imagemUrl
              : "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png"
          }
          height="200px"
        />

        <Card.Body>
          {/* Título do card com nome do produto */}
          <Card.Title>{props.nome}</Card.Title>
          {/* Subtitulo no card com preco do produto */}
          <Card.Subtitle className="mb-2 text-muted">
            Preço: {props.preco}
          </Card.Subtitle>
          <Card.Text>
            <b> Descrição: </b> <br></br> {props.descricao}
          </Card.Text>
          <Card.Text>
            <b> Categoria: </b> <br></br> {props.categoria}
          </Card.Text>
          <Button variant="primary">Matricule-se</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCurso;
