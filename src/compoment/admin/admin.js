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
import { deleteUser, getUser } from "../../actions/user";

export default function Admin() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(getUser());
  }, []);

  const handleDelete = (userId) => {
    const confirm = window.confirm("Bạn có muốn xóa không");
    if (confirm) {
      const result = deleteUser(userId);
      if (result) {
        alert(result.message);
        setUsers(getUser());
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
              onClick={() => navigate("/admin/create-admin")}
            >
              Tạo Admin
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
                    <Button
                      variant="warning"
                      onClick={() => navigate(`/admin/update-user/${user.id}`)}
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
