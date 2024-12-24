import { Card } from "react-bootstrap";

const projects = [
  {
    id: 1,
    title: "SportInfo App",
    description: "Built a dynamic live sports app to enhance user engagement with features like live match updates, player stats across Football, Basketball, and Cricket, and intuitive navigation using Expo Router and React. Integrated match highlights with timeline bars, real-time lineup details, and a image upload feature for user reactions. Leveraged sensor data and authentication for personalization and ensured scalability and performance through efficient state management and React best practices.",
    imageUrl: "/sreenivas_portfolio/Assets/sportinfo.jpg", // Replace with an appropriate image URL
  },
  {
    id: 2,
    title: "Gesture-Controlled Virtual Mouse",
    description: "Created a virtual mouse that uses Python, OpenCV, and PyAutoGUI to recognize hand gestures for touchless interaction. Implemented image processing techniques like skin detection and segmentation to map gestures to mouse actions. This project enhances accessibility for users with disabilities and reduces touch interactions on shared devices, promoting hygiene and inclusivity.",
    imageUrl: "/sreenivas_portfolio/Assets/gesture.png", // Replace with an appropriate image URL
  },
  {
    id: 3,
    title: "Smart Pen for Digital Handwriting Conversion",
    description: "Developed a smart pen with an accelerometer to capture handwritten gestures and digitize them. Used Arduino for processing and Bluetooth to transmit data to Android devices. A companion app converts handwriting into editable digital documents. This project won 1st Prize at ICCCSP2019 and received funding from the Siva Nadar Foundation’s Bright Idea program for its innovation in handwriting technology.",
    imageUrl: "/sreenivas_portfolio/Assets/OCR.jpg", // Replace with an appropriate image URL
   
  },
  
];




export default function Projects() {
  return (
    <div>
      {/* Full-screen header with horizontal line */}
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

        {/* Centered heading card */}
        <Card
          bg="black"
          className="text-center"
          style={{
            width: "90%", // Adjust for smaller screens
            maxWidth: "40rem",
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
            overflow: "hidden",
            border: "1px solid white",
            zIndex: 2,
          }}
        >
          <Card.Header style={{ color: "white" }}>Projects</Card.Header>
        </Card>
      </div>

      {/* Projects section */}
      <div className="container py-5" style={{ background: "#000" }}>
        <div className="row">
          {projects.map((project) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={project.id}>
              <Card
                bg="black"
                className="text-center h-100"
                style={{
                  boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
                  overflow: "hidden",
                  border: "1px solid white",
                }}
              >
                {/* Image in the header */}
                <Card.Img
                  variant="top"
                  src={project.imageUrl}
                  style={{
                    width: "100%",
                    height: "auto", // Adjust height based on content
                    objectFit: "cover",
                    borderBottom: "1px solid white",
                  }}
                />
                <Card.Body>
                  <Card.Header
                    style={{
                      color: "white",
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      borderBottom: "1px solid white",
                      marginBottom: "1rem",
                    }}
                  >
                    {project.title}
                  </Card.Header>
                  <Card.Text style={{ color: "white" }}>
                    {project.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

