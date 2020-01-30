



import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Examples extends React.Component {
  render() {
    return (
      <div className="section section-examples" data-background-color="black">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <div className="space-50" />
        <Container className="text-center">
        <h3 className="title">Latest Work</h3>
          <Row>
            <Col sm="6" className="blur-hover">
              <Link to="https://www.yamaha.com/us/yvn/">
                <img
                  alt="..."
                  className="img-raised blur-item"
                  src={require("assets/img/yamaha_1.jpg")}
                />
              </Link>
              <Button
                className="btn-simple btn-round"
                color="primary"
                target="_blank"
                href="https://usa.yamaha.com/news_events/namm/index.html"
              >
                View 
              </Button>
            </Col>


            <Col sm="6" className="blur-hover">
              <Link to="https://www.yamaha.com/us/yvn/">
                <img
                  alt="..."
                  className="img-raised blur-item"
                  src={require("assets/img/yamaha_1050x700.jpg")}
                />
              </Link>
              <Button
                className="btn-simple btn-round"
                color="primary"
                 target="_blank"
                href="https://www.yamaha.com/us/yvn/"
              >
                View 
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Examples;
