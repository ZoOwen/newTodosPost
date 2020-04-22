import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, minusCart } from "../Actions/CounterActions";
function TodosHooks(props) {
  const data = useSelector((props) => props.Counter.cart);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div>
      <h1>Redux Hooks</h1>
      <button onClick={() => dispatch(addCart())}>+</button>
      {data}
      <button onClick={() => dispatch(minusCart())}>-</button>
    </div>
  );
}

export default TodosHooks;
