import React, { useState } from "react";
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
  Table,
  Form,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css"; // Custom CSS for styling
import { Link, useNavigate } from "react-router-dom";
import HeaderAdmin from "./headerAdmin";
import Menu from "./Menu";
import { createFilm } from "../../actions/film";

export default function AddMovie() {
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFilm = {
      image: movie.poster,
      nameFilm: movie.title,
      evaluate: 10,
      releaseDate: movie.releaseDate,
      topic: movie.topic,
      type: movie.genre,
      description: movie.description,
      runTime: movie.runTime,
      writer: movie.director,
      actor: [],
      comments: [],
      status: movie.status,
      linkVideo: movie.linkVideo,
    };
    const result = createFilm(newFilm);
    if (result) {
      alert(result.message);
      navigate("/admin/list-film");
      setMovie({
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
              Add New Movie
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
                    <Table
                      striped
                      bordered
                      hover
                      className="shadow-sm shadow-sm1 rounded"
                    >
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
                        Add Movie
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
