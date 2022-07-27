import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Screen.css";
export const Screen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/products");
    }
  });

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text"></div>
          <h1 className="title">WELCOME</h1>
          <div className="buttonContainer">
            <Link to="/login">
              <Button
                size="lg"
                className="landingButton"
                variant="outline-primary"
              >
                LOGIN
              </Button>
            </Link>
            <a href="/signup">
              <Button size="lg" className="landingButton">
                SIGNUP
              </Button>
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Screen;
