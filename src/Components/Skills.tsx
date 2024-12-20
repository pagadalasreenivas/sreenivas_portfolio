import { useEffect, useRef, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { FaCss3, FaDocker, FaGit, FaGithub, FaHtml5, FaJava, FaJenkins, FaJs, FaPython, FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";

export default function Skills() {
  const cardStyle = {
    minWidth: "200px",
    minHeight: "150px",
    margin: "10px",
    color: "black",
    paddingRight: 10,
    border: "1px solid white",
    height: "auto",
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for scaling and shadow
  };

  const skills: {
    [key: string]: JSX.Element;
  } = {
    Java: <FaJava size={40} color="#F8981D" />,
    MySql: <GrMysql size={40} color="#00758F" />,
    TypeScript: <SiTypescript size={40} color="#3178C6" />,
    React: <FaReact size={40} color="#61DAFB" />,
    Python: <FaPython size={40} color="#306998" />,
    JavaScript: <FaJs size={40} color="#F7DF1E" />,
    HTML: <FaHtml5 size={40} color="#E34F26" />,
    CSS: <FaCss3 size={40} color="#1572B6" />,
    Jenkins: <FaJenkins size={40} color="#D24939" />,
    Docker: <FaDocker size={40} color="#2496ED" />,
    Git: <FaGit size={40} color="#F05032" />,
    GitHub: <FaGithub size={40} color="#181717" />,
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  const [Ispaused, setIspaused] = useState(false);

  const [highlightedCard, setHighlightedCard] = useState<number | null>(null); // Track which card is highlighted

  const highlight = (index:any) =>{
    setHighlightedCard(index);
    setIspaused(!Ispaused);
  }


  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (Ispaused) return;
    if (scrollContainer) {
      const scrollContentWidth = scrollContainer.scrollWidth;
      const scrollStep = 1; // Pixels to scroll per step
      const interval = 16; // Milliseconds per step (smoothness)

      // Duplicate content for seamless circular scrolling
      const children = Array.from(scrollContainer.children);
      children.forEach((child) => {
        const clone = child.cloneNode(true);
        scrollContainer.appendChild(clone);
      });

      // Start smooth scroll
      const smoothScroll = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContentWidth) {
          // Reset scroll to the start when the end is reached
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += scrollStep;
        }
      }, interval);

      // Cleanup interval on component unmount
      return () => clearInterval(smoothScroll);
    }
  }, [Ispaused]);

  return (
    <div>
         <div
        className="d-flex align-items-center justify-content-center position-relative"
        style={{ minHeight: "30vh", background: "#000" }}> 
        {/* Horizontal line */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "2px",
            background: "white",
            zIndex: 1, // Ensures it is below the card
          }}
        ></div>
      
        {/* Centered card */}
        <Card
          bg="black"
          className="text-center"
          style={{
            width: "40%",
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
            overflow: "hidden",
            border: "1px solid white",
            zIndex: 2, // Ensures it is above the line
          }}
        >
          <Card.Header style={{ color: "white" }}>Skills</Card.Header>
        </Card>
      </div>
    <Container
      ref={scrollRef}
      style={{
        display: "flex",
        overflowX: "hidden", // Hide overflow for circular scrolling
        padding: "10px",
        whiteSpace: "nowrap", // Prevent wrapping of items
        position: "relative",
      }}
    >
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ minHeight: "50vh", position: "relative", padding: "5px" }}
      >
        {Object.keys(skills).map((item, index) => (
          <Card
            key={index}
            style={{
              ...cardStyle,
              transform: highlightedCard === index ? "scale(1.1)" : "scale(1)", // Scale up the highlighted card
              boxShadow: highlightedCard === index ? "0px 4px 15px rgba(0, 0, 255, 0.3)" : "none", // Add shadow for highlighted card
              zIndex: highlightedCard === index ? 10 : "auto", // Ensure highlighted card is on top
            }}
            className="text-center bg-dark text-white"
            onMouseEnter={() => highlight(index)} // Highlight card on hover
            onMouseLeave={() => highlight(null)} // Remove highlight when hover ends
          >
            <Card.Body>
              <Card.Header>{skills[item]}</Card.Header>
              <Card.Text>{item}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
    </div>
  );
}
