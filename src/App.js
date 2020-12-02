import React, { useState } from "react";
import { connect } from "react-redux";
import { inc, dec } from "./js/actions";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <button onClick={() => props.decrement(5)}>- </button>
      <span>{props.counter} </span>
      <button onClick={() => props.increment(10)}>+</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: (payload) => dispatch(inc(payload)),
  decrement: (payload) => dispatch(dec(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
