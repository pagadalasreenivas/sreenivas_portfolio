import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaDownload } from "react-icons/fa6";

export default function Resume() {
  const [width, setWidth] = useState(1200);
  const pdfUrl = '/sreenivas_portfolio/Assets/Sreenivas_resume_final.pdf';

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container className="mt-9">
      <Row>
        <Col>
          <h2 className="text-center">My Resume</h2>
          <iframe
            src={pdfUrl}
            width="100%"
            height="800px"
            frameBorder="0"
            title="Resume"
            style={{ borderRadius: "8px" }}
          ></iframe>
          <div className="text-center mt-4">
            <Button
              href={pdfUrl}
              variant="primary"
              className="d-flex align-items-center justify-content-center"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
