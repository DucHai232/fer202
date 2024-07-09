import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './forgotpass.css';

export default function ForgotPasswordPage() {
    return (
        <Container className="container container1">
            <h2>Quên Mật Khẩu</h2>
            <Form>
                <Form.Group controlId="formBasicEmail" className="form-group form-group1">
                    <Form.Label className="form-label form-label1">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Nhập email của bạn"
                        className="form-control form-control1"
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-primary btn-primary1" >
                    Gửi Yêu Cầu
                </Button>
            </Form>
        </Container>
    );
}
