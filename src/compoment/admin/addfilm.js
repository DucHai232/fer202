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
import genres from "../../dataSource/genres.json";
import origins from "../../dataSource/origins.json";
export default function AddMovie() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    poster: "",
    title: "",
    type: "",
    director: "",
    genre: "",
    status: "Unreleased",
    releaseDate: "",
    description: "",
    linkVideo: "",
    runTime: "",
    language: "",
    origin: "",
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
      type: movie.type,
      genre: movie.genre,
      description: movie.description,
      runTime: movie.runTime,
      writer: movie.director,
      actor: [],
      comments: [],
      status: movie.status,
      linkVideo: movie.linkVideo,
      language: movie.language,
      origin: movie.origin,
    };
    const result = createFilm(newFilm);
    if (result) {
      alert(result.message);
      navigate("/admin/list-film");
      setMovie({
        poster: "",
        title: "",
        type: "",
        director: "",
        genre: "",
        status: "Unreleased",
        releaseDate: "",
        description: "",
        linkVideo: "",
        runTime: "",
        language: "",
        origin: "",
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
                          <th>Tên Phim</th>
                          <td>
                            <Form.Control
                              type="text"
                              placeholder="Nhập tên phim"
                              name="title"
                              value={movie.title}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Hình thức</th>
                          <td>
                            <Form.Control
                              as="select"
                              name="type"
                              value={movie.type}
                              onChange={handleChange}
                            >
                              <option value="">Chọn hình thức</option>
                              <option value={"phim-le"}>Phim lẻ</option>
                              <option value={"phim-bo"}>Phim bộ</option>
                            </Form.Control>
                          </td>
                        </tr>
                        <tr>
                          <th>Đạo diễn</th>
                          <td>
                            <Form.Control
                              type="text"
                              placeholder="Nhập tên đạo diễn"
                              name="director"
                              value={movie.director}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Thể loại</th>
                          <td>
                            <Form.Control
                              as="select"
                              name="genre"
                              value={movie.genre}
                              onChange={handleChange}
                            >
                              <option value="">Chọn thể loại</option>
                              {genres.map((el, index) => (
                                <option key={index} value={el.value}>
                                  {el.label}
                                </option>
                              ))}
                            </Form.Control>
                          </td>
                        </tr>
                        <tr>
                          <th>Quốc gia</th>
                          <td>
                            <Form.Control
                              as="select"
                              name="origin"
                              value={movie.origin}
                              onChange={handleChange}
                            >
                              <option value="">Chọn quốc gia</option>
                              {origins.map((el, index) => (
                                <option key={index} value={el.value}>
                                  {el.label}
                                </option>
                              ))}
                            </Form.Control>
                          </td>
                        </tr>
                        <tr>
                          <th>Ngôn ngữ</th>
                          <td>
                            <Form.Control
                              as="select"
                              name="language"
                              value={movie.language}
                              onChange={handleChange}
                            >
                              <option value="">Chọn ngôn ngữ</option>

                              <option value={"phu-de"}>Phụ đề</option>
                              <option value={"thuyet-minh"}>Thuyết minh</option>
                            </Form.Control>
                          </td>
                        </tr>
                        <tr>
                          <th>Thời lượng</th>
                          <td>
                            <Form.Control
                              type="number"
                              placeholder="Thời lượng"
                              name="runTime"
                              value={movie.runTime}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Trạng thái</th>
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
                          <th>Ngày ra mắt</th>
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
                          <th>Miêu tả</th>
                          <td>
                            <Form.Control
                              as="textarea"
                              placeholder="Miêu tả..."
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
                              placeholder="Link Video"
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
