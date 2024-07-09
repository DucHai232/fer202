import React, { useState } from 'react';
import { Col, Container, Row, Navbar, Nav, FormControl, Button, Image, NavDropdown, Form, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css'; 

export default function UpdateUser() {
    const [user, setUser] = useState({
        avatar: 'P',
        name: 'Phạm Đình Tiến',
        email: 'phamdinhtien@gmail.com',
        phone: '0709732310',
        role: 'USER',
        status: 'Kích hoạt',
        date: '13-04-2024',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Updated user:', user);
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
                        <Card.Header as="h2" className="text-center">Update User</Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row} controlId="formAvatar">
                                    <Form.Label column sm="2">Avatar</Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" name="avatar" value={user.avatar} onChange={handleChange} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formName">
                                    <Form.Label column sm="2">Full Name</Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" name="name" value={user.name} onChange={handleChange} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formEmail">
                                    <Form.Label column sm="2">Email</Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="email" name="email" value={user.email} onChange={handleChange} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPhone">
                                    <Form.Label column sm="2">Phone Number</Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" name="phone" value={user.phone} onChange={handleChange} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formRole">
                                    <Form.Label column sm="2">Role</Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" name="role" value={user.role} onChange={handleChange} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formStatus">
                                    <Form.Label column sm="2">Status</Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" name="status" value={user.status} onChange={handleChange} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formDate">
                                    <Form.Label column sm="2">Creation Date</Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" name="date" value={user.date} onChange={handleChange} readOnly />
                                    </Col>
                                </Form.Group>

                                <div className="d-flex justify-content-end">
                                    <Button variant="primary" type="submit">Update</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
