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
import "./Admin.css"; // Custom CSS for styling
import { removeLocalstorage } from "../../utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUser } from "../../apis/user.request";

export default function Admin() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [callback, setCallBack] = useState(false);
  useEffect(() => {
    const fetchDataUser = async () => {
      const response = await getUser();
      setUsers(response.data);
    };
    fetchDataUser();
  }, [callback]);
  const handleLogout = () => {
    removeLocalstorage("user");
    navigate("/login");
  };

  const handleDelete = async (userId) => {
    console.log(userId);
    const confirm = window.confirm("Bạn có muốn xóa không");
    if (confirm) {
      await deleteUser(userId);
      setCallBack((prev) => !prev);
    }
  };
  const handleUpdate = () => {};
  return (
    <Container fluid className="admin-container admin-container1">
      <Row className="header-row header-row1  align-items-center">
        <Col md={3} className="header-col text-center">
          <h3 className="admin-title admin-title1">ADMIN</h3>
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
      <Row>
        <Col md={3} className="sidebar-col sidebar-col1">
          <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            className="flex-column sidebar sidebar1"
          >
            <Container fluid>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column">
                  <NavDropdown
                    title="Quản lý phim"
                    id="nav-dropdown-p1"
                    style={{ fontSize: "25px" }}
                  >
                    <NavDropdown.Item href="#action1">
                      Danh sách phim
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action2">
                      Thêm phim
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Sửa phim
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Quản lý user"
                    id="nav-dropdown-p2"
                    style={{ fontSize: "25px" }}
                  >
                    <NavDropdown.Item href="#action5">
                      Danh sách user
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action7">
                      Sửa user
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        <Col md={9} className="content-col content-col1">
          <div className="button-section button-section1 d-flex justify-content-between align-items-center my-3">
            <Button
              style={{ width: "150px" }}
              className="shadow-sm shadow-sm1 create-button create-button1"
            >
              Tạo user
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
                <th>Họ tên</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Quyền</th>
                <th>Trạng thái</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="table-row table-row1">
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.isAdmin ? "ADMIN" : "USER"}</td>
                  <td className={user.status ? "text-success" : "text-warning"}>
                    {user.status ? "Kích hoạt" : "Không hoạt động"}
                  </td>
                  <td onClick={() => handleDelete(user.id)}>
                    <Button>Xóa</Button>
                  </td>
                  <td onClick={() => handleUpdate(user.id)}>
                    <Button variant="warning">Sửa</Button>
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
