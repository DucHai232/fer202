import React from 'react';
import { Col, Container, Row, Navbar, Nav, FormControl, Button, Image, NavDropdown, Table, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin1.css'; // Custom CSS for styling

export default function Admin1() {
    const movies = [
        {
            poster: 'https://placehold.co/50x50?text=F',
            title: 'Fast & Furious 9',
            director: 'Justin Lin',
            genre: 'Action',
            status: 'Released',
            releaseDate: '25-06-2021',
        },
        {
            poster: 'https://placehold.co/50x50?text=A',
            title: 'Avengers: Endgame',
            director: 'Anthony Russo, Joe Russo',
            genre: 'Action',
            status: 'Released',
            releaseDate: '26-04-2019',
        },
        {
            poster: 'https://placehold.co/50x50?text=I',
            title: 'Inception',
            director: 'Christopher Nolan',
            genre: 'Sci-Fi',
            status: 'Released',
            releaseDate: '16-07-2010',
        },
        {
            poster: 'https://placehold.co/50x50?text=T',
            title: 'Titanic',
            director: 'James Cameron',
            genre: 'Romance',
            status: 'Released',
            releaseDate: '19-12-1997',
        },
    ];

    return (
        <Container fluid className="admin-container admin-container1">
            <Row className="header-row header-row1  align-items-center">
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
                                        
                                    </NavDropdown>
                                    <NavDropdown title="Quản lý user" id="nav-dropdown-p2" style={{fontSize:"25px"}}>
                                        <NavDropdown.Item href="#action5">Danh sách user</NavDropdown.Item>
                                        
                                        <NavDropdown.Item href="#action7">Sửa user</NavDropdown.Item>
                                        
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
                <Col md={9} className="content-col content-col1">
                    <div className="button-section button-section1 d-flex justify-content-between align-items-center my-3">
                        <Button style={{width:"150px"}} className="shadow-sm shadow-sm1 create-button create-button1">Add movie</Button>
                        
                    </div>

                    <Table striped bordered hover className="shadow-sm rounded">
                        <thead>
                            <tr>
                                <th>Poster</th>
                                <th>Tiêu đề</th>
                                <th>Đạo diễn</th>
                                <th>Thể loại</th>
                                <th>Trạng thái</th>
                                <th>Ngày phát hành</th>
                                <th>Xóa</th>
                                <th>Cập nhật</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map((movie, index) => (
                                <tr key={index} className="table-row">
                                    <td>
                                        <Image src={movie.poster} roundedCircle style={{ width: "50px", height: "50px" }} />
                                    </td>
                                    <td>{movie.title}</td>
                                    <td>{movie.director}</td>
                                    <td>{movie.genre}</td>
                                    <td className={movie.status === 'Released' ? 'text-success' : 'text-warning'}>
                                        {movie.status}
                                    </td>
                                    <td>{movie.releaseDate}</td>
                                    <td>Xóa</td>
                                    <td>Cập nhật</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
