const iState = {
  isLoading: false,
  data: [],
  error: null,
  cartData: [],
};

const ACTIONS = Object.freeze({
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_PRODUCT_COUNT: 'UPDATE_PRODUCT_COUNT',
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
    case ACTIONS.ADD_TO_CART:
      return {
        ...state,
        cartData: state.cartData.concat(action.payload),
      };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cartData: state.cartData.filter((item) => item.id !== action.payload),
      };
    case ACTIONS.UPDATE_PRODUCT_COUNT:
      return {
        ...state,
        cartData: state.cartData.filter((cp) =>
          cp.id === action.payload.id
            ? (cp.quantity = action.payload.qty)
            : cp.quantity
        ),
      };
    default:
      return { state };
  }
};

export { iState, ACTIONS, reducer };
