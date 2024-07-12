import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  FormControl,
  Button,
  Image,
  NavDropdown,
  Form,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../compoment/admin/Admin.css";
import Header from "../header/Header";
import {
  loadFromLocalstorage,
  saveLocalstorage,
} from "../../utils/LocalStorage";
import { updateUser } from "../../actions/user";
import { useNavigate } from "react-router-dom";

export default function UpdateUser() {
  const [user, setUser] = useState({
    avatar: "",
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const user = loadFromLocalstorage("user") || {};
    setUser(user);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = updateUser(user.id, user);
    saveLocalstorage("user", user);
    if (result.success) {
      alert(result.message);
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <Container fluid className="admin-container admin-container1">
      <Header />
      <Row>
        <Col md={3} className="sidebar-col sidebar-col1">
          <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            className="flex-column sidebar sidebar1"
          ></Navbar>
        </Col>
        <Col md={9} className="content-col content-col1">
          <Card className="shadow-sm shadow-sm1 rounded">
            <Card.Header as="h2" className="text-center">
              Update User
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
                      className="movie-poster"
                      rounded
                      style={{ width: "200px", height: "300px" }}
                    />
                    <Form.Group controlId="formPoster">
                      <Form.Label>Poster URL</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter poster URL"
                        name="avatar"
                        value={user.avatar}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group as={Row} controlId="formName">
                      <Form.Label column sm="2">
                        Full Name
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          name="name"
                          value={user.name}
                          onChange={handleChange}
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formEmail">
                      <Form.Label column sm="2">
                        Email
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="email"
                          name="email"
                          value={user.email}
                          onChange={handleChange}
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPhone">
                      <Form.Label column sm="2">
                        Phone Number
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          name="phone"
                          value={user.phone}
                          onChange={handleChange}
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-flex justify-content-end">
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ marginRight: "12px" }}
                  >
                    Update
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => navigate("/profile/change-password")}
                  >
                    Thay đổi mật khẩu
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
