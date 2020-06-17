




import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <div className="section section-typo">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path3.png")}
        />
        <Container>
          <h3 className="title">Full Time Experience</h3>
          <div id="typography">
            <Row>
              <Col md="12">


               <div className="typography-line">
                  <h1>
                  <a href="https://www2.calstate.edu/" target="_blank">
                    California State University: Office of the Chancellor
                     </a>
                  </h1>
                  <h4>
                    UX/UI Designer & Developer
                  </h4>
                </div>
                 <div className="typography-line">
                  <p>
                    <span>August 2019 - February 2020</span>
                    Works with all Adobe design applications and modern front end technologies to create innovative charts, graphs, and interactive web interfaces on existing web applications. Collaboration involves data scientists and full-stack developers to build out data visualization primarly for the student dashbaords site across all CSU campuses. Technologies include HTML5, CSS3, custom and modern Javascript (ES6), Bootstrap, and Material Design.
                  </p>
                </div>


                <div className="typography-line">
                  <h1>
                  <a href="https://www.yamaha.com/" target="_blank">
                    Yamaha
                     </a>
                  </h1>
                  <h4>
                    UX/UI Designer & Developer
                  </h4>
                </div>
                 <div className="typography-line">
                  <p>
                    <span>June 2018 - June 2019</span>Designing and front-end development for B2C and internal sites. Tasks include creating digital assets, working with CMS(Magento), dealing with Javascript libraries(Handlebars JS), and building custom HTML/CSS/Javascript files.
                  </p>
                </div>


                <div className="typography-line">
                  <h1>
                    <a href="https://www.pimco.com/" target="_blank">
                    Pimco
                     </a>
                  </h1>
                   <h4>
                    UX/UI Designer
                  </h4>
                </div>
                  <div className="typography-line">
                  <p>
                    <span>October 2017 - May 2018</span>In charge of creating and designing websites, wireframes, mobile UI, landing pages, emails, newsletters and apps. Supplied branding and digital assets for development team along with creating easy to navigate user flow with data-heavy content.
                  </p>
                </div>

                <div className="typography-line">
                  <h1>
                    <a href="https://oneandall.com/" target="_blank">
                    One & All
                     </a>
                  </h1>
                   <h4>
                    E-mail Developer / Front-end Developer
                  </h4>
                </div>
                  <div className="typography-line">
                  <p>
                    <span>September 2015 - October 2017</span>Full-time E-mail development with high level regional campaigns for major non-profit organizations(The Red Cross, The Salvation Army, etc...) Task involves design and full-end development projects, landing pages using HTML5/CSS3 & AngularJS along with testing.
                  </p>
                </div>
                

                <div className="typography-line">
                  <h1>
                    <a href="https://www.citent.com/" target="_blank">
                    Citent
                     </a>
                  </h1>
                   <h4>
                    Front End Developer / Designer
                  </h4>
                </div>
                  <div className="typography-line">
                  <p>
                    <span>October 2009 - Present</span>Remote work includes designing wireframes, develop UX/UI marketing material for partnership clients ( IBM, Google, and Box Inc.) Also maintaining and concepting front-end content for company website using Photoshop, HTML5/CSS3, Bootstrap, and jQuery.
                  </p>
                </div>

                 </Col>
            </Row>
          </div>
          
        </Container>









                <Container>
          <h3 className="title">Freelance Experience</h3>
          <div id="typography">
            <Row>
              <Col md="12">


                <div className="typography-line">
                  <h1>
                    <a href="https://www.boeing.com/" target="_blank">
                    Boeing
                     </a>
                  </h1>
                   <h4>
                    UI/UX Designer & Developer
                  </h4>
                </div>
                  <div className="typography-line">
                  <p>
                    <span>June 2015 - June 2017</span>Lead design projects involvement in concepting the user experience from stratch to finish with front end development. Design and develop training catalogs to a responsive & interactive web experience. Rapid prototyping and staging to final phase involvement using Photoshop, HTML5/CSS3, Boostrap, & jQuery.
                  </p>
                </div>
                

                <div className="typography-line">
                  <h1>
                    <a href="https://www.realpie.com/" target="_blank">
                    Real Pie
                     </a>
                  </h1>
                   <h4>
                    UI/UX Designer
                  </h4>
                </div>
                  <div className="typography-line">
                  <p>
                    <span>March 2014 -September 2014</span>
                    Designed and revamped more than 50+ pages of the current Beachbody.com E-commerce site to a mobile-first experience. Also led team with creating style guide template and wireframes using Photoshop & illustrator.
                  </p>
                </div>


                 <div className="typography-line">
                  <h1>
                    <a href="https://www.citrusstudios.com/" target="_blank">
                   Citrus Studios
                     </a>
                  </h1>
                   <h4>
                    Front End & Lead UX/UI Designer
                  </h4>
                </div>
                  <div className="typography-line">
                  <p>
                    <span>October 2013 – January 2014</span>
                    Led UI/UX experiences for notable organizations within the Los Angeles area. Sole projects ownership involved creating wireframes from research to designing the concepts using Photoshop & illustrator and conducting presentation meetings for clients.
                  </p>
                </div>


                <div className="typography-line">
                  <h1>
                    <a href="http://mirumshopper.com/" target="_blank">
                   Lunchbox
                     </a>
                  </h1>
                   <h4>
                    Interactive Designer
                  </h4>
                </div>
                  <div className="typography-line">
                  <p>
                    <span>August 2013 – October 2013</span>
                    Design/conceptualize brand engagement pages. Delivered and prepared production assets for major consumer brands(Walmart & T-Mobile.)
                  </p>
                </div>
                
               
               
                
                
               
              </Col>
            </Row>
          </div>
          
        </Container>
      </div>
    );
  }
}

export default Typography;
