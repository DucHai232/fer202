import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header";
import { filterFilmOrigin } from "../../actions/film";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../footer/Footer";

const OriginPage = () => {
  const { origin } = useParams();
  const navigate = useNavigate();
  const [films, setFilms] = useState([]);
  useEffect(() => {
    setFilms(filterFilmOrigin(origin));
  }, [origin]);

  return (
    <>
      <Header />
      <Container>
        <h2
          style={{
            margin: "30px 100px",
          }}
        >
          {origin}
        </h2>
        <Row style={{ justifyContent: "center" }}>
          {films.length > 0 ? (
            films.map((film) => (
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
            ))
          ) : (
            <div>Không tìm thấy kết quả</div>
          )}
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default OriginPage;
