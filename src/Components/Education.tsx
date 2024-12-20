import { Card, Container, Row, Col } from "react-bootstrap";
import { FaUserGraduate } from "react-icons/fa";

export default function Education() {
  return (
    <div>
      {/* Section Header */}
      <div
        className="d-flex align-items-center justify-content-center position-relative"
        style={{ minHeight: "20vh", background: "#000" }}
      >
        {/* Horizontal Line */}
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

        {/* Centered Card Header */}
        <Card
          bg="black"
          className="text-center"
          style={{
            width: "50%",
            maxWidth: "300px",
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
            border: "1px solid white",
            zIndex: 2,
          }}
        >
          <Card.Header style={{ color: "white" }}>Education</Card.Header>
        </Card>
      </div>

      {/* Main Content */}
      <Container fluid id="education-section" className="py-4">
        <Row className="justify-content-center gx-4 gy-5">
          {/* Card 1 */}
          <Col xs={12} md={8} lg={6}>
            <Card
              bg="black"
              className="h-100"
              style={{
                boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
                border: "1px solid white",
                overflow: "hidden",
              }}
            >
              <Card.Body>
                <Card.Header className="text-white d-flex justify-content-between align-items-center border-bottom">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-danger me-2" style={{ width: "12px", height: "12px" }}></div>
                    <div className="rounded-circle bg-success me-2" style={{ width: "12px", height: "12px" }}></div>
                    <div className="rounded-circle bg-primary me-2" style={{ width: "12px", height: "12px" }}></div>
                  </div>
                  <FaUserGraduate style={{ fontSize: "2rem", color: "#FFCB6B" }} />
                </Card.Header>
                <Card.Text className="text-center mt-3">
                  <Row className="align-items-center g-3">
                    <Col xs={12} sm={5} className="text-center">
                      <img
                        src="/sreenivas_portfolio/Assets/ed.jpg"
                        alt="Master's Degree"
                        className="img-fluid rounded"
                        style={{ objectFit: "cover", maxHeight: "180px" }}
                      />
                    </Col>
                    <Col xs={12} sm={7} className="text-start">
                      <h4 style={{ color: "white", fontWeight: "bold" }}>2023 - PRESENT</h4>
                      <h3 style={{ color: "white", fontWeight: "bold" }}>Master’s Degree</h3>
                      <p style={{ color: "#C0C0C0", fontWeight:"bold" }}>Computer Science</p>
                      <p style={{ color: "#C0C0C0", fontWeight:"bold"}}>Indiana University Bloomington</p>
                      <p style={{ color: "#C0C0C0", fontWeight:"bold"}}>Applied Algorithms, Software Engineering, Cross-Platform Mobile Development, Advanced Database Conepts</p>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={12} md={8} lg={6}>
            <Card
              bg="black"
              className="h-100"
              style={{
                boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
                border: "1px solid white",
                overflow: "hidden",
              }}
            >
              <Card.Body>
                <Card.Header className="text-white d-flex justify-content-between align-items-center border-bottom">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-danger me-2" style={{ width: "12px", height: "12px" }}></div>
                    <div className="rounded-circle bg-success me-2" style={{ width: "12px", height: "12px" }}></div>
                    <div className="rounded-circle bg-primary me-2" style={{ width: "12px", height: "12px" }}></div>
                  </div>
                  <FaUserGraduate style={{ fontSize: "2rem", color: "#FFCB6B" }} />
                </Card.Header>
                <Card.Text className="text-center mt-3">
                  <Row className="align-items-center g-3">
                    <Col xs={12} sm={5} className="text-center">
                      <img
                        src="/sreenivas_portfolio/Assets/ssn.jpg"
                        alt="Bachelor's Degree"
                        className="img-fluid rounded"
                        style={{ objectFit: "cover", maxHeight: "180px" }}
                      />
                    </Col>
                    <Col xs={12} sm={7} className="text-start">
                      <h4 style={{ color: "white", fontWeight: "bold" }}>2017 - 2021</h4>
                      <h3 style={{ color: "white", fontWeight: "bold" }}>Bachelor’s Degree</h3>
                      <p style={{ color: "#C0C0C0" }}>B.Tech Information Technology</p>
                      <p style={{ color: "#C0C0C0" }}>SSN College of Engineering</p>
                      <p style={{ color: "#C0C0C0", fontWeight:"bold"}}>Object-Oriented Programming,Data Structures, Web Technology, Operating Systems, Computer Networks</p>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
