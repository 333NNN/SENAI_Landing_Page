import {
  Form,
  FloatingLabel,
  Button,
  Row,
  Col,
  Container,
  Image,
} from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LogoSenai from "../assets/SENAI-BRANCA.svg";

//   import styles from "./cadastro.module.css";

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
      return false;
    }

    navigate("/pergunta-seguranca", { state: data });
  };

  const senha = watch("senha");
  const onError = (errors) => {
    console.log("Error: ", errors);
  };

  return (
    <Container
      className="p-3 mx-auto m-4 text-center shadow rounded-4 custom-container"
      style={{
        width: "570px",
        height: "600px",
        background: "linear-gradient(to bottom, #511b9e, #45bed6 )",
        overflow: "hidden",
      }}
    >
      <Row>
        <Row className="mt-3 mb-4">
          <Col>
            <img src={LogoSenai} alt="" width="60%" />
          </Col>
        </Row>
      </Row>

      <Form className="px-4" onSubmit={handleSubmit(onSubmit, onError)}>
        <Row>
          <Col>
            <FloatingLabel id="userEmailInput" className="mb-3" label="Email">
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
            <FloatingLabel id="userCpfInput" className="mb-3" label="CPF">
              <Form.Control
                type="text"
                placeholder="000.000.000-00"
                {...register("cpf")}
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel id="userTelInput" className="mb-3" label="Telefone">
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
            <FloatingLabel id="userNomeInput" className="mb-3" label="Nome">
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
            <FloatingLabel id="userSenhaInput" className="mb-3" label="Senha">
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
              className="mb-3"
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
              value="Avançar"
              type="submit"
              size="lg"
              className=""
            />
          </Col>
        </Row>

        <hr className="mt-4 mx-5 text-white border-2" />

        <Row className="mt-4">
          <Col>
            <h6 className="text-white">
              Já possui conta?{" "}
              <Link to="/login" className="text-decoration-none">
                Login
              </Link>
            </h6>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Cadastro;
