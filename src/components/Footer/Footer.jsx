



import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="12" className="text-center blur-hover">
              <img alt="Chris Nguyen Logo" className="text-center blur-item" style={{width: '150px'}} src={require("assets/img/cn-logo.png")} />
            </Col>

            

           

           


          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
