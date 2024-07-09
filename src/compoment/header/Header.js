import React from "react";
import {
  Nav,
  Container,
  Navbar,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={"/"} style={{ color: "orange" }}>
            <i class="bi bi-film"></i>Movix
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
                <NavDropdown.Item as={Link} to="/the-loai/than-thoai">
                  Thần thoại
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/the-loai/chien-tranh">
                  Chiến tranh
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/the-loai/vien-tuong">
                  Viễn Tưởng
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/the-loai/co-trang">
                  Cổ Trang
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/the-loai/hoc-duong">
                  Học Đường
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/the-loai/bi-an">
                  Bí Ẩn
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/the-loai/phieu-luu">
                  Phiêu Lưu
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/the-loai/hai-huoc">
                  Hài Hước
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/the-loai/tam-ly">
                  Tâm lý
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Quốc Gia" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/quoc-gia/viet-nam">
                  Việt Nam
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quoc-gia/nhat-ban">
                  Nhật Bản
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quoc-gia/my">
                  Mỹ
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quoc-gia/han-quoc">
                  Hàn Quốc
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quoc-gia/trung-quoc">
                  Trung Quốc
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quoc-gia/an-do">
                  Ấn Độ
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{ backgroundColor: "red" }}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
