import React from "react";
import { Card } from "react-bootstrap";
import { PiCertificate, PiHeadCircuit } from "react-icons/pi";
import { VscServerProcess } from "react-icons/vsc";
import { TbDeviceDesktopCode } from "react-icons/tb";

const Modalidades = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>
        Modalidades de Ensino
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* CARD 1 */}
        <Card
          style={{
            margin: "1rem",
            width: "24rem",
            height: "16rem",
            backgroundColor: "#2029ad",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "1.5rem",
          }}
        >
          <PiCertificate size={40} style={{ marginBottom: "0.5rem" }} />
          <Card.Title>Cursos Técnicos</Card.Title>
          <Card.Text>
            Os cursos técnicos do Senai-ES são pensados para atender às
            principais demandas das indústrias do Espírito Santo. 96% das
            empresas contratantes preferem profissionais formados pelo Senai.
          </Card.Text>
        </Card>

        {/* CARD 2 */}
        <Card
          style={{
            margin: "1rem",
            width: "24rem",
            height: "16rem",
            backgroundColor: "#44c0d6",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "1.5rem",
          }}
        >
          <PiHeadCircuit size={40} style={{ marginBottom: "0.5rem" }} />
          <Card.Title>Qualificação Profissional</Card.Title>
          <Card.Text>
            Ideais para jovens e adultos a partir de 16 anos que querem aprender
            uma nova profissão de forma rápida ou se certificar na área em que
            já atuam. Com no mínimo 160 horas e certificado nacional.
          </Card.Text>
        </Card>

        {/* CARD 3 */}
        <Card
          style={{
            margin: "1rem",
            width: "24rem",
            height: "16rem",
            backgroundColor: "#fb5a09",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "1.5rem",
          }}
        >
          <VscServerProcess size={40} style={{ marginBottom: "0.5rem" }} />
          <Card.Title>Iniciação Profissional</Card.Title>
          <Card.Text>
            Ideais para quem está começando no mercado de trabalho. Despertam o
            interesse por atividades específicas e desenvolvem habilidades
            essenciais com confiança e competência.
          </Card.Text>
        </Card>

        {/* CARD 4 */}
        <Card
          style={{
            margin: "1rem",
            width: "24rem",
            height: "16rem",
            backgroundColor: "#f3ab15",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "1.5rem",
          }}
        >
          <TbDeviceDesktopCode size={40} style={{ marginBottom: "0.5rem" }} />
          <Card.Title>Especialização Profissional</Card.Title>
          <Card.Text>
            Ajudam você a ampliar suas competências e aprofundar conhecimentos
            em áreas específicas. Carga horária variável e exige formação
            prévia.
          </Card.Text>
        </Card>
      </div>
    </div>
  );
};

export default Modalidades;
