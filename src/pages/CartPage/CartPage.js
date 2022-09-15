import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { Container, Row, Col } from 'react-bootstrap';

const CartPage = () => {
  const { state, dispatch } = useContext(ProductsContext);
  // console.log(state, 'Cart PAge...');
  return (
    <Container>
      <Row>
        {state.cartData &&
          state.cartData.map((item) => {
            return (
              <Col md={3} key={item.id}>
                <Card>
                  <Card.Body>
                    <Card.Text>{item.title}</Card.Text>
                    <Button variant="primary" size="sm">
                      A-TO-C
                    </Button>
                    <Button variant="danger" size="sm">
                      R-FROM-C
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default CartPage;
