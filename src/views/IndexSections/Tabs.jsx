





import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <div className="section section-tabs">
        <Container>
          <div className="title">
            <h3 className="mb-3">My Tools</h3>
          </div>
          
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="12">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  Please click on the tabs to see a list of applications I work with on a daily basis. 
                </small>
              </div>
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 1
                        })}
                        onClick={e => this.toggleTabs(e, "iconTabs", 1)}
                        href="#pablo"
                      >
                        <i className="fas fa-code" />
                         &nbsp; Web Technologies
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 2
                        })}
                        onClick={e => this.toggleTabs(e, "iconTabs", 2)}
                        href="#pablo"
                      >
                        <i className="fas fa-magic" />
                        &nbsp; Design 
                      </NavLink>
                    </NavItem>

                   

                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.iconTabs}
                  >
                    <TabPane tabId="link1">



                     


                        <div className="table-responsive">
                     <table className="table table-bordered">
                      
                <tbody className="text-center">
                  <tr>
                <td><i class="fab fa-html5 fa-lg"></i><br />HTML5</td>
                 <td><i class="fab fa-css3-alt fa-lg"></i><br />CSS3</td>
                  <td><i class="fab fa-sass fa-lg"></i><br />SASS</td>
                  </tr>
                  <tr>
                <td><i class="fas fa-mobile-alt fa-lg"></i><br />Bootstrap</td>
                 <td><i class="fab fa-js fa-lg"></i><br />Javascript</td>
                  <td><i class="fab fa-react fa-lg"></i><br />React</td>
                  </tr>
                   <tr>
                
                 <td><i class="fab fa-codepen fa-lg"></i><br />jQuery </td>
                 <td><i class="fas fa-code fa-lg"></i><br />Handlebars.JS </td>
                 <td><i class="fab fa-php fa-lg"></i><br />PHP</td>
                  </tr>
                  <tr>
                

                 <td><i class="fab fa-npm fa-lg"></i><br />NPM</td>
                 <td><i class="fab fa-node fa-lg"></i><br />Node</td>
                 <td><i class="fab fa-github fa-lg"></i><br />Github </td> 
                 
                  </tr>
               </tbody>
             </table>
              </div>


                    </TabPane>
                    <TabPane tabId="link2">
                     

                        <div className="table-responsive">
                     <table className="table table-bordered">
                      
                <tbody className="text-center">
                  <tr>
                <td><i class="far fa-object-group fa-lg"></i><br />Adobe Apps</td>
                 <td><i class="far fa-gem fa-lg"></i><br />Sketch</td>
                 <td><i class="fab fa-wordpress-simple fa-lg"></i><br />Wordpress</td>
                
                  </tr>
                  
                   
                   </tbody>
                   </table>
                   </div>


                    </TabPane>
                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tabs;
