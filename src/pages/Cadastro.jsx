import {
  Form,
  FloatingLabel,
  Button,
  Row,
  Col,
  Container,
  Card,
} from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LogoSenai from "../assets/SENAI-BRANCA.svg";
import { verificaCPF } from "../functions/verificaCPF";

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    if (!verificaCPF(data.cpf)) {
      alert("CPF inválido! Por favor, corrija antes de continuar.");
      return;
    }

    navigate("/login", { state: data });
  };

  const senha = watch("senha");
  const onError = (errors) => {
    console.log("Error: ", errors);
  };

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
          <Col md={10} className="m-auto">
            <Card.Body className="rounded-2">
              <Row className="justify-content-center">
                <Col className="text-center text-dark mb-2 text-white">
                  <h3>Cadastre-se</h3>
                </Col>
              </Row>
              <Form className="px-4" onSubmit={handleSubmit(onSubmit, onError)}>
                <Row>
                  <Col>
                    <FloatingLabel
                      id="userEmailInput"
                      className="mb-3"
                      label="Email"
                    >
                      <Form.Control
                        type="email"
                        placeholder=""
                        {...register("email")}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row className="">
                  <Col>
                    <FloatingLabel
                      id="userCpfInput"
                      className="mb-3"
                      label="CPF"
                    >
                      <Form.Control
                        type="text"
                        placeholder="000.000.000-00"
                        {...register("cpf")}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel
                      id="userTelInput"
                      className="mb-3"
                      label="Telefone"
                    >
                      <Form.Control
                        type="text"
                        placeholder="(00) 00000-0000"
                        {...register("telefone")}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row className="">
                  <Col className="">
                    <FloatingLabel
                      id="userNomeInput"
                      className="mb-3"
                      label="Nome"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Nome"
                        {...register("nome")}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col className="">
                    <FloatingLabel
                      id="userSobrenomeInput"
                      className="mb-3"
                      label="Sobrenome"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Sobrenome"
                        {...register("sobrenome")}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabel
                      id="userSenhaInput"
                      className="mb-0"
                      label="Senha"
                    >
                      <Form.Control
                        type="password"
                        placeholder="Senha"
                        isInvalid={!!errors.senha}
                        {...register("senha", {
                          required: "A senha é obrigatória",
                          minLength: {
                            value: 8,
                            message: "A senha deve ter pelo menos 8 caracteres",
                          },
                        })}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.senha?.message}
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel
                      id="userConfirmaSenhaInput"
                      className="mb-2"
                      label="Confirmar Senha"
                    >
                      <Form.Control
                        type="password"
                        placeholder="Confirmar Senha"
                        isInvalid={!!errors.confirmarSenha}
                        {...register("confirmarSenha", {
                          required: "A confirmação de senha é obrigatória",
                          validate: (value) =>
                            value === senha || "As senhas não coincidem",
                        })}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row className="my-3">
                  <Col sm={6}>
                    <Form.Check
                      className="form-check-label text-white"
                      type="checkbox"
                      id="termsCheck"
                      label="Li e aceito os termos de uso"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Button
                      as="input"
                      value="Cadastrar"
                      type="submit"
                      size="lg"
                      className="w-100 p-3 text-uppercase fw-bold"
                      style={{
                        backgroundColor: "#fb5a09",
                        borderColor: "white",
                      }}
                    />
                  </Col>
                </Row>

                <hr className="mt-4 mx-5 text-white border-2" />

                <Row>
                  <Col>
                    <h6>
                      Já possui conta?{" "}
                      <Link
                        to="/login"
                        className="text-decoration-none text-white"
                        style={{ color: "#f3ab15" }}
                      >
                        Faça Login
                      </Link>
                    </h6>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Col>
        </Card>
      </Col>
    </Container>
  );
};

export default Cadastro;
