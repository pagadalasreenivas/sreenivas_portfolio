import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { IoHome } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import "./App.css";

const NavBar = () => {
  return (
    <Container>
      <Navbar bg="black" variant="dark" expand="lg" style={{position:"fixed",top:0,left:0,width:"100%",zIndex:1000,}}>
        <ScrollLink
          className="nav-link-underline"
          to="home"
          smooth={true}
          duration={100}
          style={{
            fontWeight: "bold", 
            fontSize: 30, 
            textAlign: "left",
            padding: "0 15px", 
            paddingBottom: "15px",
          }}
        >
          Sreenivas Pagadala.
        </ScrollLink>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
        <Nav
  className="ms-auto d-flex justify-content-between w-120"
  style={{ gap: "10px" }} // Reduces spacing between links
>
  <ScrollLink
    className="nav-link-underline"
    to="about"
    smooth={true}
    duration={100}
    style={{
      fontWeight: "bold",
      fontSize: 18,
      color: "white",
      cursor: "pointer",
      padding: "0 5px", // Reduced padding
    }}
  >
    <IoPersonSharp /> About
  </ScrollLink>
  <ScrollLink
    className="nav-link-underline"
    to="education"
    smooth={true}
    duration={500}
    style={{
      fontWeight: "bold",
      fontSize: 18,
      color: "white",
      cursor: "pointer",
      padding: "0 5px", // Reduced padding
    }}
  >
    <GrProjects /> Education
  </ScrollLink>
  <ScrollLink
    className="nav-link-underline"
    to="skills"
    smooth={true}
    duration={100}
    style={{
      fontWeight: "bold",
      fontSize: 18,
      color: "white",
      cursor: "pointer",
      padding: "0 5px", // Reduced padding
    }}
  >
    <GiSkills /> Skills
  </ScrollLink>
  <ScrollLink
    className="nav-link-underline"
    to="experience"
    smooth={true}
    duration={100}
    style={{
      fontWeight: "bold",
      fontSize: 18,
      color: "white",
      cursor: "pointer",
      padding: "0 5px", // Reduced padding
    }}
  >
    <BsPersonWorkspace /> Experience
  </ScrollLink>
  <ScrollLink
    className="nav-link-underline"
    to="projects"
    smooth={true}
    duration={100}
    style={{
      fontWeight: "bold",
      fontSize: 18,
      color: "white",
      cursor: "pointer",
      padding: "0 5px", // Reduced padding
    }}
  >
    <GoProjectSymlink /> Projects
  </ScrollLink>
        </Nav>

        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
