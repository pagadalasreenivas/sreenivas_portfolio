import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_email: "",
    from_name: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending email");
    console.log(formData);

    setSuccess(false);
    setError(false);

    emailjs
      .send(
        "service_azgbb8g", // Replace with your service ID
        "template_3kzzwuc", // Replace with your template ID
        formData,
        "stFGJGEIVrNM0J9Sx" // Replace with your public key
      )
      .then(
        () => {
          console.log("Email sent successfully");
          setSuccess(true);
          setFormData({ from_email: "", from_name: "", message: "" });
        },
        () => {
          console.error("Failed to send email");
          setError(true);
        }
      );
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Full-screen header with horizontal line */}
      <div
        className="d-flex align-items-center justify-content-center position-relative"
        style={{ minHeight: "30vh", background: "#000" }}
      >
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
            width: "40%",
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
            overflow: "hidden",
            border: "1px solid white",
            zIndex: 2,
          }}
        >
          <Card.Header style={{ color: "white" }}>Contact Me</Card.Header>
        </Card>
      </div>

      {/* Contact Section */}
      <div
        className="d-flex flex-column flex-md-row mt-5"
        style={{ gap: "20px" }}
      >
        {/* Contact Form */}
        <Form
          onSubmit={handleSubmit}
          style={{
            flex: 1,
            background: "#111",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.2)",
            border: "1px solid white",
          }}
        >
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Label style={{ color: "white", fontWeight: "bold" }}>
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              name="from_email"
              value={formData.from_email}
              placeholder="name@example.com"
              onChange={handleInputChange}
              style={{
                background: "#222",
                border: "1px solid white",
                color: "white",
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
            <Form.Label style={{ color: "white", fontWeight: "bold" }}>Name</Form.Label>
            <Form.Control
              type="text"
              name="from_name"
              value={formData.from_name}
              placeholder="Ex. John"
              onChange={handleInputChange}
              style={{
                background: "#222",
                border: "1px solid white",
                color: "white",
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ color: "white", fontWeight: "bold" }}>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              style={{
                background: "#222",
                border: "1px solid white",
                color: "white",
              }}
              required
            />
          </Form.Group>

          <Button
            type="submit"
            style={{
              backgroundColor: "black",
              border: "1px solid white",
              color: "white",
              borderRadius: "50px",
              fontWeight: "bold",
              padding: "10px 20px",
              transition: "all 0.3s ease-in-out",
            }}
            className="hover-effect"
          >
            Submit
          </Button>
          {success && <div style={{ color: "green", marginTop: "10px" }}>Message sent successfully!</div>}
          {error && <div style={{ color: "red", marginTop: "10px" }}>Failed to send the message. Please try again.</div>}
        </Form>

        {/* Additional Info */}
        <div
          style={{
            flex: 1,
            color: "white",
            background: "#111",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.2)",
            border: "1px solid white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4 style={{ color: "white", marginBottom: "20px" }}>Get in touch!</h4>
          <p>Email: <a href="mailto:sreenivaspagadala1999@gmail.com" style={{ color: "cyan" }}>sreenivaspagadala1999@gmail.com</a></p>
          <img
            src="/sreenivas_portfolio/Assets/contact.jpg"
            alt="Contact"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />
          <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
            <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} style={{ color: "white" }} />
            </a>
            <a href="https://linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: "white" }} />
            </a>
            <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} style={{ color: "white" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
