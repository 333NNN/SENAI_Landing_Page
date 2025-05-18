import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import LogoSenai from "../assets/SENAI-BRANCA.svg";
import styles from "./BarraNav.module.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext.jsx";

const BarraNav = () => {
  const { usuarioNome, logout } = useContext(AuthContext);

  return (
    <div style={{ position: "sticky", top: "0", width: "100%", zIndex: 1 }}>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        className={styles["navbar-gradiente"]}
      >
        <Container>
            <Navbar.Brand href="/">
            <Image src={LogoSenai}></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="minha-nav" />
          <Navbar.Collapse id="minha-nav">
            <Nav className="me-auto">
              <Nav.Link className={styles.navLinkCustom} href="/home">
                Início
              </Nav.Link>
              <Nav.Link className={styles.navLinkCustom} href="/sobre">
                Quem Somos
              </Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              {usuarioNome !== "Visitante" && (
                <Navbar.Text style={{ color: "white", marginRight: "5px" }}>
                  Usuário: {usuarioNome} |
                </Navbar.Text>
              )}

              {usuarioNome === "Visitante" ? (
                <Button variant="primary" href="/login">
                  Entrar ou Cadastrar
                </Button>
              ) : (
                <Button variant="danger" href="/login" onClick={logout}>
                  Sair
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BarraNav;
