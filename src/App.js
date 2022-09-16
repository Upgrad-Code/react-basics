import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

export default function App() {
  return (
    // <React.Fragment>
    //   <NavBar />
    //   <Routes>
    //     <Route path="/" element={<ProductPage />} />
    //     <Route path="cart" element={<CartPage />} />
    //   </Routes>
    // </React.Fragment>
    <React.Fragment>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Product Page...</h5>
            <ProductPage />
          </Col>
          <Col md={6}>
            <h5>Cart Page...</h5>
            <CartPage />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
