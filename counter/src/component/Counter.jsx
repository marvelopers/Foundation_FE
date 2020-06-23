import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function Counter() {
  const dispatch = useDispatch();
  const getCounterState = (state) => state;

  const storeData = useSelector(getCounterState);

  const increseEventhandler = (number) => {
    dispatch({
      type: "INCREMENT_REQUEST",
      payload: number
    })
  }
  const decreseEventhandler = (number) => {
    dispatch({
      type: "DECREMENT_REQUEST",
      payload: number
    })
  }

  return (
    <section>
      <div>{storeData.number}</div>
      <button onClick={() => decreseEventhandler(storeData.number)}>-</button>
      <button onClick={() => increseEventhandler(storeData.number)}>+</button>
    </section>
  );
};

export default Counter;