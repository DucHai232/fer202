import React, { useState } from "react";
import {
  Nav,
  Container,
  Navbar,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { loadFromLocalstorage } from "../../utils/LocalStorage";
import typeFilm from "../../dataSource/typeFilm.json";
import originFilm from "../../dataSource/originFilm.json";
const Header = () => {
  const user = loadFromLocalstorage("user");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={"/"} style={{ color: "orange" }}>
            <i className="bi bi-film"></i>Movix
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/phim-le">
                Phim Lẻ
              </Nav.Link>
              <Nav.Link as={Link} to="/phim-bo">
                Phim Bộ
              </Nav.Link>
              <NavDropdown title="Thể loại" id="basic-nav-dropdown">
                {typeFilm.map((type) => (
                  <NavDropdown.Item as={Link} to={type.url}>
                    {type.text}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown title="Quốc Gia" id="basic-nav-dropdown">
                {originFilm.map((origin) => (
                  <NavDropdown.Item as={Link} to={origin.url}>
                    {origin.text}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Form className="d-flex me-auto" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" style={{ backgroundColor: "red" }}>
                Search
              </Button>
            </Form>
            <Nav>
              {user ? (
                <NavDropdown
                  title={<FaUserCircle size={30} style={{ color: "white" }} />}
                  id="user-nav-dropdown"
                  align="end"
                >
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleLogout()}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Button
                  style={{ backgroundColor: "green" }}
                  onClick={() => navigate("/login")}
                >
                  Đăng nhập
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
