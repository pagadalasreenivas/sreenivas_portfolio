import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <div>
      {/* Header Section */}
      <div
        className="d-flex align-items-center justify-content-center position-relative"
        style={{ minHeight: "30vh", background: "#000" }}
      >
        {/* Horizontal line */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "2px",
            background: "white",
            zIndex: 1,
          }}
        ></div>

        {/* Centered card */}
        <Card
          bg="black"
          className="text-center"
          style={{
            width: "20%",
            minWidth: "200px", // Ensure width adjusts for smaller screens
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
            overflow: "hidden",
            border: "1px solid white",
            zIndex: 2,
          }}
        >
          <Card.Header style={{ color: "white" }}>About</Card.Header>
        </Card>
      </div>

      {/* Content Section */}
      <Container fluid className="py-5" style={{ backgroundColor: "#000" }}>
        <Row className="align-items-center text-white">
          {/* Text Section */}
          <Col
            md={6}
            sm={12}
            className="px-4 mb-4 mb-md-0" // Adds margin-bottom for smaller screens
          >
            <h3
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "20px",textAlign:'center'
              }}
            >
              <span className="text-primary align-items-center">My Journey</span>
            </h3>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "#ddd",
                fontWeight: "500",
              }}
            >
              I am currently pursuing my MS in CS at Indiana University
              Bloomington. I have experience as a full-stack developer at Optum,
              specializing in Java, React, Python, and SQL.
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "#ddd",
                fontWeight: "500",
              }}
            >
              At Optum, I developed scalable applications and worked in agile
              teams to drive business outcomes. My skills include Web
              development and RESTful APIs.
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "#ddd",
                fontWeight: "500",
              }}
            >
              I’m passionate about leveraging technology to solve problems and
              continuously learning to stay ahead in the tech industry.
            </p>
          </Col>

          {/* Image Section */}
          <Col md={6} sm={12} className="d-flex justify-content-center">
            <div style={{ position: "relative", width: "100%", maxWidth: "500px" }}>
              <img
                src={`${process.env.PUBLIC_URL}/Assets/aboutme.jpg`}
                alt="About Me"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                }}
              />
              {/* Decorative Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))",
                  borderRadius: "20px",
                }}
              ></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
