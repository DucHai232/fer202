import React from 'react';
import { Col, Container, Row, Navbar, Nav, FormControl, Button, Image, NavDropdown, Table, Form, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css'; // Custom CSS for styling

export default function DetailUser() {
    const user = {
        avatar: 'P',
        name: 'Phạm Đình Tiến',
        email: 'phamdinhtien@gmail.com',
        phone: '0709732310',
        role: 'USER',
        status: 'Kích hoạt',
        date: '13-04-2024',
    };

    return (
        <Container fluid className="admin-container admin-container1">
            <Row className="header-row header-row1 align-items-center">
                <Col md={3} className="header-col text-center">
                    <h3 className="admin-title admin-title1">ADMIN</h3>
                </Col>
                <Col md={9} className="header-col header-col1">
                    <Navbar bg="light" variant="light" className="justify-content-between align-items-center shadow-sm shadow-sm1 rounded">
                        <Form inline>
                            <FormControl type="text" placeholder="Tìm kiếm" className="mr-sm-2" />
                        </Form>
                        <div className="d-flex align-items-center">          
                            <Image src="https://placehold.co/50x50?text=A" className="profile-img profile-img1" roundedCircle style={{marginLeft:"800px"}} />
                        </div>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col md={3} className="sidebar-col sidebar-col1">
                    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column sidebar sidebar1">
                        <Container fluid>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="flex-column" >
                                    <NavDropdown title="Quản lý phim" id="nav-dropdown-p1" style={{fontSize:"25px"}}>
                                        <NavDropdown.Item href="#action1">Danh sách phim</NavDropdown.Item>
                                        <NavDropdown.Item href="#action2">Thêm phim</NavDropdown.Item>
                                        <NavDropdown.Item href="#action3">Sửa phim</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Xóa phim</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Quản lý user" id="nav-dropdown-p2" style={{fontSize:"25px"}}>
                                        <NavDropdown.Item href="#action5">Danh sách user</NavDropdown.Item>
                                        <NavDropdown.Item href="#action6">Tạo user</NavDropdown.Item>
                                        <NavDropdown.Item href="#action7">Sửa user</NavDropdown.Item>
                                        <NavDropdown.Item href="#action8">Xóa user</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
                <Col md={9} className="content-col content-col1">
                    <Card className="shadow-sm shadow-sm1 rounded">
                        <Card.Header as="h2" className="text-center">User Details</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={4} className="text-center">
                                    <div className="avatar-circle avatar-circle1">
                                        <span className="initials initials1">{user.avatar}</span>
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <Table striped bordered hover className="shadow-sm shadow-sm1 rounded">
                                        <tbody>
                                            <tr>
                                                <th>Full Name</th>
                                                <td>{user.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>{user.email}</td>
                                            </tr>
                                            <tr>
                                                <th>Phone Number</th>
                                                <td>{user.phone}</td>
                                            </tr>
                                            <tr>
                                                <th>Role</th>
                                                <td>{user.role}</td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td className={user.status === 'Kích hoạt' ? 'text-success' : 'text-warning'}>
                                                    {user.status}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Creation Date</th>
                                                <td>{user.date}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <div className="d-flex justify-content-end">
                                            
                                        <Button variant="primary">Update</Button>
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
