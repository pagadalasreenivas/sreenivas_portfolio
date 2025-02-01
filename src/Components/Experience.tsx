import { Card, Container, Row, Col, Carousel } from "react-bootstrap";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    title: "SNS Technologies LLC.",
    role: "Software Engineer Intern",
    date: "May 2024 - December 2024",
    bullets: [
      "Designed and implemented an XML report generation system using Spring MVC & Spring Data JPA, processing 100,000+ records daily.",
      "Optimized complex queries with DTO projections, pagination, and indexing, reducing query execution time by 50%.",
      "Developed RESTful APIs for dynamic report generation, integrating automated scheduling with @Scheduled.",
      "Implemented batch processing using Spring Batch & multi-threading, improving performance for large datasets.",
      "Built CI/CD pipelines with Azure DevOps, streamlining deployment and automation.",
      "Stored reports securely in AWS S3, ensuring scalability and accessibility for enterprise use.",
      "Integrated Log4j for structured logging, enhancing debugging and real-time monitoring of report generation processes.",
      "Enhanced system performance with Redis/EhCache caching, reducing redundant database queries and improving speed.",
      "Delivered XML report files securely via SFTP for remote server integration and automated processing.",
      "Utilized IBM MQ queues to consume and update XML files, ensuring data consistency across systems.",
      "Developed an interactive React-based frontend dashboard for real-time report visualization and monitoring.",
      "Built reusable React components with TypeScript and React-Bootstrap, ensuring a modular and scalable UI.",
      "Integrated API consumption in React, enabling dynamic filtering and downloading of reports.",
      "Optimized frontend performance with lazy loading and memoization, improving responsiveness and user experience."
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "React",
      "TypeScript",
      "Azure DevOps",
      "AWS S3",
      "Redis",
      "IBM MQ",
      "Hibernate",
      "Log4j"
    ]
  },
  {
    id: 2,
    title: "Optum Global Solutions",
    role: "Software Engineer",
    date: "December 2021 - May 2023",
    bullets: [
      "Developed Java Spring Boot and Groovy microservices, supporting 1M+ daily transactions with 99% uptime.",
      "Built scalable REST APIs and backend workflows to process 500K+ monthly prior authorization requests.",
      "Designed a microservice that improved system efficiency by 20% and streamlined team integration.",
      "Implemented over 15 UI/UX modifications and integrated front-end elements with back-end systems.",
      "Redesigned the notification system, consolidating 10,000 emails into aggregated messages to improve performance.",
      "Automated CI/CD pipelines for seamless integration and deployment, enhancing operational efficiency.",
      "Developed a React-based internal dashboard, integrating API-driven data visualization for analytics and reports.",
      "Built responsive frontend components using AngularJS and Angular, collaborating with UI/UX teams for Figma designs.",
      "Followed Test-Driven Development (TDD) practices, writing unit tests using Spock, Jasmine, and Karma frameworks.",
      "Authored and implemented 80+ Flyway migration scripts to support seamless updates and optimizations in MySQL databases.",
      "Diagnosed and resolved 10+ critical production issues through debugging sessions using tools like Splunk and Dynatrace.",
      "Optimized SQL queries and database indexing, reducing API response time by 60% and improving performance.",
      "Enhanced authorization workflows, increasing auto-approval rates by up to 50% for complex prior authorization cases.",
      "Ensured cross-functional team collaboration and project tracking using Azure DevOps for efficient task management."
    ],
    techStack: [
      "Java",
      "Groovy",
      "React",
      "Spring Boot",
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
