import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import FolderStructure from './pages/FolderStructure/FolderStructure';
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
            <h6>Product Page...</h6>
            <ProductPage />
          </Col>
          <Col md={6}>
            <h6>Cart Page...</h6>
            <CartPage />
          </Col>
          <Col md={12}>
            <h6>Folder Structure...</h6>
            <FolderStructure />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
