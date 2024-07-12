import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <NavDropdown
              title="Quản lý phim"
              id="nav-dropdown-p1"
              style={{ fontSize: "25px" }}
            >
              <NavDropdown.Item as={Link} to={"/admin/list-film"}>
                Danh sách phim
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/admin/add-film"}>
                Thêm phim
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Quản lý user"
              id="nav-dropdown-p2"
              style={{ fontSize: "25px" }}
            >
              <NavDropdown.Item as={Link} to={"/admin"}>
                Danh sách user
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Quản lý diễn viên"
              id="nav-dropdown-p2"
              style={{ fontSize: "25px" }}
            >
              <NavDropdown.Item as={Link} to={"/admin/list-actor"}>
                Danh sách diễn viên
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </>
  );
};

export default Menu;
