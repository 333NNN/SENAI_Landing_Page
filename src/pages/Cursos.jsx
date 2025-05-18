import React from "react";
import { Col, Row } from "react-bootstrap";
import CardCurso from "../components/CardCurso";
import { useListaCursos } from "../hooks/useApi";
import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const Cursos = () => {
  const cursos = useListaCursos();

  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-center align-items-center flex-column">
          <h1>Cursos</h1>

          <div className="d-flex col-12 gap-2 mt-3 justify-content-between flex-wrap">
            {Array.isArray(cursos) &&
              cursos.map((curso) => (
                <CardCurso
                  key={curso.id}
                  id={curso.id}
                  nome={curso.nome}
                  cidade={curso.cidade}
                  modalidade={curso.modalidade}
                  cargaHoraria={curso.cargaHoraria}
                  inicio={curso.inicio}
                  preco={curso.preco}
                  imagemUrl={curso.imagemUrl}
                />
              ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cursos;
