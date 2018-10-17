import React, { Component } from 'react';
import { Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  Button,
  Container,
  Row,
  Col
 } from 'reactstrap';
 import Cleveland from "../../image/cleveland.jpg";
 import EventFinderLogo from "../../image/Event.png";
 import giphyLogo from "../../image/giphy.png";
 import NYTscraperLogo from "../../image/nyt.png";
 import liriLogo from "../../image/liriLogo.webp";
 import codeCollabLogo from "../../image/codeCollab.jpg"
 import "../CSS/style.css"
 
class Portfolio extends Component {
  render() {
    return (
      <section className="background">
      <Container>
        <br /> 
        <Row>
          <Col>
            <Card>
              <CardImg top width="100%" src={ Cleveland } alt="MyCLE" width="318" height="200" />
              <CardBody>
                <CardTitle>MyCLE</CardTitle>
                <CardText>A full stack web applicaton that allows user to find and review attractions around the greater Cleveland area.</CardText>
                <a href="https://mycle.herokuapp.com/" target="blank">
                  <Button color="primary">Checkout the Site!</Button>
                </a>
                </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src={ EventFinderLogo} alt="Event Finder" width="318" height="200" />
              <CardBody>
                <CardTitle>Event Finder</CardTitle>
                <CardText>Using API calls to the Eventful and Google Maps APIs this app allows users to find and map events near them.</CardText>
                <a href="https://best-project-group.github.io/Event-Tinder/" target="blank">
                  <Button color="primary">Checkout the Site!</Button>
                </a>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src={ liriLogo } alt="Liri" width="318" height="200" />
              <CardBody>
                <CardTitle>Liri</CardTitle>
                <CardText>A command line based app that uses node modules to make api calls based on user input.</CardText>
                <a href="https://github.com/kevinglasow/liri-node-app" target="blank">
                  <Button color="primary">Checkout the Repo!</Button>
                </a>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
        <br />

        <Row>
          <Col>
            <Card>
              <CardImg top width="100%" src={ NYTscraperLogo } alt="Card image cap" width="318" height="200" />
              <CardBody>
                <CardTitle>NYT Scrapper</CardTitle>
                <CardText>Scrape the NYT history in this React based app and store your searched in a MongoDB structure.</CardText>
                <a href="https://nyt-react-kg.herokuapp.com/" target="blank">
                  <Button color="primary">Checkout the Site!</Button>
                </a>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src={ giphyLogo } alt="Giphy App" width="318" height="200" />
              <CardBody>
                <CardTitle>Giphy App</CardTitle>
                <CardText>A simple front end app that searches the Giphy API and allows users to form their own search routes.</CardText>
                <a href="https://kevinglasow.github.io/giphy-app/" target="blank">
                  <Button color="primary">Checout the Site!</Button>
                </a>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src={ codeCollabLogo } alt="Code Collab" width="318" height="200" />
              <CardBody>
                <CardTitle>Code Collab</CardTitle>
                <CardText>A fulll stack applicaton allows users to request help on coding projects and match with coders who can provide aid.</CardText>
                <a href="https://codingcollab.herokuapp.com/" target="blank">
                  <Button color="primary">Checout the Site!</Button>
                </a>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </section>
  );
};
}

export default Portfolio;