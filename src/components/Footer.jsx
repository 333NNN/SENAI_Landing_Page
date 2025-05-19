import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import LogoSenai from "../assets/SENAI-BRANCA-SEM-TEXTO.svg";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        zIndex: 1,
      }}
    >
      <Container fluid className={styles["footer-gradiente"]}>
        <Row className="mt-3 mx-4 gx-4 justify-content-center">
          <Col md={4} className="d-flex flex-column align-items-start">
            <Image src={LogoSenai} />
            <br />
            <p>
              No Espírito Santo, o Senai foi criado em 1952 para qualificar
              pessoas, tornando-as profissionais capacitados para trabalhar no
              setor industrial
            </p>
          </Col>

          <Col md={4} className="d-flex flex-column align-items-start">
            <h6>SAC - Serviço de Atendimento ao Cliente</h6>
            <p>Telefone: 0800-102-0880</p>
            <p>
              Whatsapp: 27 99841-2270
              <br />
              Segunda a sexta-feira, das 7h às 19h
              <br />
              Exceto feriados nacionais e locais
            </p>
          </Col>

          <Col
            md={4}
            className="d-flex flex-column align-items-start"
            style={{ paddingRight: "0px", height: "100px", width: "280px" }}
          >
            <strong>Redes Sociais</strong>
            <a
              href="https://instagram.com/senaies"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center text-white text-decoration-none gap-1"
            >
              <FaInstagram className="mt-1" />
              <span>@senaies</span>
            </a>
            <a
              href="https://www.facebook.com/SenaiES/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center text-white text-decoration-none gap-1"
            >
              <FaFacebook className="mt-1" />
              <span>/SenaiES</span>
            </a>
            <a
              href="https://www.youtube.com/c/SENAIES_Oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center text-white text-decoration-none gap-1"
            >
              <FaYoutube className="mt-1" />
              <span>SENAIES_Oficial</span>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
