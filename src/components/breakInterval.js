import React from "react";

function BreakInterval(props) {
  function decreaseCounter() {
    if (props.breakLength === 1) {
      return;
    }
    props.decreaseBreak();
  }
  function increaesCounter() {
    if (props.breakLength === 60) {
      return;
    }
    props.increaseBreak();
  }
  return (
    <section className="interval-header">
      <h4>Break Length</h4>
      <section className="interval-container">
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={decreaseCounter}
        >
          Decrease
        </button>
        <p className="intervalVals">{props.breakLength}</p>
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={increaesCounter}
        >
          Increase
        </button>
      </section>
    </section>
  );
}

export default BreakInterval;
