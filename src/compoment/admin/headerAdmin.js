import React from "react";
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
  Card,
  Dropdown,
} from "react-bootstrap";
import { removeLocalstorage } from "../../utils/LocalStorage";
import { useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeLocalstorage("user");
    navigate("/login");
  };
  return (
    <Row className="header-row header-row1  align-items-center">
      <Col md={3} className="header-col text-center">
        <h3
          className="admin-title admin-title1"
          onClick={() => navigate("/admin")}
        >
          ADMIN
        </h3>
      </Col>
      <Col md={9} className="header-col header-col1">
        <Navbar
          bg="light"
          variant="light"
          className="justify-content-between align-items-center shadow-sm shadow-sm1 rounded"
        >
          <Form inline>
            <FormControl
              type="text"
              placeholder="Tìm kiếm"
              className="mr-sm-2"
            />
          </Form>
          <div
            className="d-flex align-items-center ml-auto"
            style={{ marginLeft: "400px" }}
          >
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <Image
                  src="https://placehold.co/50x50?text=A"
                  className="profile-img profile-img1"
                  roundedCircle
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-right">
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar>
      </Col>
    </Row>
  );
};

export default HeaderAdmin;
