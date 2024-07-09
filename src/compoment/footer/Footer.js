import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Row style={{ marginTop: "80px" }}>
        <footer
          style={{
            backgroundColor: "#0b0d17",
            color: "#fff",
            padding: "20px 0",
          }}
        >
          <Container>
            <Row>
              <Col className="text-center">
                <a href="#terms" style={{ color: "#fff", margin: "0 10px" }}>
                  Term of use
                </a>
                <a href="#privacy" style={{ color: "#fff", margin: "0 10px" }}>
                  Privacy Policy
                </a>
                <a href="#about" style={{ color: "#fff", margin: "0 10px" }}>
                  About
                </a>
                <a href="#blog" style={{ color: "#fff", margin: "0 10px" }}>
                  Blog
                </a>
                <a href="#faq" style={{ color: "#fff", margin: "0 10px" }}>
                  FAQ
                </a>
              </Col>
            </Row>
            <Row>
              <Col className="text-center" style={{ marginTop: "50px" }}>
                <p>© 2023 Movie App. All rights reserved.</p>
                <p>
                  Discover the latest movies and TV shows. Explore now! Designed
                  with passion
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="text-center" style={{ marginTop: "10px" }}>
                <a
                  href="https://www.facebook.com"
                  style={{ color: "#fff", margin: "0 10px" }}
                >
                  <i class="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  style={{ color: "#fff", margin: "0 10px" }}
                >
                  <i class="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  style={{ color: "#fff", margin: "0 10px" }}
                >
                  <i class="bi bi-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com"
                  style={{ color: "#fff", margin: "0 10px" }}
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </Col>
            </Row>
          </Container>
        </footer>
      </Row>
    </div>
  );
};

export default Footer;
