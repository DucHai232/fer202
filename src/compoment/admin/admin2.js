import React from 'react';
import { Col, Container, Row, Navbar, Nav, FormControl, Button, Image, NavDropdown, Table, Form, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css';

export default function DetailMovie() {
    const movie = {
        poster: 'https://placehold.co/200x300?text=Fast+%26+Furious+9',
        title: 'Fast & Furious 9',
        director: 'Justin Lin',
        genre: 'Action',
        status: 'Released',
        releaseDate: '25-06-2021',
        description: 'Dom Toretto and his family must face Dom\'s younger brother Jakob, a deadly assassin, who is working with their old enemy Cipher, and who holds a personal vendetta against Dom.',
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
                                <Nav className="flex-column">
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
                        <Card.Header as="h2" className="text-center">Movie Details</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={4} className="text-center">
                                    <Image src={movie.poster} className="movie-poster" rounded style={{ width: "200px", height: "300px" }} />
                                </Col>
                                <Col md={8}>
                                    <Table striped bordered hover className="shadow-sm shadow-sm1 rounded">
                                        <tbody>
                                            <tr>
                                                <th>Title</th>
                                                <td>{movie.title}</td>
                                            </tr>
                                            <tr>
                                                <th>Director</th>
                                                <td>{movie.director}</td>
                                            </tr>
                                            <tr>
                                                <th>Genre</th>
                                                <td>{movie.genre}</td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td className={movie.status === 'Released' ? 'text-success' : 'text-warning'}>
                                                    {movie.status}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Release Date</th>
                                                <td>{movie.releaseDate}</td>
                                            </tr>
                                            <tr>
                                                <th>Description</th>
                                                <td>{movie.description}</td>
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
