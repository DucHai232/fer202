import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, getUser } from "../../actions/user";

export default function SignUp() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const checkEmailExists = (email) => {
    const response = getUser();
    return response?.some((user) => user.email === email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }
    const emailExists = checkEmailExists(formData.email);
    if (emailExists) {
      alert("Email đã tồn tại");
      return;
    }
    try {
      const newUser = {
        email: formData.email,
        password: formData.password,
        isAdmin: false,
        status: true,
        avatar: "",
        phone: "",
        name: "",
      };
      const result = createUser(newUser);
      if (result) {
        alert(result.message);
        navigate("/login");
        setFormData({
          password: "",
          confirmPassword: "",
          email: "",
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
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
                    <Form.Control
                      name="email"
                      value={formData.email}
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => handleChange(e)}
                    />
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
                    <Form.Control
                      name="password"
                      value={formData.password}
                      type="password"
                      placeholder="Password"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </Form.Group>

                <div>Confirm Password</div>
                <Form.Group controlId="formBasicPassword">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="bi bi-lock"></i>
                      </span>
                    </div>
                    <Form.Control
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      type="password"
                      placeholder="Confirm-Password"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="login-button"
                  onClick={(e) => handleSubmit(e)}
                >
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
