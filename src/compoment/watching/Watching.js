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
  ButtonGroup,
  Badge,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./MovieContent.css";
import "./VideoPlayer.css";
import "./EpisodeList.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { loadFromLocalstorage } from "../../utils/LocalStorage";
import { getFilmData, postCommentFilm } from "../../apis/film.request";
import { FaUserCircle } from "react-icons/fa";
export default function Watching() {
  const [callback, setCallback] = useState(false);
  const [newComment, setNewComment] = useState("");

  const [films, setFilms] = useState();
  const navigate = useNavigate();
  const { filmId } = useParams();
  const userCurrent = loadFromLocalstorage("user");
  useEffect(() => {
    const fetchData = async () => {
      const response = await getFilmData();
      setFilms(response.data || []);
    };
    fetchData();
  }, [callback]);
  const filmDetail = films?.filter((film) => film.id === filmId)[0];
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const addCommentToFilm = (filmId, newComment) => {
    const film = films?.find((film) => film.id === filmId);
    if (!film) {
      throw new Error("Film not found");
    }
    return film.comments.push(newComment);
  };

  const handleSubmitComment = async () => {
    const data = {
      cmt: newComment,
      user: userCurrent.email,
    };
    addCommentToFilm(filmId, data);
    await postCommentFilm(
      filmId,
      films?.find((film) => film.id === filmId)
    );
    setNewComment("");
    setCallback((prev) => !prev);
  };
  const [selectedEpisode, setSelectedEpisode] = useState(1);

  const episodes = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleEpisodeClick = (episode) => {
    setSelectedEpisode(episode);
  };
  return (
    <div className="App">
      <Header />

      <Container className="video-player-container">
        <Row>
          <Col md={8}>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
          <Col md={4}>
            <div className="video-info">
              <h3>KHI BỐ GẶP MẸ (PHẦN 2)</h3>
              <p>HOW I MET YOUR MOTHER SEASON 2 (2006)</p>
              <p>Số tập: 22</p>
              <p>Thể loại: Hài kịch, Lãng mạn</p>
              <p>
                Diễn viên: Josh Radnor, Jason Segel, Cobie Smulders, Neil
                Patrick Harris, Alyson Hannigan
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="episode-list-container">
        <ButtonGroup aria-label="Danh sách tập">
          {episodes.map((episode) => (
            <Button
              key={episode}
              variant={
                episode === selectedEpisode ? "primary" : "outline-secondary"
              }
              onClick={() => handleEpisodeClick(episode)}
            >
              Tập {episode}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <Container className="movie-content">
        <p>
          "Ted và Robin chính thức yêu nhau trong khi Marshall cố gắng tiếp tục
          cuộc sống mà không có Lily. Không thể chấp nhận nhìn Marshall gặp
          nhiều sự suy sụp tình cảm nữa, bạn anh ấy và Barney can thiệp sử dụng
          chiêu trò nhằm giúp Marshall có thể hẹn hò lại. Sau đó, Lily quay lại
          New York sau khi nhận ra mình không thể làm một nghệ sĩ như mong muốn.
          Cô ấy quay lại với Marshall và lễ đính hôn được sắp đặt lại. Khi Robin
          từ chối đi tr..."
        </p>
        <a href="#" className="read-more">
          Xem thêm
        </a>
      </Container>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "84%", maxWidth: "100%" }}>
          <Card.Header>Comment</Card.Header>
          <Card.Body>
            {userCurrent ? (
              <Form>
                <Form.Group controlId="commentInput">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={newComment}
                    onChange={handleCommentChange}
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmitComment}>
                  Send comment
                </Button>
              </Form>
            ) : (
              <p>
                You should{" "}
                <span
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>{" "}
                to comment
              </p>
            )}

            {filmDetail?.comments.length === 0 ? (
              <p>No Comment</p>
            ) : (
              <div>
                {filmDetail?.comments.map((comment, index) => (
                  <div
                    style={{
                      borderBottom: "1px solid lightgray",
                      display: "flex",
                      margin: "12px 0",
                      padding: "12px 0",
                      alignItems: "center",
                    }}
                    key={index}
                  >
                    <span style={{ marginRight: "12px" }}>
                      <FaUserCircle />
                    </span>
                    <span>{comment.cmt}</span>
                  </div>
                ))}
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
      <Row>
        <Container>
          {/* <Row>
            <Col md={6}>
              <h2 className="text-white">MOVIES OF THE SAME GENRE</h2>
            </Col>
            <Col md={6} className="custom-align"></Col>
          </Row> */}
          {/* <Row style={{ justifyContent: "center" }}>
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
          </Row> */}
        </Container>
      </Row>

      <Row>
        <Container>
          {/* <Row>
            <Col md={6}>
              <h2 className="text-white">MOVIE NOMINATION</h2>
            </Col>
            <Col md={6} className="custom-align">
              <Button variant="primary" className="mt-4">
                Xem tất cả
              </Button>
            </Col>
          </Row> */}
          {/* <Row style={{ justifyContent: "center" }}>
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
          </Row> */}
        </Container>
      </Row>
      <Footer />
    </div>
  );
}
