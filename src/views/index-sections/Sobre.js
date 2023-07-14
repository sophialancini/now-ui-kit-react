import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import { LanguageContext } from "App";

// core components

function Sobre() {

  const { language, setLanguage } = React.useContext(LanguageContext);

  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              { language === "pt" ?
                (<div>
                  {/* <h2 className="title">Sobre nós</h2> */}
                  <h5 className="description">
                  A FATES foi criada em 2004 para oferecer uma alternativa ao mercado Têxtil latino americano (mais especificamente o mercado de fiação) sendo um contraponto aos tradicionais fabricantes de máquinas para fiação. Localizada em Amparo SP é a única empresa genuinamente brasileira no mercado têxtil de máquinas para fiação e atua em todo mercado latino americano.
                  <br />
                  Produzindo Passadores de alto rendimento, com e sem autoregulador e completando toda a linha de fiação desde o fardo até o fio acabado através de representação de fabricantes renomados mundialmente, assume espaço destacado no mercado brasileiro.
                  <br />
                  Temos como principal objetivo oferecer equipamentos e soluções da mais alta tecnologia, equipamentos esses de operação amigável e a custos de aquisição e manutenção acessíveis. Contando com equipe qualificada para auxílio técnico pós venda.
                  </h5>
                </div>) :
                (<div>
                  {/* <h2 className="title">About us</h2> */}
                  <h5 className="description">
                  FATES was founded in 2004 with the purpose of offering an alternative to the Latin American textile market (more specifically the spinning market) being a counterpoint to traditional manufacturers of machines for spinning. Located in Amparo, in the brazilian State of São Paulo, is the only genuinely Brazilian company in the textile spinning machinery market and operates throughout the Latin American market.
                  <br />
                  Producing high-performance dowels, with and without autoregulator and completing the entire line of wiring from the bale to the finished wire through representation of renowned manufacturers world, it assumes prominent space in the Brazilian market.
                  <br />
                  Our main goal is to offer equipment and solutions of the highest technology, equipment and at affordable acquisition and maintenance costs. Counting on qualified team for after sales technical assistance.
                  </h5>
                </div>)
              }
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Sobre;
