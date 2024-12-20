import { Container, Card, Row, Col } from "react-bootstrap";
import { FaUserGraduate } from "react-icons/fa6";

export default function Experience() {
  return (
    <div>
      {/* Section Title */}
      <div className="d-flex align-items-center justify-content-center position-relative"
      style={{ minHeight: "30vh", background: "#000" }}>
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
        <Card
          bg="black"
          className="text-center"
          style={{
            width: "80%",
            maxWidth: "400px",
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
            overflow: "hidden",
            border: "1px solid white",
            zIndex: 2,
          }}
        >
          <Card.Header style={{ color: "white" }}>Experience</Card.Header>
        </Card>
      </div>

      {/* Main Content */}
      <Container fluid className="home-section" id="home" style={{ padding: "20px" }}>
        <Row className="align-items-center" style={{ minHeight: "30vh" }}>
          {/* Left Section: Image */}
          <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
            <img
              src="/sreenivas_portfolio/Assets/expierence.png"
              alt="Experience"
              className="img-fluid"
              style={{
                objectFit: "cover",
                borderRadius: "10px",
                width:700,
                height:700
              }}
            />
          </Col>

          {/* Right Section: Cards */}
          <Col xs={12} md={6}>
            <div className="d-flex flex-column gap-4">
              {/* Individual Experience Cards */}
              {[
                {
                  date: "JUL 2024 - AUG 2024",
                  company: "SNS Technologies LLC.",
                  role: "Software Engineering Intern",
                },
                {
                  date: "DEC 2021 - MAY 2023",
                  company: "Optum Global Solutions",
                  role: "Software Engineer",
                },
              ].map((experience, index) => (
                <Card
                  bg="black"
                  key={index}
                  style={{
                    width: "100%",
                    boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
                    overflow: "hidden",
                    border: "1px solid white",
                  }}
                >
                  <Card.Body>
                    <Card.Header
                      className="text-white"
                      style={{ borderBottom: "1px solid white" }}
                    >
                      <div className="d-flex align-items-center">
                        <div
                          className="rounded-circle bg-danger"
                          style={{ width: "12px", height: "12px", margin: "4px" }}
                        ></div>
                        <div
                          className="rounded-circle bg-success"
                          style={{ width: "12px", height: "12px", margin: "4px" }}
                        ></div>
                        <div
                          className="rounded-circle bg-primary"
                          style={{ width: "12px", height: "12px", margin: "4px" }}
                        ></div>
                        <FaUserGraduate style={{ fontSize: "2rem", color: "#FFCB6B" }} />
                      </div>
                    </Card.Header>
                    <Card.Text className="text-center mt-3">
                      <h4 style={{ color: "white", fontWeight: "bold" }}>{experience.date}</h4>
                      <h3 style={{ color: "white", fontWeight: "bold" }}>{experience.company}</h3>
                      <p style={{ color: "#C0C0C0" }}>{experience.role}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
