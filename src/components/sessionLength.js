import React from "react";

function SessionLength(props) {
  function decreaseCounter() {
    if (props.BreakInterval === 1) {
      return;
    }
    props.decreaseSession();
  }
  function increaesCounter() {
    if (props.BreakInterval === 60) {
      return;
    }
    props.increaseSession();
  }
  return (
    <section className="interval-header">
      <h4>Session Length</h4>
      <section className="interval-container">
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={decreaseCounter}
        >
          Left
        </button>
        <p className="intervalVals">{props.sessionLength}</p>
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          onClick={increaesCounter}
        >
          Right
        </button>
      </section>
    </section>
  );
}

export default SessionLength;
