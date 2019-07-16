import React from "react";

// reactstrap components
import {
  Button,
  FormGroup,
  Input,
  Container,
  Modal,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover
} from "reactstrap";

// core components

function Javascript() {
  return (
    <>
      <div className="section section-javascript" id="javascriptComponents">
        <Container>
          <h3 className="title">Javascript components</h3>
          <Row id="modals">
            <Col md="6">
              <h4>Modal</h4>
              <Button
                color="primary"
                data-target="#myModal"
                data-toggle="modal"
              >
                Launch Modal
              </Button>
              <Button
                color="warning"
                data-target="#myModal1"
                data-toggle="modal"
              >
                Launch Modal Mini
              </Button>
              <Modal>
                <div className="modal-header justify-content-center">
                  <button
                    aria-hidden={true}
                    className="close"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Modal title</h4>
                </div>
                <div className="modal-body">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
                <div className="modal-footer">
                  <Button color="default" type="button">
                    Nice Button
                  </Button>
                  <Button color="danger" data-dismiss="modal" type="button">
                    Close
                  </Button>
                </div>
              </Modal>
              <Modal modalclassName="modal-mini modal-primary">
                <div className="modal-header justify-content-center">
                  <div className="modal-profile">
                    <i className="now-ui-icons users_circle-08"></i>
                  </div>
                </div>
                <div className="modal-body">
                  <p>Always have an access to your profile</p>
                </div>
                <div className="modal-footer">
                  <Button className="btn-neutral" color="link" type="button">
                    Back
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    data-dismiss="modal"
                    type="button"
                  >
                    Close
                  </Button>
                </div>
              </Modal>
            </Col>
            <Col md="6">
              <h4>Popovers</h4>
              <Button
                color="default"
                data-color="primary"
                data-container="body"
                data-content="Here will be some very useful information about his popover."
                data-placement="left"
                id="tooltip175489643"
                type="button"
              >
                On left
              </Button>
              <UncontrolledPopover placement="left" target="tooltip175489643">
                <PopoverHeader>Popover On Left</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color="default"
                data-container="body"
                data-content="Here will be some very useful information about his popover."
                data-placement="top"
                id="tooltip768569110"
                type="button"
              >
                On top
              </Button>
              <UncontrolledPopover placement="top" target="tooltip768569110">
                <PopoverHeader>Popover on Top</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color="default"
                data-placement="right"
                id="tooltip966745638"
                type="button"
              >
                On right
              </Button>
              <UncontrolledPopover placement="right" target="tooltip966745638">
                <PopoverHeader>Popover on Right</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                  <br /> Here will be some very useful information about his
                  popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color="default"
                data-container="body"
                data-content="Here will be some very useful information about his popover."
                data-placement="bottom"
                id="tooltip822900491"
                type="button"
              >
                On bottom
              </Button>
              <UncontrolledPopover placement="bottom" target="tooltip822900491">
                <PopoverHeader>Popover on Bottom</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                </PopoverBody>
              </UncontrolledPopover>
            </Col>
            <br></br>
            <br></br>
            <Col md="6">
              <h4>Datepicker</h4>
              <Row>
                <Col md="6">
                  <div className="datepicker-container">
                    <FormGroup>
                      <Input
                        className="date-picker"
                        data-datepicker-color="primary"
                        defaultValue="10/05/2016"
                        type="text"
                      ></Input>
                    </FormGroup>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <h4>Tooltips</h4>
              <Button
                className="btn-tooltip"
                color="default"
                data-animation={true}
                data-container="body"
                data-delay="100"
                data-placement="left"
                id="tooltip116884155"
                type="button"
              >
                On left
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="left"
                target="tooltip116884155"
              >
                Tooltip on left
              </UncontrolledTooltip>
              <Button
                className="btn-tooltip"
                color="default"
                data-animation={true}
                data-container="body"
                data-placement="top"
                id="tooltip502327420"
                type="button"
              >
                On top
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="top"
                target="tooltip502327420"
              >
                Tooltip on top
              </UncontrolledTooltip>
              <Button
                className="btn-tooltip"
                color="default"
                data-animation={true}
                data-container="body"
                data-placement="bottom"
                id="tooltip243887155"
                type="button"
              >
                On bottom
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="bottom"
                target="tooltip243887155"
              >
                Tooltip on bottom
              </UncontrolledTooltip>
              <Button
                className="btn-tooltip"
                color="default"
                data-animation={true}
                data-container="body"
                data-placement="right"
                id="tooltip542703310"
                type="button"
              >
                On right
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="right"
                target="tooltip542703310"
              >
                Tooltip on right
              </UncontrolledTooltip>
              <div className="clearfix"></div>
              <br></br>
              <br></br>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Javascript;