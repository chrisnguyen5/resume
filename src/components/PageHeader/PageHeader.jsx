
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter blur-hover">
        <div className="squares square1 blur-item" />
        <div className="squares square2 blur-item" />
        <div className="squares square3 blur-item" />
        <div className="squares square4 blur-item" />
        <div className="squares square5 blur-item" />
        <div className="squares square6 blur-item" />
        <div className="squares square7 blur-item" />
        
        <Container className="blur-hover">
          <div className="content-center brand">
            
            <img alt="Chris Nguyen Logo" className="" style={{width: '200px'}} src={require("assets/img/cn-logo.png")} />
            <h4 className="d-sm-block">
              User interface designer / <br />
               front end developer
            </h4>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
