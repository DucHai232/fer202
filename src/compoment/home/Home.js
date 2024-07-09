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
import { getFilmData } from "../../apis/film.request";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";

export default function Home() {
  const [dataFilm, setDataFilm] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getFilmData();
      setDataFilm(response.data);
    };
    fetchData();
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
                    <h1 style={{ fontSize: "24px" }}> {film.nameFilm}</h1>
                    <p>{film.releaseDate}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Row>

        {/* <Row>
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
              <Col xs={6} md={2} lg={2}>
                <Card className="bg-dark text-white">
                  <Card.Img src="./Anh/anh3.png" />
                  <Card.ImgOverlay>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Button
                      variant="success"
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                    >
                      10.0
                    </Button>
                  </Card.ImgOverlay>
                </Card>
                <div className="text-white">
                  <h1>Hit Man</h1>
                  <p>Jun 8, 2024</p>
                </div>
              </Col>
              <Col xs={6} md={2} lg={2}>
                <Card className="bg-dark text-white">
                  <Card.Img src="./Anh/anh3.png" />
                  <Card.ImgOverlay>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Button
                      variant="success"
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                    >
                      10.0
                    </Button>
                  </Card.ImgOverlay>
                </Card>
                <div className="text-white">
                  <h1>Hit Man</h1>
                  <p>Jun 8, 2024</p>
                </div>
              </Col>
              <Col xs={6} md={2} lg={2}>
                <Card className="bg-dark text-white">
                  <Card.Img src="./Anh/anh3.png" />
                  <Card.ImgOverlay>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Button
                      variant="success"
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                    >
                      10.0
                    </Button>
                  </Card.ImgOverlay>
                </Card>
                <div className="text-white">
                  <h1>Hit Man</h1>
                  <p>Jun 8, 2024</p>
                </div>
              </Col>
              <Col xs={6} md={2} lg={2}>
                <Card className="bg-dark text-white">
                  <Card.Img src="./Anh/anh3.png" />
                  <Card.ImgOverlay>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Button
                      variant="success"
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                    >
                      10.0
                    </Button>
                  </Card.ImgOverlay>
                </Card>
                <div className="text-white">
                  <h1>Hit Man</h1>
                  <p>Jun 8, 2024</p>
                </div>
              </Col>
              <Col xs={6} md={2} lg={2}>
                <Card className="bg-dark text-white">
                  <Card.Img src="./Anh/anh3.png" />
                  <Card.ImgOverlay>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Button
                      variant="success"
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                    >
                      10.0
                    </Button>
                  </Card.ImgOverlay>
                </Card>
                <div className="text-white">
                  <h1>Hit Man</h1>
                  <p>Jun 8, 2024</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>

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
              <Col xs={6} md={2} lg={2}>
                <Card className="bg-dark text-white">
                  <Card.Img src="./Anh/anh3.png" />
                  <Card.ImgOverlay>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Button
                      variant="success"
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                    >
                      10.0
                    </Button>
                  </Card.ImgOverlay>
                </Card>
                <div className="text-white">
                  <h1>Hit Man</h1>
                  <p>Jun 8, 2024</p>
                </div>
              </Col>
              <Col xs={6} md={2} lg={2}>
                <Card className="bg-dark text-white">
                  <Card.Img src="./Anh/anh3.png" />
                  <Card.ImgOverlay>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Button
                      variant="success"
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                    >
                      10.0
                    </Button>
                  </Card.ImgOverlay>
                </Card>
                <div className="text-white">
                  <h1>Hit Man</h1>
                  <p>Jun 8, 2024</p>
                </div>
              </Col>
              <Col xs={6} md={2} lg={2}>
                <Card className="bg-dark text-white">
                  <Card.Img src="./Anh/anh3.png" />
                  <Card.ImgOverlay>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Button
                      variant="success"
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                    >
                      10.0
                    </Button>
                  </Card.ImgOverlay>
                </Card>
                <div className="text-white">
                  <h1>Hit Man</h1>
                  <p>Jun 8, 2024</p>
                </div>
              </Col>
              <Col xs={6} md={2} lg={2}>
                <Card className="bg-dark text-white">
                  <Card.Img src="./Anh/anh3.png" />
                  <Card.ImgOverlay>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Button
                      variant="success"
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                    >
                      10.0
                    </Button>
                  </Card.ImgOverlay>
                </Card>
                <div className="text-white">
                  <h1>Hit Man</h1>
                  <p>Jun 8, 2024</p>
                </div>
              </Col>
              <Col xs={6} md={2} lg={2}>
                <Card className="bg-dark text-white">
                  <Card.Img src="./Anh/anh3.png" />
                  <Card.ImgOverlay>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Badge bg="danger" className="me-2">
                      Romance
                    </Badge>
                    <Button
                      variant="success"
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                    >
                      10.0
                    </Button>
                  </Card.ImgOverlay>
                </Card>
                <div className="text-white">
                  <h1>Hit Man</h1>
                  <p>Jun 8, 2024</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Row> */}

        <Row style={{ marginTop: "80px" }}>
          <footer
            style={{
              backgroundColor: "#0b0d17",
              color: "#fff",
              padding: "20px 0",
            }}
          >
            <Container>
              <Row>
                <Col className="text-center">
                  <a href="#terms" style={{ color: "#fff", margin: "0 10px" }}>
                    Term of use
                  </a>
                  <a
                    href="#privacy"
                    style={{ color: "#fff", margin: "0 10px" }}
                  >
                    Privacy Policy
                  </a>
                  <a href="#about" style={{ color: "#fff", margin: "0 10px" }}>
                    About
                  </a>
                  <a href="#blog" style={{ color: "#fff", margin: "0 10px" }}>
                    Blog
                  </a>
                  <a href="#faq" style={{ color: "#fff", margin: "0 10px" }}>
                    FAQ
                  </a>
                </Col>
              </Row>
              <Row>
                <Col className="text-center" style={{ marginTop: "50px" }}>
                  <p>© 2023 Movie App. All rights reserved.</p>
                  <p>
                    Discover the latest movies and TV shows. Explore now!
                    Designed with passion
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="text-center" style={{ marginTop: "10px" }}>
                  <a
                    href="https://www.facebook.com"
                    style={{ color: "#fff", margin: "0 10px" }}
                  ></a>
                  <a
                    href="https://www.instagram.com"
                    style={{ color: "#fff", margin: "0 10px" }}
                  ></a>
                  <a
                    href="https://www.twitter.com"
                    style={{ color: "#fff", margin: "0 10px" }}
                  ></a>
                  <a
                    href="https://www.linkedin.com"
                    style={{ color: "#fff", margin: "0 10px" }}
                  ></a>
                </Col>
              </Row>
            </Container>
          </footer>
        </Row>
      </Container>
    </div>
  );
}
