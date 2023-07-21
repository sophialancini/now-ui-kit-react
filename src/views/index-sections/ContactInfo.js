import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { LanguageContext } from "App";
// core components

function ContactInfo() {

  const { language, updateLanguage } = React.useContext(LanguageContext);

  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h5 className="description">
                    Fates Ind., Com., Imp. e Exp. Máquinas Têxteis Ltda <br />
                    Rua Humberto Bereta, 321 <br />
                    Amparo, SP - Brasil - CEP 13900 220 <br />
                    <br />
                    { language === "pt" ?
                        (<div>Fone: 0055 (19) 3807 9947 <br /></div>) :
                        (<div>Phone: 0055 (19) 3807 9947 <br /></div>)
                    }
                    <br />
                    Fax: 0055 (19) 3807 4072 <br />
                    <br />
                    Mail: <Link 
                        to='javascript:void(0)'
                        onClick={() => window.location = 'mailto:fates@terra.com.br'}
                    >
                        fates@terra.com.br
                    </Link><br />
              </h5>
            </Col>
            <Col lg="6" md="12">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14722.981736677739!2d-46.7586269!3d-22.7005186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c92144f5d6e6cd%3A0x6d1f072132d1951a!2sFates%20Ind%C3%BAstria%20e%20Com%C3%A9rcio%20M%C3%A1quinas%20T%C3%AAxteis!5e0!3m2!1sen!2sbr!4v1684872338166!5m2!1sen!2sbr" 
                width="400px" 
                height="400px" 
                style={{border:'0'}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactInfo;
