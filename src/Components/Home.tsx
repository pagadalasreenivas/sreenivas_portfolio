import React from 'react';
import { Container, Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Type from './Type';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import { RiContactsLine } from "react-icons/ri";
import { MdDownloadForOffline } from "react-icons/md";
import "../App.css";
import Contact from './Contact';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const pdfUrl = process.env.PUBLIC_URL+'/Assets/Sreenivas_resume.pdf';

const Home = () => {
  const coder = {
    name: 'Sreenivas Pagadala',
    skills: ['React', 'NextJS', 'Redux', 'Express', 'NestJS', 'MySql', 'MongoDB', 'Docker', 'AWS'],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function () {
      return this.hardWorker && this.problemSolver && this.skills.length >= 5;
    }
  };

  const scrollToContact = () => {
    const section = document.getElementById("contactme");
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section>
      <Container fluid content='home-section' id='home'>
        <div className="row align-items-center" style={{ minHeight: '140vh' }}>
          {/* Left Section */}
          <div className="col-lg-6 col-md-12 text-start mb-4">
            <h1 className="display-4 text-white fw-bold">
              Hi, I'm <span className="text-primary">Sreenivas</span>
              <Type />
            </h1>

            <div className="d-flex justify-content-center mt-4">
  <Button
    variant="light"
    onClick={scrollToContact}
    className="hover-effect"
    style={{
      fontWeight: "bold",
      padding: "10px 20px",
      border: "1px solid black",
      borderRadius: "50px",
      marginRight: "15px", // Add margin to space out the buttons
    }}
  >
    Contact Me <RiContactsLine size={20} />
  </Button>

  <Button
    variant="light"
    className="hover-transform"
    href={pdfUrl}
    style={{
      fontWeight: "bold",
      padding: "10px 20px",
      border: "1px solid black",
      borderRadius: "50px",
    }}
  >
    Get Resume <MdDownloadForOffline size={20} />
  </Button>
</div>

<div className="d-flex justify-content-center mt-5"> {/* Added mt-5 for spacing */}
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip id="github-tooltip">GitHub</Tooltip>}
  >
    <a href="https://github.com/pagadalasreenivas/" target="_blank" rel="noopener noreferrer" className="mx-2">
      <FaGithub size={40} style={{ color: "white" }} />
    </a>
  </OverlayTrigger>

  <OverlayTrigger
    placement="top"
    overlay={<Tooltip id="linkedin-tooltip">LinkedIn</Tooltip>}
  >
    <a href="https://www.linkedin.com/in/sreenivaspagadala/" target="_blank" rel="noopener noreferrer" className="mx-2">
      <FaLinkedin size={40} style={{ color: "white" }} />
    </a>
  </OverlayTrigger>

  <OverlayTrigger
    placement="top"
    overlay={<Tooltip id="leetcode-tooltip">LeetCode</Tooltip>}
  >
    <a
      href="https://leetcode.com/u/spagadal/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "cyan", fontSize: "20px" }}
      className="mx-2"
    >
      <img
        src={`${process.env.PUBLIC_URL}/Assets/lc.png`}
        alt="LeetCode"
        style={{
          verticalAlign: "middle",
          width: "40px",
          height: "40px",
          marginRight: "8px",
        }}
      />
    </a>
  </OverlayTrigger>
</div>

          </div>

          {/* Right Section (Card) */}
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <Card
              bg="black"
              style={{
                width: "450px", // Restrict max width for larger screens
                height: "450px",
                boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
                overflow: "hidden",
                padding: "10px",
                border: "1px solid white",
                margin: "20px auto", // Center the card on mobile
              }}
              className="mx-auto"
            >
              <Card.Body>
                <Card.Header
                  className="text-white"
                  style={{ borderBottom: "1px solid white", display: "flex", justifyContent: "space-between" }}
                >
                  <div className="d-flex">
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
                  </div>
                </Card.Header>

                <Card.Text
                  className="text-white"
                  style={{
                    height: "calc(100% - 60px)",
                    overflow: "auto",
                    whiteSpace: "pre-wrap",
                    fontSize: "0.9rem", // Adjust font size for readability on smaller screens
                    lineHeight: "1.5",
                  }}
                >
                  <div style={{ fontFamily: "monospace", padding: "10px" }}>
                    <div
                      style={{
                        color: "#C792EA",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      const{" "}
                      <span style={{ color: "#80CBC4", marginLeft: "5px" }}>developer</span> = {'{'}
                    </div>

                    <div
                      style={{
                        color: "#C792EA",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginLeft: "20px",
                      }}
                    >
                      <span style={{ color: "#FFCB6B" }}>name</span>: "
                      <span style={{ color: "#FFCB6B" }}>{coder.name}</span>",
                    </div>
                    <div
                      style={{
                        color: "#C792EA",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginLeft: "20px",
                      }}
                    >
                      <span style={{ color: "#FFCB6B" }}>skills</span>:{" "}
                      <span style={{ color: "#80CBC4" }}>
                        ["Java", "Python", "React", "MySQL", "React Native"]
                      </span>,
                    </div>
                    <div
                      style={{
                        color: "#C792EA",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginLeft: "20px",
                      }}
                    >
                      <span style={{ color: "#FFCB6B" }}>hardWorker</span>:{" "}
                      {coder.hardWorker ? "true" : "false"},
                    </div>
                    <div
                      style={{
                        color: "#C792EA",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginLeft: "20px",
                      }}
                    >
                      <span style={{ color: "#FFCB6B" }}>quickLearner</span>:{" "}
                      {coder.quickLearner ? "true" : "false"},
                    </div>
                    <div
                      style={{
                        color: "#C792EA",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginLeft: "20px",
                      }}
                    >
                      <span style={{ color: "#FFCB6B" }}>problemSolver</span>:{" "}
                      {coder.problemSolver ? "true" : "false"},
                    </div>
                    <div
                      style={{
                        color: "#C792EA",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginLeft: "20px",
                      }}
                    >
                      <span style={{ color: "#FFCB6B" }}>hireable</span>: function() {'{'}
                    </div>
                    <div
                      style={{
                        color: "#C792EA",
                        display: "inline-flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginLeft: "40px",
                      }}
                    >
                      <span>
                        return(<span style={{ color: "#FFCB6B" }}>this.hardWorker</span> &&{" "}
                        <span style={{ color: "#FFCB6B" }}>this.problemSolver</span>);
                      </span>
                    </div>

                    <div
                      style={{
                        color: "#C792EA",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginLeft: "20px",
                      }}
                    >
                      {'}'}
                    </div>
                    <div
                      style={{
                        color: "#C792EA",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      {'};'}
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>

      {/* Other Sections */}
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contactme">
        <Contact />
      </div>
    </section>
  );
};

export default Home;
