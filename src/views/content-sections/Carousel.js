import React from "react";

// reactstrap components
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Col,
  Row,
  Container
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/images/cardas/2.jpg"),
    altText: "MK7",
    caption: "MK7"
  },
  {
    src: require("assets/images/cardas/3.jpg"),
    altText: "MK7",
    caption: "MK7"
  },
  {
    src: require("assets/images/cardas/4.jpg"),
    altText: "MK7",
    caption: "MK7"
  },
  {
    src: require("assets/images/cardas/5.jpg"),
    altText: "MK7",
    caption: "MK7"
  },
  {
    src: require("assets/images/cardas/6.jpg"),
    altText: "MK7",
    caption: "MK7"
  },
  {
    src: require("assets/images/cardas/7.jpg"),
    altText: "MK7",
    caption: "MK7"
  },
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    
    <>
      <div id="carousel">
        <Container>
          <Row className="justify-content-center">
            {/* <Col lg="8" md="12"> */}
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} style={{maxWidth: '100%'}} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            {/* </Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
