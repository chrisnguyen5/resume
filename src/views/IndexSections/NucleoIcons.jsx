







import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class NucleoIcons extends React.Component {
  render() {
    return (
      <div className="section section-nucleo-icons">
        <img alt="..." className="path" src={require("assets/img/path3.png")} />
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <h2 className="title">Nucleo Icons</h2>
              <h4 className="description">
                BLK• Design System PRO comes with 100 custom icons made by our
                friends from NucleoApp. The official package contains over 2.100
                thin icons which are looking great in combination with BLK•
                Design System PRO Make sure you check all of them and use those
                that you like the most.
              </h4>

              <div className="btn-wrapper">
                <Button
                  className="btn-round"
                  color="primary"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View 
                </Button>

                <Button
                  className="btn-simple btn-round"
                  color="primary"
                  href=""
                  rel="noopener noreferrer"
                  size="lg"
                  target="_blank"
                >
                  View Icons
                </Button>

              </div>
            </Col>
          </Row>

          <div className="blur-hover">
            <a href="#">
              <div className="icons-container blur-item on-screen mt-5">
                {/* Center */}
               
                
                {/* Right 1 */}
                <img alt="Chris Nguyen Logo" className="" src={require("assets/img/cn-logo.png")} />
                {/* Right 2 */}
                
             
                {/* Left 1 */}
               <img alt="Chris Nguyen Logo" className="" src={require("assets/img/cn-logo.png")} />
                {/* Left 2 */}
                 <img alt="Chris Nguyen Logo" className="" src={require("assets/img/cn-logo.png")} />
              </div>
              <span className="blur-hidden h5 text-primary">
                Eplore all the 21.000+ Nucleo Icons
              </span>
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

export default NucleoIcons;
