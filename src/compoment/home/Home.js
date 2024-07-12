import {
  Container,
  Row,
  Button,
  Col,
  Card,
  Image,
  Carousel,
  ToggleButton,
  ToggleButtonGroup,
  Badge,
} from "react-bootstrap";
import "./Home.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { getFilmReleased, getFilms } from "../../actions/film";
import Footer from "../footer/Footer";

export default function Home() {
  const [dataFilm, setDataFilm] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setDataFilm(getFilmReleased());
  }, []);
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Carousel>
          <Carousel.Item>
            <Image src="./Anh/Banner.png" style={{ width: "100%" }} />
            <Carousel.Caption>
              <h3>Movixperience...</h3>
              <p>
                Distinctive and immersive cinematic experience.Millions of
                movies, TV shows and people to discover. Explore now!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="./Anh/Banner.png " style={{ width: "100%" }} />
            <Carousel.Caption>
              <h3>Movixperience...</h3>
              <p>
                Distinctive and immersive cinematic experience.Millions of
                movies, TV shows and people to discover. Explore now!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="./Anh/Banner.png" style={{ width: "100%" }} />
            <Carousel.Caption>
              <h3>Movixperience...</h3>
              <p>
                Distinctive and immersive cinematic experience.Millions of
                movies, TV shows and people to discover. Explore now!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container>
        <Row>
          <Container>
            <Row>
              <Col md={6}>
                <h2
                  style={{ textAlign: "left", marginLeft: "130px" }}
                  className="text-white"
                >
                  Trending
                </h2>
              </Col>
              <Col md={6} className="custom-align">
                <ToggleButtonGroup
                  type="radio"
                  name="options"
                  defaultValue={1}
                  className="mb-3"
                >
                  <ToggleButton id="tbg-radio-1" variant="warning" value={1}>
                    Day
                  </ToggleButton>
                  <ToggleButton id="tbg-radio-2" variant="primary" value={2}>
                    Week
                  </ToggleButton>
                </ToggleButtonGroup>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              {dataFilm.map((film) => (
                <Col
                  xs={6}
                  md={2}
                  lg={2}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/chitiet/${film.id}`)}
                >
                  <Card className="bg-dark text-white">
                    <Card.Img src={film.image} />
                    <Card.ImgOverlay>
                      <Badge bg="danger" className="me-2">
                        {film.type === "phim-le" ? "Phim lẻ" : "Phim bộ"}
                      </Badge>
                      <Badge bg="success" className="me-2">
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
                    <h1 style={{ fontSize: "24px" }}> {film.nameFilm}</h1>
                    <p>{film.releaseDate}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Row>

        <Footer />
      </Container>
    </div>
  );
}
