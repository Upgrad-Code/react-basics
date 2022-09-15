import React, { useReducer, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { API_URL } from '../../helpers/config ';
import { GET_JSON } from '../../helpers/helperFn';

const iState = {
  isLoading: false,
  data: [],
  error: null,
};

const ACTIONS = Object.freeze({
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
});

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ACTIONS.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return { state };
  }
};
const ProductPage = () => {
  const [state, dispatch] = useReducer(reducer, iState);
  console.log(state);

  useEffect(() => {
    (async () => {
      const data = await GET_JSON(API_URL);
      dispatch({
        type: ACTIONS.FETCH_SUCCESS,
        payload: data.products,
      });
    })();
  }, []);

  return (
    <Container>
      <Row>
        <Col>Product page...</Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
