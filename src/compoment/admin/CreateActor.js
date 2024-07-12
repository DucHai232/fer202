import React, { useState, useEffect } from "react";
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
import { createActor } from "../../actions/actor";
import {
  loadFromLocalstorage,
  saveLocalstorage,
} from "../../utils/LocalStorage";

export default function CreateActor() {
  const navigate = useNavigate();
  const [films, setFilms] = useState([]);
  const [actor, setActor] = useState({
    name: "",
    role: "",
    film: "",
    avatar: "",
  });

  useEffect(() => {
    const storedFilms = loadFromLocalstorage("films") || [];
    setFilms(storedFilms);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActor({ ...actor, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newActor = {
      name: actor.name,
      role: actor.role,
      avatar: actor.avatar,
      film: actor.film,
    };
    const result = createActor(newActor);
    if (result.success) {
      alert(result.message);
      navigate("/admin/list-actor");
      setActor({
        name: "",
        role: "",
        film: "",
        avatar: "",
      });
      const updatedFilms = films.map((film) => {
        if (film.id === actor.film) {
          return {
            ...film,
            actor: [...film.actor, result.actor],
          };
        }
        return film;
      });

      saveLocalstorage("films", updatedFilms);
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
              Add New Actor
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={4} className="text-center">
                    <Image
                      src={
                        actor.avatar ||
                        "https://placehold.co/200x300?text=No+Image"
                      }
                      className="actor-avatar"
                      rounded
                      style={{ width: "200px", height: "300px" }}
                    />
                    <Form.Group controlId="formAvatar">
                      <Form.Label>Avatar URL</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter avatar URL"
                        name="avatar"
                        value={actor.avatar}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={8}>
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter actor name"
                        name="name"
                        value={actor.name}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formRole">
                      <Form.Label>Role</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter actor role"
                        name="role"
                        value={actor.role}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formFilm">
                      <Form.Label>Film</Form.Label>
                      <Form.Control
                        as="select"
                        name="film"
                        value={actor.film}
                        onChange={handleChange}
                      >
                        <option value="">Select a film</option>
                        {films.map((film) => (
                          <option key={film.id} value={film.id}>
                            {film.nameFilm}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                    <div className="d-flex justify-content-end mt-3">
                      <Button variant="primary" type="submit">
                        Add Actor
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
