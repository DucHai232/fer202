import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Navbar,
  Button,
  Image,
  Form,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css"; // Custom CSS for styling
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "./headerAdmin";
import Menu from "./Menu";
import { createUser, getUser } from "../../actions/user";

export default function CreateAdmin() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    avatar: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const checkEmailExists = (email) => {
    const response = getUser();
    return response?.some((user) => user.email === email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords không khớp");
      return;
    }

    const emailExists = checkEmailExists(user.email);
    if (emailExists) {
      alert("Email đã tồn tại");
      return;
    }

    const newUser = {
      avatar: user.avatar,
      email: user.email,
      password: user.password,
      phone: user.phone,
      isAdmin: true,
      status: true,
      name: user.name,
    };
    const result = await createUser(newUser);
    if (result.success) {
      alert(result.message);
      navigate("/admin");
      setUser({
        avatar: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        name: "",
      });
    } else {
      alert(result.message);
    }
  };

  return (
    <Container fluid className="admin-container admin-container1">
      <HeaderAdmin />
      <Row>
        <Col md={3} className="sidebar-col sidebar-col1">
          <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            className="flex-column sidebar sidebar1"
          >
            <Menu />
          </Navbar>
        </Col>
        <Col md={9} className="content-col content-col1">
          <Card className="shadow-sm shadow-sm1 rounded">
            <Card.Header as="h2" className="text-center">
              Add New Admin
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={4} className="text-center">
                    <Image
                      src={
                        user.avatar ||
                        "https://placehold.co/200x300?text=No+Image"
                      }
                      className="user-avatar"
                      rounded
                      style={{ width: "200px", height: "300px" }}
                    />
                    <Form.Group controlId="formAvatar">
                      <Form.Label>Avatar URL</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter avatar URL"
                        name="avatar"
                        value={user.avatar}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={8}>
                    <Form.Group controlId="formName">
                      <Form.Label>Họ và Tên</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formConfirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter phone number"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <div className="d-flex justify-content-end mt-3">
                      <Button variant="primary" type="submit">
                        Add User
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
