import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Carousel from "views/content-sections/Carousel";
import SimpleHeader from "components/Headers/SimpleHeader.js";
import { LanguageContext } from "App.js";

function CardasPage() {
  const { language, setLanguage } = React.useContext(LanguageContext);

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <SimpleHeader ptTitle="Cardas" enTitle="Cards" />
        <div className="main">
          <div className="section">
            <Container>
              <h2 className="title">
                {language === "pt" ?
                  ("Carda MK7 CROSROL características técnicas") :
                  ("CROSROL MK7 Card - technical characteristics")
                }
              </h2>
              <div id="content-line">
                <Row>
                    <div className="content-line">
                      <span className="content-img">
                        <img
                          alt="..."
                          src={require("assets/images/cardas/1.jpg")}
                          className="cntnt-img"
                        ></img>
                      </span>
                      <p>
                      { language === "pt" ?
                          (<ul>
                            <li>Maior área de Cardagem - 245º de abrangência no Cilindro (Tambor)</li>
                            <li>Velocidade de Cardagem até 900 RPM, atinge velocidades superficial de até 42,5 m/seg</li>
                            <li>O diamêtro de 40” do Cilindro gera a maior força centrifuga disponível em Cardas existente no mundo</li>
                            <li>O design revolucionário da carda MK7 garante a soluçao perfeita para uma fiação de alta eficiência</li>
                            <li>Superioridade tecnológica, conceitos inovadores, com baixo custo de aquisição e operação</li>
                            <li>Todos os rolos de processamento de material são controlados digitalmente por inversores de frequencia</li>
                            <li>Exclusivo sistema de controle de resíuos “Dial-in” permite o ajuste rápido de cardagem sem interromper a produção</li>
                            <li>Construção modular da estrutura em “A” proporciona maior estabilidade</li>
                          </ul>) :
                          (<ul>
                            <li>Higher Carding area - 245º carding lengh around the Cylinder</li>
                            <li>High Carding speed up to 900 RPM, at surface speeds over 42,5 meter per second</li>
                            <li>40” diameter card Cylinder results in the highest generation centrifugal forces available in the world</li>
                            <li>The innovative design of the MK7 card ensures the perfect solution for high efficiency spinning units</li>
                            <li>Technological superiority, innovative concepts, with exceptional low owning and operating costs</li>
                            <li>All material processing rollers driven by frequency controlled digial invertors</li>
                            <li>Unique waste control system "Dial-in" ensure a faster changes of carding settings without stop the machine</li>
                            <li>Modular card “A” frame construction ensures maximum engineering design strength</li>
                          </ul>)
                        }
                      </p>
                    </div>
                    <div className="content-line">
                      <p>
                      { language === "pt" ?
                          (<ul style={{marginBottom: '0px !important'}}>
                            <li>Sistema de montagem e acionamento dos Flats Rotativo permite uma operação livre de manutenção</li>
                            <li>Sistema multiponto de limpeza com extração separada de resíduos "Limpos" e "Sujos"</li>
                            <li>Sistema otimizado de limpeza com consumo de apenas 3700 m3/hora assegura um baixo consumo de ar e energia</li>
                            <li>Sistema de auto regulador para médio e longo período com limites programáveis de correções para especificações de qualidade</li>
                            <li>Sistema de controle por CLP da Siemens e Display operacional tipo full colour touch screen com teclas do tipo touch-sensitive</li>
                            <li>Chute Feed Integrado assegura regularidade na alimentação e menor variação na mecha</li>
                          </ul>) :
                          (<ul>
                            <li>Revolutionary flats monting and driving systems for maintenace free performance</li>
                            <li>Optimised permanent suction system ensure a low air requirement of only 3700 m3/h resulting in major costs saving</li>
                            <li>Waste removal system ensure separation of "Clean" and "Dirt" card wastes</li>
                            <li>Auto-levelling systems for long-term and mid-term with programmable correction limits to suit mill specific quality standards</li>
                            <li>PLC based control system from Siemens and full colour touch screen operating display with touch-sensitive keys</li>
                            <li>Integrated chute feed for optimum batt regularity and much improved sliver variation</li>
                          </ul>)
                        }
                      </p>
                      <Col md="6" className="content-carousel" >
                        <Carousel />
                      </Col>
                    </div>
                    <div className="content-line">
                      <p>
                      { language === "pt" ?
                          (<ul>
                            <li>Coiler planetario remoto de simples instalação, sem necessidade de fundações pois não possui mecanismo para girar o vaso</li>
                            <li>Trocador de vaso linear ocupa menos espaço que o de tipo carrossel</li>
                            <li>Dimensões compactas, proporcionam economia de espaço com alta produtividade - até 140 kg/hora</li>
                          </ul>) :
                          (<ul>
                            <li>Remote planetary coiler, simple installation no underfloor driving mechanism required</li>
                            <li>Linear automatic can changing requires less floor space than carousel type</li>
                            <li>Compact size, provide space savings with high production rate - up to 140 kg per hour</li>
                          </ul>)
                        }
                      </p>
                    </div>
                </Row>
                <Row className="download-row">
                  { language === "pt" ?
                    (<h6 className="download-info">Para maiores informações técnicas faça o download do folheto completo </h6>) :
                    (<h6 className="download-info">For more technical information please download the complete brochure </h6>)
                  }
                  <a
                    target="_blank"
                    href={ language === "pt" ?
                      require("../assets/files/MK7.pdf") :
                      require("../assets/files/MK7en.pdf")
                    }
                  >
                    <Button
                      className="btn-round"
                      color="info"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_cloud-download-93" style={{ paddingRight: "5px" }}></i>
                      Download
                    </Button>
                  </a>
                </Row>
                <Row className="video-row">
                  <Col md="7">
                    <iframe style={{aspectRatio: "16 / 9", width: "100%"}} src="https://www.youtube.com/embed/odqjgtz9E3U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default CardasPage;
