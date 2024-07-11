import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Navbar,
  Button,
  Table,
  Card,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css"; // Custom CSS for styling
import HeaderAdmin from "./headerAdmin";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "./Menu";
import { getUser, getUserById, updateUser } from "../../actions/user";

export default function DetailUser() {
  const { userId } = useParams();
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    status: false,
  });

  const navigate = useNavigate();
  useEffect(() => {
    setUsers(getUser());
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      const user = users.find((user) => user.id === userId);
      if (user) {
        setUserDetails({
          name: user.name,
          phone: user.phone,
          status: user.status,
        });
      }
    }
  }, [users, userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleStatusChange = (e) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      status: e.target.checked,
    }));
  };

  const handleUpdate = () => {
    try {
      const result = updateUser(userId, userDetails);
      if (result) {
        alert(result.message);
        navigate("/admin");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error updating user: ", error);
      alert("Failed to update user");
    }
  };

  const user = getUserById(userId);
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
          <Card className="shadow-sm shadow-sm1 rounded">
            <Card.Header as="h2" className="text-center">
              User Details
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={4} className="text-center">
                  <div className="avatar-circle avatar-circle1">
                    <span className="initials initials1"></span>
                  </div>
                </Col>
                <Col md={8}>
                  <Table
                    striped
                    bordered
                    hover
                    className="shadow-sm shadow-sm1 rounded"
                  >
                    <tbody>
                      <tr>
                        <th>Full Name</th>
                        <td>
                          {editMode ? (
                            <Form.Control
                              type="text"
                              name="name"
                              value={userDetails.name}
                              onChange={handleInputChange}
                            />
                          ) : (
                            userDetails.name
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{user?.email}</td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>
                          {editMode ? (
                            <Form.Control
                              type="text"
                              name="phone"
                              value={userDetails.phone}
                              onChange={handleInputChange}
                            />
                          ) : (
                            userDetails.phone
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>Role</th>
                        <td>{user?.isAdmin ? "ADMIN" : "USER"}</td>
                      </tr>
                      <tr>
                        <th>Status</th>
                        <td>
                          {editMode ? (
                            <Form.Check
                              type="checkbox"
                              name="status"
                              checked={userDetails.status}
                              onChange={handleStatusChange}
                              label={
                                userDetails.status
                                  ? "Kích hoạt"
                                  : "Không hoạt động"
                              }
                            />
                          ) : userDetails.status ? (
                            <span className="text-success">Kích hoạt</span>
                          ) : (
                            <span className="text-warning">
                              Không hoạt động
                            </span>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="d-flex justify-content-end">
                    {editMode ? (
                      <Button variant="primary" onClick={handleUpdate}>
                        Save
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        onClick={() => setEditMode(true)}
                      >
                        Edit
                      </Button>
                    )}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
