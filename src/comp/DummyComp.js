import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount } from "../redux/slices/counterSlice";

function Dummy() {
  const count = useSelector((data) => data.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>VAL</button>
    </div>
  );
}

export default Dummy;
