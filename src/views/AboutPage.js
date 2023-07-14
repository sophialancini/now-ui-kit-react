import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Sobre from "./index-sections/Sobre.js";
import SimpleHeader from "components/Headers/SimpleHeader.js";

function AboutPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

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
        <SimpleHeader ptTitle="Sobre nós" enTitle="About us" />
        <div className="main">
          <Sobre />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default AboutPage;
