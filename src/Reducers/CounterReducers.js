import { INCREMENT, DECREMENT } from "../Actions/CounterActions";

const initState = {
  cart: 0,
};

const Counter = (state = initState, actions) => {
  switch (actions.type) {
    case INCREMENT:
      return {
        ...state,
        cart: state.cart + 1,
      };

    case DECREMENT:
      return {
        ...state,
        cart: state.cart - 1,
      };
    default:
      return state;
  }
};
export default Counter;
