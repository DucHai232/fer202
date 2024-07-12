import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./changpass.css";
import { changePassword } from "../../actions/user";
import { useNavigate } from "react-router-dom";
import { removeLocalstorage } from "../../utils/LocalStorage";

export default function ChangePasswordPage() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Mật khẩu mới và xác nhận mật khẩu mới không khớp.");
      return;
    }
    const result = changePassword(password, newPassword);
    if (result.success) {
      setPassword("");
      setNewPassword("");
      setConfirmPassword("");
      removeLocalstorage("user");
      navigate("/login");
    } else {
      alert(result.message);
    }
  };

  return (
    <>
      <Container fluid className="container container1">
        <Row>
          <Col>
            <h2>Thay Đổi Mật Khẩu</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                controlId="formOldPassword"
                className="form-group form-group1"
              >
                <Form.Label className="form-label form-label1">
                  Mật Khẩu Cũ
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nhập mật khẩu cũ"
                  className="form-control form-control1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group
                controlId="formNewPassword"
                className="form-group form-group1"
              >
                <Form.Label className="form-label form-label1">
                  Mật Khẩu Mới
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nhập mật khẩu mới"
                  className="form-control form-control1"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group
                controlId="formConfirmPassword"
                className="form-group"
              >
                <Form.Label className="form-label">
                  Xác Nhận Mật Khẩu Mới
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Xác nhận mật khẩu mới"
                  className="form-control form-control1"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button
                style={{ marginTop: "12px" }}
                variant="primary"
                type="submit"
                className="btn-primary1 btn-primary1"
              >
                Thay Đổi Mật Khẩu
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
