import React, { useEffect, useState } from "react";
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
import { useParams, useNavigate } from "react-router-dom";
import HeaderAdmin from "./headerAdmin";
import Menu from "./Menu";
import { getActorById, getActors, updateActor } from "../../actions/actor";
import { getFilms, updateActorOfFilm, updateFilm } from "../../actions/film";

export default function UpdateActor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [actorOld, setActorOld] = useState({});
  const [films, setFilms] = useState([]);
  const [actor, setActor] = useState({});

  useEffect(() => {
    setFilms(getFilms());
    setActor(getActorById(id));
    setActorOld(getActorById(id));
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setActor({ ...actor, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = updateActor(id, actor);
    if (result.success) {
      const filmActorCurrent = films.find((el) => el.id === actorOld.film);

      if (actor.film !== actorOld?.film) {
        const updatedActorsInOldFilm = filmActorCurrent.actor.filter(
          (el) => el.id !== actorOld?.id
        );
        updateActorOfFilm(actorOld?.film, updatedActorsInOldFilm);
        const newFilmUpdate = films.find((el) => el.id === actor.film);
        const updatedActorsInNewFilm = [...newFilmUpdate.actor, actor];
        updateActorOfFilm(actor?.film, updatedActorsInNewFilm);
      }
      alert(result.message);
      navigate("/admin/list-actor");
    } else {
      alert(result.message);
    }
  };

  return (
    <Container fluid className="admin-container">
      <HeaderAdmin />
      <Row>
        <Col md={3} className="sidebar-col">
          <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            className="flex-column sidebar"
          >
            <Menu />
          </Navbar>
        </Col>
        <Col md={9} className="content-col">
          <Card className="shadow-sm rounded">
            <Card.Header as="h2" className="text-center">
              Update Actor
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
                        Update Actor
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
