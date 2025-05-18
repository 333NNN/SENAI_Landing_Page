import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import LogoSenai from "../assets/SENAI-BRANCA.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import { useVerificaLogin } from "../hooks/useApi";

const Login = () => {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { verificaLogin } = useVerificaLogin();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Dados:", data);

    const respostaVerificacao = verificaLogin(data);

    if (respostaVerificacao == "Login efetuado com sucesso") {
      alert(respostaVerificacao);
      navigate("/home");
    } else {
      setAlertClass("mb-5 mt-2");
      setAlertMensagem(respostaVerificacao);
    }
  };

  const onError = (errors) => {
    console.log("Erros:", errors);
  };

  const [alertClass, setAlertClass] = useState("mb-5 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");
  return (
    <Container>
      <Col md={10} lg={9} xl={8} className="m-auto">
        <Card
          style={{ backgroundColor: "#2029ad", color: "white" }}
          className="p-2 pb-3 mx-auto m-4 text-center shadow rounded-4"
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
              <Card.Body className="rounded-2">
                <Row className="justify-content-center">
                  <Col className="text-center text-dark mb-2 text-white">
                    <h3>Acesse sua conta</h3>
                  </Col>
                </Row>

                <Form onSubmit={handleSubmit(onSubmit, onError)}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      {...register("email", {
                        required: "O email é obrigatório",
                        pattern: {
                          value:
                            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                          message: "Email inválido",
                        },
                        validate: (value) =>
                          value.includes("@") || "Email inválido",
                      })}
                    ></Form.Control>
                    {errors.email && (
                      <p className="error">{errors.email.message}</p>
                    )}
                  </FloatingLabel>

                  <InputGroup className="mb-3">
                    <FloatingLabel id="userPassInput" label="Senha">
                      <Form.Control type="password" placeholder="" />
                    </FloatingLabel>
                  </InputGroup>

                  <Row className="mb-3 text-end">
                    <Link
                      to="/recuperar-senha"
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
                <Link
                  to="/cadastro"
                  className="ms-1 text-decoration-none text-white fw-bold"
                >
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
