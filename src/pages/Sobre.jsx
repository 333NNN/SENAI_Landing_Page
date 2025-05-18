import React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import YoutubeEmbed from "../functions/YoutubeEmbed.jsx";

const Sobre = () => {
  return (
    <div>
      <Container fluid lassName="mb-5">
        <h1 className="text-center mb-4">Sobre</h1>
        <Row>
          <Col className="d-flex justify-content-center align-items-center flex-column">
            <YoutubeEmbed embedId="8WaOdzMiVaY" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="text-center">História</h2>
            <Row>
              <Col md={6}>
                <p style={{ textAlign: "justify" }}>
                  O Senai surgiu no Espírito Santo em 25 de março de 1952. A
                  primeira escola funcionou em um galpão cedido pela CVRD (hoje
                  Vale). A primeira escola, chamada Pedro Nolasco, oferecia
                  cursos de marcenaria e mecânica, em Cariacica. Nos anos
                  seguintes, o Senai se expandiu para atender às necessidades da
                  indústria ferroviária, incorporando a Escola Ferroviária João
                  Neiva. Em 1964, foi inaugurado o Centro Jerônimo Monteiro em
                  Vitória, com equipamentos modernos e alta concorrência pelas
                  vagas. A expansão continuou nas décadas de 1970 e 1980, com
                  novos centros de formação em Cachoeiro de Itapemirim,
                  Linhares, Serra, Colatina e Vila Velha. Com o tempo, o Senai
                  se tornou uma referência em educação profissional, firmando
                  parcerias estratégicas com grandes empresas e expandindo seu
                  alcance para novos setores, como Automação, Construção Civil,
                  Tecnologia da Informação, entre outros. Para garantir o acesso
                  em todo o estado, também investiu em unidades móveis equipadas
                  para atender diferentes áreas da indústria. A inovação nunca
                  parou! Nos últimos anos, o Senai lançou iniciativas como o
                  Findeslab, um hub de inovação, o novo Instituto Senai de
                  Tecnologia, e a Academia de Segurança Cibernética. E para
                  facilitar ainda mais o acesso à educação, os cursos técnicos
                  ganharam um formato híbrido, com 80% online e 20% presencial.
                  Hoje, o Senai ES segue sua missão de qualificar profissionais
                  para a indústria, oferecendo cursos, consultorias e serviços
                  que atendem às demandas de um mercado em constante evolução.
                </p>
              </Col>

              <Col md={6}>
                <p style={{ textAlign: "justify" }}>
                  <strong>1930</strong> – Em 1938, a Confederação Nacional da
                  Indústria (CNI) é fundada a partir da fusão da Confederação
                  Industrial do Brasil (CIB) com diversas representações
                  sindicais patronais em todo o Brasil.
                  <br />
                  <br />
                  <strong>1940</strong> – Em 1942, o SENAI – Serviço Nacional de
                  Aprendizagem Industrial – é criado pela CNI, conforme o
                  Decreto-Lei nº 4.048, de 22 de janeiro de 1942, assinado pelo
                  presidente Getúlio Vargas.
                  <br />
                  <br />
                  <strong>1950</strong> – Por meio de uma parceria com a
                  Companhia Vale do Rio Doce (CVRD), em 1952 foi inaugurada a
                  primeira unidade Senai Escola de Aprendizagem Pedro Nolasco,
                  em Cariacica.
                  <br />
                  <br />
                  <strong>1960</strong> – A escola de Cariacica deu lugar ao
                  Centro de Formação Profissional Jerônimo Monteiro em Vitória,
                  no ano de 1964.
                  <br />
                  <br />
                  <strong>1970</strong> – Com a chegada de grandes projetos como
                  CST (Companhia Siderúrgica de Tubarão), Samarco e Aracruz
                  Celulose, houve grande expansão do SENAI. Surgem as unidades
                  móveis com laboratórios transportáveis.
                  <br />
                  <br />
                  <strong>1980</strong> – O SENAI expande sua atuação além da
                  indústria extrativa, abrangendo setores como Alimentos e
                  Bebidas, Automotiva, Automação, Construção Civil, Couro e
                  Calçado, Gestão, Gráfica, Metalmecânica, Eletroeletrônica,
                  Refrigeração e Climatização, Tecnologia da Informação, Madeira
                  e Mobiliário, Meio Ambiente, Minerais não-metálicos, Petróleo
                  e Gás, Polímeros, Segurança no Trabalho, Têxtil e Vestuário.
                  <br />
                  <br />
                  <strong>2010</strong> – O SENAI começa a oferecer consultorias
                  em eficiência energética. Em 2017, é criada a Diretoria de
                  Inovação, Tecnologia e Produtividade, que oferece serviços
                  nestas áreas para as empresas capixabas e em 2019 Inaugura o
                  hub de inovação - Findeslab, uma iniciativa conjunta do SENAI
                  e da FINDES.
                  <br />
                  <br />
                  <strong>2020</strong> – Em 2020 é inaugurado o novo espaço do
                  Instituto Senai de Tecnologia, no SENAI Vitória. No mesmo ano
                  os cursos técnicos do SENAI passaram a contar com um novo
                  formato: EaD com prática. Na habilitação técnica, os cursos
                  têm 80º/o da carga on-line e 20%, presencial. Além disso,
                  também em 2020, o SENAI ganhou uma Academia de Segurança
                  Cibernético. Os equipamentos e sistemas disponibilizados nas
                  unidades do Senai formam um ambiente seguro para realização de
                  competições cibernéticas, palestras, consultorias e cursos.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sobre;
