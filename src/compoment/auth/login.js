import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./login.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveLocalstorage } from "../../utils/LocalStorage";
import { banedUser, getUser } from "../../actions/user";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setUsers(getUser());
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  const handleSubmit = () => {
    if (users) {
      const user = users.find((user) => user.email === formData.email);
      if (user) {
        if (user.password === formData.password) {
          const banned = banedUser(user.id);
          if (banned) {
            return;
          }
          {
            saveLocalstorage("user", user);
            if (user.isAdmin) {
              navigate("/admin");
            } else {
              navigate("/");
            }
          }
        } else {
          alert("Email hoặc password không đúng");
        }
      } else {
        alert("Email hoặc password không đúng");
      }
    }
  };
  return (
    <Container
      fluid
      className="login-container"
      style={{ justifyContent: "center" }}
    >
      <Row>
        <Col md={6} className="poster-column">
          <img
            src="./Anh/Rectangle 2.png"
            alt="Oppenheimer Poster"
            className="poster-image"
          />
        </Col>
        <Col md={6} className="form-column">
          <Row>
            <div className="form-wrapper">
              <h2 style={{ color: "white" }}>Login</h2>
              <Form>
                <div>Email</div>
                <Form.Group controlId="formBasicEmail">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="bi bi-envelope"></i>
                      </span>
                    </div>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </Form.Group>
                <div>Password</div>
                <Form.Group controlId="formBasicPassword">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i class="bi bi-lock"></i> {/* Email icon */}
                      </span>
                    </div>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password "
                      value={formData.password}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </Form.Group>
                <Button
                  variant="primary"
                  className="login-button"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
                <div className="forgot-password">
                  <a href="/">Forgot password?</a>
                </div>
                <div className="signup-link">
                  Don't have an account? <Link to="/signup">Sign up here</Link>
                </div>
              </Form>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
