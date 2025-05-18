import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";

function CursoDetalhes() {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/cursos/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Curso não encontrado");
        }
        return res.json();
      })
      .then((data) => setCurso(data))
      .catch((err) => {
        console.error(err.message);
        setErro(err.message);
      });
  }, [id]);

  if (erro) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{erro}</Alert>
      </Container>
    );
  }

  if (!curso) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" role="status" />
        <p>Carregando...</p>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={curso.imagemUrl} />
          </Card>
        </Col>
        <Col md={8}>
          <h2>{curso.nome}</h2>
          <p>
            <strong>Preço:</strong> R$ {curso.preco}
          </p>
          <p>
            <strong>Carga Horária:</strong> {curso.cargaHoraria}
          </p>
          <p>
            <strong>Início:</strong> {curso.inicio}
          </p>
          <p>
            <strong>Cidade:</strong> {curso.cidade}
          </p>
          {curso.objetivo && (
            <>
              <h5 className="mt-4">Objetivo</h5>
              <p>{curso.objetivo}</p>
            </>
          )}

          {curso.preRequisitos && curso.preRequisitos.length > 0 && (
            <>
              <h5 className="mt-4">Pré-requisitos</h5>
              <ul>
                {curso.preRequisitos.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {curso.documentosMatricula &&
            curso.documentosMatricula.length > 0 && (
              <>
                <h5 className="mt-4">Documentos para Matrícula</h5>
                <ul>
                  {curso.documentosMatricula.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </>
            )}

          {curso.conteudo && curso.conteudo.length > 0 && (
            <>
              <h5 className="mt-4">Conteúdo</h5>
              <ul>
                {curso.conteudo.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default CursoDetalhes;
