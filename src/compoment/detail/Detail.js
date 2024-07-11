import {
  Container,
  Button,
  Row,
  Col,
  Image,
  Badge,
  Card,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import "./Detail.css";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import { loadFromLocalstorage } from "../../utils/LocalStorage";
import { getFilmById, getFilms } from "../../actions/film";
export default function Details() {
  const [filmData, setFilmData] = useState([]);
  const { filmId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setFilmData(getFilms());
  }, []);
  const filmDetail = getFilmById(filmId);
  const handleWatch = () => {
    const user = loadFromLocalstorage("user");
    if (!user) {
      navigate("/login");
    } else {
      navigate("xem-phim");
    }
  };
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Container
          className="p-3"
          style={{
            backgroundColor: "#1a2b48",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <Row>
            <Col md={4}>
              <Image
                src={filmDetail?.image}
                fluid
                rounded
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
            <Col md={8}>
              <h2 style={{ color: "white" }}>{filmDetail?.nameFilm}</h2>
              <p>He's not a killer, but he can pretend.</p>
              <div className="mb-2">
                <Badge bg="danger" className="me-2">
                  {filmDetail?.topic}
                </Badge>
                <Badge bg="info" className="me-2">
                  {filmDetail?.type}
                </Badge>
                <Badge bg="success" className="me-2">
                  Crime
                </Badge>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Badge
                  pill
                  className="rating-circle d-flex justify-content-center align-items-center me-3"
                  bg="success"
                >
                  {filmDetail?.evaluate}
                </Badge>
                <Button onClick={() => handleWatch()}>
                  <i style={{ width: "100%" }} class="bi bi-play-circle"></i>
                </Button>
                <h4>Watch Tralier</h4>
              </div>
              <h4>Overview</h4>
              <p>{filmDetail?.description}</p>
              <p>
                <strong>Status:</strong> Released
              </p>
              <p>
                <strong>Release Date:</strong> {filmDetail?.releaseDate}
              </p>
              <p>
                <strong>Runtime:</strong> {filmDetail?.runTime} minutes
              </p>
              <p>
                <strong>Writer:</strong> {filmDetail?.writer}
              </p>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row
        style={{
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <h2 className="text-white">Top Cast</h2>
        {filmDetail?.actor?.map((el) => (
          <Col xs={6} md={2} className="text-center">
            <Image
              src={el.avatar}
              fluid
              style={{ borderRadius: "200px", width: "200px", height: "200px" }}
            />
            <Card.Body></Card.Body>
            <div className="text-white">
              <h1>{el.name}</h1>
              <p>{el.role}</p>
            </div>
          </Col>
        ))}
      </Row>

      {/* <Row>
        <Container>
          <Row>
            <Col md={6}>
              <h2
                style={{ textAlign: "left", marginLeft: "130px" }}
                className="text-white"
              >
                What’s Popular
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
      {/* <Row>
        <Container>
          <Row>
            <Col md={6}>
              <h2
                style={{ textAlign: "left", marginLeft: "130px" }}
                className="text-white"
              >
                Top Rated
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
      <Footer />
    </Container>
  );
}
