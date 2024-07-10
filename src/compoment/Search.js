import {
  Container,
  Row,
  Form,
  Button,
  FormControl,
  Navbar,
  Nav,
  Col,
  Card,
  Image,
  Carousel,
  ToggleButton,
  ToggleButtonGroup,
  Badge,
} from "react-bootstrap";
import "./Search.css";
import Header from "./header/Header";
import { useEffect, useState } from "react";
import { getFilmData } from "../apis/film.request";
import { useQuery } from "../utils/UseQuery";
import Footer from "./footer/Footer";
export default function Search() {
  const [films, setFilms] = useState([]);
  const [results, setResults] = useState([]);
  const query = useQuery();
  const searchQuery = query.get("q");
  useEffect(() => {
    const fetchData = async () => {
      const response = await getFilmData();
      setFilms(response.data || []);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const searchMovies = (query) => {
      if (!query) {
        return [];
      }
      return films.filter((movie) =>
        movie.nameFilm.toLowerCase().includes(query.toLowerCase())
      );
    };
    setResults(searchMovies(searchQuery));
  }, [searchQuery, films]);
  return (
    <div className="App">
      <Header />
      <Container>
        <Row className="my-3">
          <Col>
            <h5>TỪ KHÓA: {searchQuery}</h5>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={2}>
            <Form.Group controlId="categorySelect">
              <Form.Control as="select">
                <option>Thể loại</option>
                <option>Hành động</option>
                <option>Kịch tính</option>
                <option>Hài hước</option>
                <option>Kinh dị</option>
                <option>Viễn tưởng</option>
                <option>Hoạt hình</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Form.Group controlId="countrySelect">
              <Form.Control as="select">
                <option>Quốc gia</option>
                <option>Mỹ</option>
                <option>Việt Nam</option>
                <option>Hàn</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Form.Group controlId="yearSelect">
              <Form.Control as="select">
                <option>Năm phát hành</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Form.Group controlId="languageSelect">
              <Form.Control as="select">
                <option>Ngôn Ngữ</option>
                <option>Phụ đề</option>
                <option>Thuyết minh</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Form.Group controlId="sortSelect">
              <Form.Control as="select">
                <option>Sắp xếp</option>
                <option>Thời gian cập nhật</option>
                <option>Lượt xem</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Form.Group controlId="formatSelect">
              <Form.Control as="select">
                <option>Hình thức</option>
                <option>Phim lẻ</option>
                <option>Phim bộ</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="text-right">
            <Button variant="warning">Tìm kiếm</Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Container>
            <Row style={{ justifyContent: "center" }}>
              {results ? (
                results.map((film) => (
                  <Col xs={6} md={2} lg={2}>
                    <Card className="bg-dark text-white">
                      <Card.Img src={film.image} />
                      <Card.ImgOverlay>
                        <Badge bg="danger" className="me-2">
                          {film.type}
                        </Badge>
                        <Badge bg="danger" className="me-2">
                          {film.topic}
                        </Badge>
                        <Button
                          variant="success"
                          className="position-absolute bottom-0 start-50 translate-middle-x"
                        >
                          {film.evaluate}
                        </Button>
                      </Card.ImgOverlay>
                    </Card>
                    <div className="text-white">
                      <h1>{film.nameFilm}</h1>
                      <p>{film.releaseDate}</p>
                    </div>
                  </Col>
                ))
              ) : (
                <span>Không tìm thấy kết quả nào</span>
              )}
            </Row>
          </Container>
        </Row>

        <Footer />
      </Container>
    </div>
  );
}
