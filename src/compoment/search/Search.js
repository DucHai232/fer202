import {
  Container,
  Row,
  Form,
  Button,
  Col,
  Card,
  Badge,
} from "react-bootstrap";
import "./Search.css";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import { useQuery } from "../../utils/UseQuery";
import Footer from "../footer/Footer";
import { getFilms } from "../../actions/film";
import genres from "../../dataSource/genres.json";
import origins from "../../dataSource/origins.json";
import { useLocation, useNavigate } from "react-router-dom";

export default function Search() {
  const [films, setFilms] = useState([]);
  const [results, setResults] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const query = useQuery();
  const initialQuery = query.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setFilms(getFilms());
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const q = queryParams.get("q") || "";
    setSearchQuery(q);
  }, [location.search]);

  useEffect(() => {
    const filterMovies = () => {
      return films.filter((movie) => {
        const matchesQuery = searchQuery
          ? movie.nameFilm.toLowerCase().includes(searchQuery.toLowerCase())
          : true;
        const matchesGenre = selectedGenre
          ? movie.genre === selectedGenre
          : true;
        const matchesOrigin = selectedOrigin
          ? movie.origin === selectedOrigin
          : true;
        const matchesYear = selectedYear
          ? movie.releaseDate.includes(selectedYear)
          : true;
        const matchesLanguage = selectedLanguage
          ? movie.language === selectedLanguage
          : true;
        const matchesFormat = selectedFormat
          ? movie.type === selectedFormat
          : true;

        return (
          matchesQuery &&
          matchesGenre &&
          matchesOrigin &&
          matchesYear &&
          matchesLanguage &&
          matchesFormat
        );
      });
    };

    setResults(filterMovies());
  }, [
    initialQuery,
    searchQuery,
    films,
    selectedGenre,
    selectedOrigin,
    selectedYear,
    selectedLanguage,
    selectedFormat,
  ]);

  const handleClearSearchQuery = () => {
    setSearchQuery("");
    navigate("/search");
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <Row className="my-3">
          <Col>
            <h5>TỪ KHÓA: {searchQuery}</h5>
            <Button onClick={handleClearSearchQuery}>Xóa từ khóa</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={2}>
            <Form.Group controlId="categorySelect">
              <Form.Control
                as="select"
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                <option value={""}>Thể loại</option>
                {genres.map((el, index) => (
                  <option key={index} value={el.value}>
                    {el.label}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Form.Group controlId="countrySelect">
              <Form.Control
                as="select"
                onChange={(e) => setSelectedOrigin(e.target.value)}
              >
                <option value={""}>Quốc gia</option>
                {origins.map((el, index) => (
                  <option key={index} value={el.value}>
                    {el.label}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Form.Group controlId="yearSelect">
              <Form.Control
                as="select"
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value={""}>Năm phát hành</option>
                <option value={"2024"}>2024</option>
                <option value={"2023"}>2023</option>
                <option value={"2022"}>2022</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Form.Group controlId="languageSelect">
              <Form.Control
                as="select"
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value={""}>Ngôn Ngữ</option>
                <option value={"phu-de"}>Phụ đề</option>
                <option value={"thuyet-minh"}>Thuyết minh</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Form.Group controlId="sortSelect">
              <Form.Control as="select">
                <option value={""}>Sắp xếp</option>
                <option>Thời gian cập nhật</option>
                <option>Lượt xem</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <Form.Group controlId="formatSelect">
              <Form.Control
                as="select"
                onChange={(e) => setSelectedFormat(e.target.value)}
              >
                <option value={""}>Hình thức</option>
                <option value={"phim-le"}>Phim lẻ</option>
                <option value={"phim-bo"}>Phim bộ</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Container>
            <Row style={{ justifyContent: "center", marginTop: "50px" }}>
              {results.length > 0 ? (
                results.map((film) => (
                  <Col
                    xs={6}
                    md={2}
                    lg={2}
                    key={film.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/chitiet/${film.id}`)}
                  >
                    <Card className="bg-dark text-white">
                      <Card.Img src={film.image} />
                      <Card.ImgOverlay>
                        <Badge bg="danger" className="me-2">
                          {film.type}
                        </Badge>
                        <Badge bg="danger" className="me-2">
                          {film.genre}
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
