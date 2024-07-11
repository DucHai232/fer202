import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Navbar,
  FormControl,
  Button,
  Image,
  Table,
  Form,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderAdmin from "./headerAdmin";
import Menu from "./Menu";
import { getFilms, updateFilm } from "../../actions/film";

export default function UpdateFilm() {
  const { id } = useParams(); // Lấy ID phim từ params
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    poster: "",
    title: "",
    topic: "",
    director: "",
    genre: "",
    status: "Unreleased",
    releaseDate: "",
    description: "",
    linkVideo: "",
    runTime: "",
  });

  useEffect(() => {
    const films = getFilms();
    const filmToEdit = films.find((film) => film.id === id);
    if (filmToEdit) {
      setMovie({
        poster: filmToEdit.image,
        title: filmToEdit.nameFilm,
        topic: filmToEdit.topic,
        director: filmToEdit.writer,
        genre: filmToEdit.type,
        status: filmToEdit.status,
        releaseDate: filmToEdit.releaseDate,
        description: filmToEdit.description,
        linkVideo: filmToEdit.linkVideo,
        runTime: filmToEdit.runTime,
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFilm = {
      id,
      image: movie.poster,
      nameFilm: movie.title,
      evaluate: 10,
      releaseDate: movie.releaseDate,
      topic: movie.topic,
      type: movie.genre,
      description: movie.description,
      runTime: movie.runTime,
      writer: movie.director,
      actor: [], // Assuming actors are not updated here
      comments: [], // Assuming comments are not updated here
      status: movie.status,
      linkVideo: movie.linkVideo,
    };
    const result = updateFilm(id, updatedFilm);
    if (result) {
      alert(result.message);
      navigate("/admin/list-film");
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
              Edit Movie
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={4} className="text-center">
                    <Image
                      src={
                        movie.poster ||
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
                        name="poster"
                        value={movie.poster}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={8}>
                    <Table striped bordered hover className="shadow-sm rounded">
                      <tbody>
                        <tr>
                          <th>Title</th>
                          <td>
                            <Form.Control
                              type="text"
                              placeholder="Enter title"
                              name="title"
                              value={movie.title}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Topic</th>
                          <td>
                            <Form.Control
                              type="text"
                              placeholder="Enter topic"
                              name="topic"
                              value={movie.topic}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Director</th>
                          <td>
                            <Form.Control
                              type="text"
                              placeholder="Enter director"
                              name="director"
                              value={movie.director}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Genre</th>
                          <td>
                            <Form.Control
                              type="text"
                              placeholder="Enter genre"
                              name="genre"
                              value={movie.genre}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Run Time</th>
                          <td>
                            <Form.Control
                              type="number"
                              placeholder="Enter time video"
                              name="runTime"
                              value={movie.runTime}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Status</th>
                          <td>
                            <Form.Control
                              as="select"
                              name="status"
                              value={movie.status}
                              onChange={handleChange}
                            >
                              <option>Released</option>
                              <option>Unreleased</option>
                            </Form.Control>
                          </td>
                        </tr>
                        <tr>
                          <th>Release Date</th>
                          <td>
                            <Form.Control
                              type="date"
                              name="releaseDate"
                              value={movie.releaseDate}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Description</th>
                          <td>
                            <Form.Control
                              as="textarea"
                              placeholder="Enter description"
                              name="description"
                              value={movie.description}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Link Video</th>
                          <td>
                            <Form.Control
                              type="text"
                              placeholder="Enter link video"
                              name="linkVideo"
                              value={movie.linkVideo}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <div className="d-flex justify-content-end">
                      <Button variant="primary" type="submit">
                        Update Movie
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
