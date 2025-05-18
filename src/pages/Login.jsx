import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import LogoSenai from "../assets/SENAI-BRANCA.svg";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Col md={10} lg={9} xl={8} className="m-auto">
        <Card
          style={{ backgroundColor: "#2029ad", color: "white" }}
          className="p-2 pb-3 mx-auto mt-4 text-center shadow rounded-4"
        >
          <Card.Header style={{ border: "none" }}>
            <Row className="fs-1 fw-bold mb-1">
              <Col>
                <Link to="/home">
                  <img src={LogoSenai} alt="" width="60%" />
                </Link>
              </Col>
            </Row>
          </Card.Header>
          <Row>
            <Col md={10} className="m-auto">
              <Card.Body
                style={{ backgroundColor: "white" }}
                className="rounded-2"
              >
                <Row className="justify-content-center">
                  <Col md={3} className="text-start text-dark mb-2 ">
                    Acesse sua conta
                  </Col>
                </Row>
                <Form>
                  <FloatingLabel
                    className="mb-3"
                    id="userEmailInput"
                    label="Email ou CPF"
                  >
                    <Form.Control type="email" placeholder="" />
                  </FloatingLabel>
                  <InputGroup className="mb-3">
                    <FloatingLabel id="userPassInput" label="Senha">
                      <Form.Control type="password" placeholder="" />
                    </FloatingLabel>
                  </InputGroup>
                  <Row className="mb-3 text-end">
                    <Link
                      className="fw-bold text-decoration-none fs-6"
                      style={{ color: "#1F29AC" }}
                    >
                      Esqueceu a senha?
                    </Link>
                  </Row>
                  <Button
                    as="input"
                    value="Entrar"
                    type="submit"
                    size="lg"
                    className="w-100 p-3 text-uppercase fw-bold"
                    style={{ backgroundColor: "#fb5a09", borderColor: "white" }}
                  />
                </Form>
              </Card.Body>
            </Col>
            <Row className="text-center mx-1 mt-2 mb-1 m-auto">
              <Col>
                Não tem Cadastro?
                <Link to="/cadastro" className="ms-1 text-decoration-none text-white fw-bold">
                  Cadastre-se
                </Link>
              </Col>
            </Row>
          </Row>
        </Card>
      </Col>
    </Container>
  );
};

export default Login;
