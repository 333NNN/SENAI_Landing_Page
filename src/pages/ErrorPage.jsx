import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container className="d-flex vh-100 align-items-center justify-content-center">
      <Row className="text-center">
        <Col>
          <h1
            style={{ fontSize: "6rem", fontWeight: "bold", color: "#fb5a09" }}
          >
            404
          </h1>
          <h2 className="mb-3">Página não encontrada</h2>
          <p className="mb-4">
            A página que você está tentando acessar não existe.
          </p>
          <Button
            as={Link}
            to="/home"
            variant="primary"
            size="lg"
            className="px-4"
          >
            Voltar para Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
