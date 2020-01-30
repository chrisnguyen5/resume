



import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Signup extends React.Component {
  state = {};
  render() {
    return (
      <div className="section section-signup">
        <Container>
          <div className="squares square-1" />
          <div className="squares square-2" />
          <div className="squares square-3" />
          <div className="squares square-4" />
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h3 className="display-3 text-white">
                Irvine based UX/UX designer and React.JS developer
              </h3>
              <p className="text-white mb-3">
                Available for contract and full-time work in the Orange County area or fully remote in all of the U.S or internationally.
              </p>
              
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <Card className="card-register">
                <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("assets/img/square-purple-1.png")}
                  />
                  <CardTitle tag="h4">&nbsp;Email</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form">
                    
                    <h3 className="display-3 text-white">
                chrisnguyen5
               <br />
                @gmail.com
              </h3>
                    
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-round" color="primary" size="lg"
                  href="mailto:chrisnguyen5@gmail.com?Subject=Hello%20there%20Chris" target="_top"
                  >
                    Send me good news
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Signup;
