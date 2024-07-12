import React, { useEffect, useState } from "react";
import { Col, Container, Row, Navbar, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
import { Link, useNavigate } from "react-router-dom";
import HeaderAdmin from "./headerAdmin";
import Menu from "./Menu";
import { deleteActor, getActors } from "../../actions/actor";
import { getFilms, updateActorOfFilm } from "../../actions/film";

export default function ListActor() {
  const navigate = useNavigate();
  const [actors, setActors] = useState([]);
  const [films, setFilms] = useState([]);
  useEffect(() => {
    setActors(getActors());
    setFilms(getFilms());
  }, []);

  const handleDelete = (actorId, filmId) => {
    const confirm = window.confirm("Bạn có muốn xóa không");

    if (confirm) {
      const result = deleteActor(actorId);
      if (result) {
        const filmOfActor = films.find((el) => el.id === filmId);
        const deleteActorInFilm = filmOfActor.actor.filter(
          (el) => el.id !== actorId
        );
        updateActorOfFilm(filmId, deleteActorInFilm);

        alert(result.message);
        setActors(getActors());
      } else {
        alert(result.message);
      }
    }
  };
  const handleUpdate = () => {};
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
          <div className="button-section button-section1 d-flex justify-content-between align-items-center my-3">
            <Button
              style={{ width: "150px" }}
              className="shadow-sm shadow-sm1 create-button create-button1"
              onClick={() => navigate("/admin/create-actor")}
            >
              Tạo Diễn Viên
            </Button>
          </div>

          <Table
            striped
            bordered
            hover
            className="shadow-sm shadow-sm1 rounded"
          >
            <thead>
              <tr>
                <th>Tên diễn viên</th>
                <th>Avatar</th>
                <th>Vai trò</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {actors.map((actor, index) => (
                <tr key={index} className="table-row table-row1">
                  <td>{actor.name}</td>
                  <td>
                    <img
                      src={actor.avatar}
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>{actor.role}</td>

                  <td onClick={() => handleDelete(actor.id, actor.film)}>
                    <Button>Xóa</Button>
                  </td>
                  <td onClick={() => handleUpdate(actor.id)}>
                    <Button
                      variant="warning"
                      onClick={() =>
                        navigate(`/admin/update-actor/${actor.id}`)
                      }
                    >
                      Sửa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
