import React, { useContext, useState } from 'react';
import {
  ProductsContext,
  useState,
  useEffect,
} from '../../contexts/ProductsContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ACTIONS } from '../../reducers/ProductsReducer';

const CartPage = () => {
  const { state, dispatch } = useContext(ProductsContext);

  const [total, setTotal] = useState(0);

  return (
    <Container>
      <Row>
        {state.cartData.length === 0 ? (
          <Col>Cart is Empty. Go and do some shoping.</Col>
        ) : (
          <React.Fragment>
            <Col md={12} className="my-5">
              <h2>Total : {total}</h2>
            </Col>
            {state.cartData &&
              state.cartData.map((cp) => {
                return (
                  <Col md={3} key={cp.id}>
                    <Card>
                      <Card.Body>
                        <Card.Text>{cp.title}</Card.Text>
                        <Card.Text>
                          <strong>
                            <em>${cp.price * cp.quantity}</em>
                          </strong>
                        </Card.Text>
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
                        </Button>{' '}
                        <Button
                          variant="dark"
                          size="sm"
                          onClick={() => {
                            dispatch({
                              type: ACTIONS.UPDATE_PRODUCT_COUNT,
                              payload: { id: cp.id, qty: cp.quantity - 1 },
                            });
                          }}
                        >
                          -
                        </Button>
                        {cp.quantity}
                        <Button
                          variant="dark"
                          size="sm"
                          onClick={() => {
                            dispatch({
                              type: ACTIONS.UPDATE_PRODUCT_COUNT,
                              payload: { id: cp.id, qty: cp.quantity + 1 },
                            });
                          }}
                        >
                          +
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </React.Fragment>
        )}
      </Row>
    </Container>
  );
};

export default CartPage;
