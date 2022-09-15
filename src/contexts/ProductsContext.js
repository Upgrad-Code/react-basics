import React, { useReducer } from 'react';
import { iState, reducer } from '../reducers/ProductsReducer';

const ProductsContext = React.createContext(null);

const ProductsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, iState);
  console.log(state);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsContextProvider };
