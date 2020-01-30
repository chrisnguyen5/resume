
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        
        <Container className="blur-hover">
          <div className="content-center brand">
            
            <img alt="Chris Nguyen Logo" className="blur-item" style={{width: '180px'}} src={require("assets/img/cn-logo.png")} />
            <h2 className="d-sm-block blur-item">
              User interface designer / <br />
               front end developer
            </h2>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
