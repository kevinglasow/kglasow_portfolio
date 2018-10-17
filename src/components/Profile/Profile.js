import React, { Component } from "react";
import {
    Card,
    Container,
    Row,
    Col
    } from 'reactstrap';
import BlackMage from "../../image/BlackMage.png";
import "../CSS/style.css"

class Profile extends Component {
    render () {
      return (
        <section className="background">
        <Container>
            <br />
            <Row>
                <Col md="1" />
                <Col md="3">
                    <Card>
                       <img top width="100%" src={ BlackMage } alt="It me"/>
                    </Card>
                </Col>
                <Col md="7">
                    <b>
                    <p>Hello, and thank you for visiting my portfolio!</p>
                    <p>I am a web developer with a passion for new technology and community building. Most recently I have graduated from the Trilogy Coding Boot-camp where I learned full stack web development.</p>
                    <p>I look forward to future opportunities and challenges that will continue to push me to learn 
                        and improve. My current goal is to find a diverse team where my talents and outlook can serve to help the group excel. 
                        I'd encourage you to look over my previous work in the "Portfolio" section and contact me with any of your thoughts and questions.</p>
                    </b>
                </Col>
                <Col md="1" />
            </Row>
        </Container>
        </section>
      );
    };
  }
  

export default Profile;