import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  counter: state,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
  incrementByTen: () => dispatch({ type: "INCREMENT BY TEN" }),
  decrementByTen: () => dispatch({ type: "DECREMENT BY TEN" }),
  reset: () => dispatch({ type: "RESET" }),
});

const CounterComponent = ({
  counter,
  increment,
  decrement,
  incrementByTen,
  decrementByTen,
  reset,
}) => (
  <div>
    <p>{counter}</p>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={incrementByTen}>increment by ten</button>
    <button onClick={decrementByTen}>decrement by ten</button>
    <button onClick={reset}>reset</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
