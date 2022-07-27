import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo=localStorage.getItem("userInfo")
    if(!userInfo){
      navigate("/");
    }
  })
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text"></div>
          <h1 className="title">WELCOME</h1>
          
        </Row>
      </Container>
    </div>
  )
}

export default Product