import { Container, Form, Row, Col, Button } from "react-bootstrap";
import './login.css';

export default function SignUp() {
  return (
    <Container fluid className="login-container" style={{ justifyContent: "center" }}>
      <Row>
        <Col md={6} className="poster-column">
          <img src="./Anh/Rectangle 2.png" alt="Oppenheimer Poster" className="poster-image" />
        </Col>
        <Col md={6} className="form-column">
          <Row>
            <div className="form-wrapper">
              <h2>Signup</h2>
              <Form>
                <div>Email</div>
                <Form.Group controlId="formBasicEmail">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="bi bi-envelope"></i>
                      </span>
                    </div>
                    <Form.Control type="email" placeholder="Enter email" />
                  </div>
                </Form.Group>

                <div>Confirm Email</div>
                <Form.Group controlId="formBasicConfirmEmail">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="bi bi-envelope"></i>
                      </span>
                    </div>
                    <Form.Control type="email" placeholder="Confirm email" />
                  </div>
                </Form.Group>

                <div>Password</div>
                <Form.Group controlId="formBasicPassword">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="bi bi-lock"></i>
                      </span>
                    </div>
                    <Form.Control type="password" placeholder="Password" />
                  </div>
                </Form.Group>

                <Button variant="primary" type="submit" className="login-button">
                  Signup
                </Button>
              </Form>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
