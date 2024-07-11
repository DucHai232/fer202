import React, { useEffect, useState } from "react";
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
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
import { Link, useNavigate } from "react-router-dom";
import HeaderAdmin from "./headerAdmin";
import Menu from "./Menu";
import { deleteFilm, getFilms } from "../../actions/film";

export default function ListFilm() {
  const navigate = useNavigate();
  const [films, setFilms] = useState([]);
  useEffect(() => {
    setFilms(getFilms());
  }, []);

  const handleDelete = (filmId) => {
    const confirm = window.confirm("Bạn có muốn xóa phim này không");
    if (confirm) {
      const result = deleteFilm(filmId);
      if (result) {
        alert(result.message);
        setFilms(getFilms());
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
              onClick={() => navigate("/admin/add-film")}
            >
              Tạo film
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
                <th>Têm film</th>
                <th>Chủ đề</th>
                <th>Thể loại</th>
                <th>Ngày công chiếu</th>
                <th>Thời gian</th>
                <th>Tác giả</th>
                <th>Trạng thái</th>
                <th>Sửa</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {films.map((film, index) => (
                <tr key={index} className="table-row table-row1">
                  <td>{film.nameFilm}</td>
                  <td>{film.topic}</td>
                  <td>{film.type}</td>
                  <td>{film.releaseDate}</td>
                  <td>{film.runTime} phút</td>
                  <td>{film.writer}</td>
                  <td
                    className={
                      film.status === "Released"
                        ? "text-success"
                        : "text-warning"
                    }
                  >
                    {film.status}
                  </td>

                  <td onClick={() => handleDelete(film.id)}>
                    <Button>Xóa</Button>
                  </td>
                  <td onClick={() => handleUpdate(film.id)}>
                    <Button
                      variant="warning"
                      onClick={() => navigate(`/admin/update-film/${film.id}`)}
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
