import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ProductsContext } from '../../contexts/ProductsContext';
import { API_URL } from '../../helpers/config ';
import { GET_JSON } from '../../helpers/helperFn';
import { ACTIONS } from '../../reducers/ProductsReducer';

const ProductPage = () => {
  const { state, dispatch } = useContext(ProductsContext);

  useEffect(() => {
    dispatch({
      type: ACTIONS.FETCH_START,
    });

    (async () => {
      try {
        const data = await GET_JSON(API_URL);
        dispatch({
          type: ACTIONS.FETCH_SUCCESS,
          payload: data.products,
        });
      } catch (error) {
        dispatch({
          type: ACTIONS.FETCH_ERROR,
          payload: error,
        });
      }
    })();
  }, []);

  return (
    <Container>
      <Row>
        {state.data &&
          state.data.map((p) => {
            return (
              <Col md={3} key={p.id}>
                <Card>
                  <Card.Body>
                    <Card.Text>{p.title}</Card.Text>
                    <Card.Text>
                      <strong>
                        <em>${p.price}</em>
                      </strong>
                    </Card.Text>
                    {state.cartData.find((cp) => cp.id === p.id) ? (
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                          dispatch({
                            type: ACTIONS.REMOVE_FROM_CART,
                            payload: p.id,
                          });
                        }}
                      >
                        R-FROM-C
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          dispatch({
                            type: ACTIONS.ADD_TO_CART,
                            payload: {
                              id: p.id,
                              title: p.title,
                              thumbnail: p.thumbnail,
                              price: p.price,
                              quantity: 1,
                            },
                          });
                        }}
                      >
                        A-TO-C
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default ProductPage;
