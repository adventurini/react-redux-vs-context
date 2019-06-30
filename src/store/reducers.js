import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './actions';

const initialState = {
  
};

const shopReducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      
    case REMOVE_PRODUCT_FROM_CART:
      
    default:
      return state;
  }
};

export default shopReducer;
