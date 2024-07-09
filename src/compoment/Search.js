import { Container, Row, Form, Button, FormControl, Navbar, Nav, Col, Card, Image, Carousel, ToggleButton, ToggleButtonGroup, Badge } from "react-bootstrap";
import './Search.css';
export default function Search() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" style={{ color: "orange" }}>
                        <i class="bi bi-film"></i>Movix</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#Phim Lẻ">Phim Lẻ</Nav.Link>
                            <Nav.Link href="#Phim Bộ">Phim Bộ</Nav.Link>
                            <Nav.Link href="#Thể loại">Thể loại</Nav.Link>
                            <Nav.Link href="#Quốc Gia">Quốc Gia</Nav.Link>
                            <Nav.Link href="#Login">Login</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Tìm tên phim, diễn viên..."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button style={{ backgroundColor: 'red' }}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row className="my-3">
                    <Col>
                        <h5>TỪ KHÓA: AA</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={2}>
                        <Form.Group controlId="categorySelect">
                            <Form.Control as="select">
                                <option>Thể loại</option>
                                <option>Hành động</option>
                                <option>Kịch tính</option>
                                <option>Hài hước</option>
                                <option>Kinh dị</option>
                                <option>Viễn tưởng</option>
                                <option>Hoạt hình</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={2}>
                        <Form.Group controlId="countrySelect">
                            <Form.Control as="select">
                                <option>Quốc gia</option>
                                <option>Mỹ</option>
                                <option>Việt Nam</option>
                                <option>Hàn</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={2}>
                        <Form.Group controlId="yearSelect">
                            <Form.Control as="select">
                                <option>Năm phát hành</option>
                                <option>2024</option>
                                <option>2023</option>
                                <option>2022</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={2}>
                        <Form.Group controlId="languageSelect">
                            <Form.Control as="select">
                                <option>Ngôn Ngữ</option>
                                <option>Phụ đề</option>
                                <option>Thuyết minh</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={2}>
                        <Form.Group controlId="sortSelect">
                            <Form.Control as="select">
                                <option>Sắp xếp</option>
                                <option>Thời gian cập nhật</option>
                                <option>Lượt xem</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={2}>
                        <Form.Group controlId="formatSelect">
                            <Form.Control as="select">
                                <option>Hình thức</option>
                                <option>Phim lẻ</option>
                                <option>Phim bộ</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-right">
                        <Button variant="warning">Tìm kiếm</Button>
                    </Col>
                </Row>
            </Container>
            <Container>

                <Row >
                    <Container>
                        <Row style={{ justifyContent: "center" }}>
                            <Col xs={6} md={2} lg={2}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="./Anh/anh1.png" />
                                    <Card.ImgOverlay>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                                            10.0
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                                <div className="text-white">
                                    <h1>Hit Man</h1>
                                    <p>Jun 8, 2024</p>
                                </div>
                            </Col>
                            <Col xs={6} md={2} lg={2}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="./Anh/anh2.png" />
                                    <Card.ImgOverlay>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                                            10.0
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                                <div className="text-white">
                                    <h1>Hit Man</h1>
                                    <p>Jun 8, 2024</p>
                                </div>
                            </Col>
                            <Col xs={6} md={2} lg={2}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="./Anh/anh3.png" />
                                    <Card.ImgOverlay>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                                            10.0
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                                <div className="text-white">
                                    <h1>Hit Man</h1>
                                    <p>Jun 8, 2024</p>
                                </div>
                            </Col>
                            <Col xs={6} md={2} lg={2}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="./Anh/anh4.png" />
                                    <Card.ImgOverlay>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                                            10.0
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                                <div className="text-white">
                                    <h1>Hit Man</h1>
                                    <p>Jun 8, 2024</p>
                                </div>
                            </Col>
                            <Col xs={6} md={2} lg={2}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="./Anh/anh5.png" />
                                    <Card.ImgOverlay>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                                            10.0
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                                <div className="text-white">
                                    <h1>Hit Man</h1>
                                    <p>Jun 8, 2024</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row >
                    <Container>
                        <Row style={{ justifyContent: "center" }}>
                            <Col xs={6} md={2} lg={2}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="./Anh/anh1.png" />
                                    <Card.ImgOverlay>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                                            10.0
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                                <div className="text-white">
                                    <h1>Hit Man</h1>
                                    <p>Jun 8, 2024</p>
                                </div>
                            </Col>
                            <Col xs={6} md={2} lg={2}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="./Anh/anh2.png" />
                                    <Card.ImgOverlay>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                                            10.0
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                                <div className="text-white">
                                    <h1>Hit Man</h1>
                                    <p>Jun 8, 2024</p>
                                </div>
                            </Col>
                            <Col xs={6} md={2} lg={2}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="./Anh/anh3.png" />
                                    <Card.ImgOverlay>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                                            10.0
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                                <div className="text-white">
                                    <h1>Hit Man</h1>
                                    <p>Jun 8, 2024</p>
                                </div>
                            </Col>
                            <Col xs={6} md={2} lg={2}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="./Anh/anh4.png" />
                                    <Card.ImgOverlay>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                                            10.0
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                                <div className="text-white">
                                    <h1>Hit Man</h1>
                                    <p>Jun 8, 2024</p>
                                </div>
                            </Col>
                            <Col xs={6} md={2} lg={2}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="./Anh/anh5.png" />
                                    <Card.ImgOverlay>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                                            10.0
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                                <div className="text-white">
                                    <h1>Hit Man</h1>
                                    <p>Jun 8, 2024</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row >
                    <Container>
                        <Row style={{ justifyContent: "center" }}>
                            <Col xs={6} md={2} lg={2}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="./Anh/anh1.png" />
                                    <Card.ImgOverlay>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                                            10.0
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                                <div className="text-white">
                                    <h1>Hit Man</h1>
                                    <p>Jun 8, 2024</p>
                                </div>
                            </Col>
                            <Col xs={6} md={2} lg={2}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="./Anh/anh2.png" />
                                    <Card.ImgOverlay>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                                            10.0
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                                <div className="text-white">
                                    <h1>Hit Man</h1>
                                    <p>Jun 8, 2024</p>
                                </div>
                            </Col>
                            <Col xs={6} md={2} lg={2}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="./Anh/anh3.png" />
                                    <Card.ImgOverlay>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                                            10.0
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                                <div className="text-white">
                                    <h1>Hit Man</h1>
                                    <p>Jun 8, 2024</p>
                                </div>
                            </Col>
                            <Col xs={6} md={2} lg={2}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="./Anh/anh4.png" />
                                    <Card.ImgOverlay>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                                            10.0
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                                <div className="text-white">
                                    <h1>Hit Man</h1>
                                    <p>Jun 8, 2024</p>
                                </div>
                            </Col>
                            <Col xs={6} md={2} lg={2}>
                                <Card className="bg-dark text-white">
                                    <Card.Img src="./Anh/anh5.png" />
                                    <Card.ImgOverlay>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Badge bg="danger" className="me-2">Romance</Badge>
                                        <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                                            10.0
                                        </Button>
                                    </Card.ImgOverlay>
                                </Card>
                                <div className="text-white">
                                    <h1>Hit Man</h1>
                                    <p>Jun 8, 2024</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Row>

                <Row style={{ marginTop: "80px" }}>
                    <footer style={{ backgroundColor: '#0b0d17', color: '#fff', padding: '20px 0' }}>
                        <Container>
                            <Row>
                                <Col className="text-center">
                                    <a href="#terms" style={{ color: '#fff', margin: '0 10px' }}>Term of use</a>
                                    <a href="#privacy" style={{ color: '#fff', margin: '0 10px' }}>Privacy Policy</a>
                                    <a href="#about" style={{ color: '#fff', margin: '0 10px' }}>About</a>
                                    <a href="#blog" style={{ color: '#fff', margin: '0 10px' }}>Blog</a>
                                    <a href="#faq" style={{ color: '#fff', margin: '0 10px' }}>FAQ</a>
                                </Col>
                            </Row>
                            <Row >
                                <Col className="text-center" style={{ marginTop: '50px' }}>
                                    <p>© 2023 Movie App. All rights reserved.</p>
                                    <p>Discover the latest movies and TV shows. Explore now! Designed with passion</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center" style={{ marginTop: '10px' }}>
                                    <a href="https://www.facebook.com" style={{ color: '#fff', margin: '0 10px' }}></a>
                                    <a href="https://www.instagram.com" style={{ color: '#fff', margin: '0 10px' }}></a>
                                    <a href="https://www.twitter.com" style={{ color: '#fff', margin: '0 10px' }}></a>
                                    <a href="https://www.linkedin.com" style={{ color: '#fff', margin: '0 10px' }}></a>
                                </Col>
                            </Row>
                        </Container>
                    </footer>

                </Row>
            </Container>
        </div>
    )
}