import { Card, Container, Row, Col, Carousel } from "react-bootstrap";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    title: "SNS Technologies LLC.",
    role: "Software Engineer Intern",
    date: "July 2022 - August 2024",
    bullets: [
      "Developed REST APIs and microservices using Spring Boot, optimizing workflows with design patterns like SAGA and CORS.",
      "Deployed scalable applications on Azure and AWS platforms, working with EC2, S3, and App Services.",
      "Built responsive user interfaces with React and enhanced database performance using Hibernate ORM.",
      "Gained hands-on experience in backend development, cloud integration, and microservices architecture.",
      "Improved team collaboration in a remote setup, ensuring timely delivery of projects.",
      "Enhanced system maintainability and flexibility by designing robust solutions for enterprise applications."
    ],
    techStack: ["Java", "Python", "React", "Spring Boot", "Azure", "AWS", "Hibernate"]
  },
  {
    id: 2,
    title: "Optum Global Solutions",
    role: "Software Engineer",
    date: "December 2021 - May 2023",
    bullets: [
      "Developed RESTful APIs and optimized SQL queries, reducing API response time by 60%.",
      "Implemented over 15 UI/UX modifications and integrated front-end elements with back-end systems.",
      "Designed a microservice that improved system efficiency by 20% and streamlined team integration.",
      "Enhanced the authorization workflow, increasing auto-approval rates by up to 50% for complex EPA cases.",
      "Redesigned the notification system, consolidating 10,000 emails into aggregated messages to improve performance.",
      "Automated CI/CD pipelines for seamless integration and deployment, enhancing operational efficiency."
    ],
    techStack: [
      "Java",
      "Groovy",
      "REST API",
      "AngularJS",
      "Angular 8",
      "Docker",
      "MySQL",
      "Jenkins",
      "Git",
      "Bitbucket",
      "Postman"
    ]
  }
];


export default function Experience() {
  return (
    <div>
      {/* Section Header */}
      <div
        className="d-flex align-items-center justify-content-center position-relative"
        style={{ minHeight: "20vh", background: "#000" }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "2px",
            background: "white",
            zIndex: 1
          }}
        ></div>
        <Card
          bg="black"
          className="text-center"
          style={{
            width: "50%",
            maxWidth: "300px",
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
            border: "1px solid white",
            zIndex: 2
          }}
        >
          <Card.Header className="text-white fs-4">Experience</Card.Header>
        </Card>
      </div>

      {/* Main Content */}
      <Container fluid id="experience-section" className="py-4">
        {/* Mobile View */}
        <div className="d-block d-md-none">
          <Carousel>
            {experiences.map((experience, index) => (
              <Carousel.Item key={index}>
                <Card
                  bg="black"
                  className="h-100"
                  style={{
                    boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
                    border: "1px solid white",
                    overflow: "hidden"
                  }}
                >
                  <Card.Body>
                    <Card.Header className="text-white d-flex justify-content-between align-items-center border-bottom">
                      <FaBriefcase style={{ fontSize: "2rem", color: "#FFCB6B" }} />
                    </Card.Header>
                    <Card.Text className="text-center mt-3">
                      <h3 className="text-white fw-bold">{experience.title}</h3>
                      <h5 className="text-secondary fw-bold">{experience.role}</h5>
                      <p className="text-secondary">{experience.date}</p>
                      <ul className="text-secondary">
                        {experience.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                      <p className="text-secondary">
                        <strong>Tech Stack:</strong>{" "}
                        <span className="text-info">{experience.techStack.join(", ")}</span>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Desktop View */}
        <div className="d-none d-md-block">
          <Row className="justify-content-center gx-4 gy-5">
            {experiences.map((experience, index) => (
              <Col xs={12} md={8} lg={6} key={index}>
                <Card
                  bg="black"
                  className="h-100"
                  style={{
                    boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
                    border: "1px solid white",
                    overflow: "hidden"
                  }}
                >
                  <Card.Body>
                    <Card.Header className="text-white d-flex justify-content-between align-items-center border-bottom">
                      <FaBriefcase style={{ fontSize: "2rem", color: "#FFCB6B" }} />
                    </Card.Header>
                    <Card.Text className="text-center mt-3">
                      <h3 className="text-white fw-bold">{experience.title}</h3>
                      <h5 className="text-secondary fw-bold">{experience.role}</h5>
                      <p className="text-secondary">{experience.date}</p>
                      <ul className="text-secondary">
                        {experience.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                      <p className="text-secondary">
                        <strong>Tech Stack:</strong>{" "}
                        <span className="text-info">{experience.techStack.join(", ")}</span>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
