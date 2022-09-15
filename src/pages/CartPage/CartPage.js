import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ACTIONS } from '../../reducers/ProductsReducer';

const CartPage = () => {
  const { state, dispatch } = useContext(ProductsContext);
  return (
    <Container>
      <Row>
        {state.cartData.length === 0 ? (
          <Col>Cart is Empty. Go and do some shoping.</Col>
        ) : (
          state.cartData &&
          state.cartData.map((cp) => {
            return (
              <Col md={3} key={cp.id}>
                <Card>
                  <Card.Body>
                    <Card.Text>{cp.title}</Card.Text>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => {
                        dispatch({
                          type: ACTIONS.REMOVE_FROM_CART,
                          payload: cp.id,
                        });
                      }}
                    >
                      R-FROM-C
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
};

export default CartPage;
