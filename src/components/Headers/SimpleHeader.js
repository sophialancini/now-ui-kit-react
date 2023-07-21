import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import { LanguageContext } from "App";

// core components

function SimpleHeader(props) {
  const { language, updateLanguage } = React.useContext(LanguageContext);

  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundColor: "#0d67b8"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
              { language === "pt" ?
                (<h1 className="title">{props.ptTitle}</h1>) :
                (<h1 className="title">{props.enTitle}</h1>)
              }
          </Container>
        </div>
      </div>
    </>
  );
}

export default SimpleHeader;
