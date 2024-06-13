import React from "react";

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: null,
    };

    this.play = this.play.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  play() {
    if (this.state.intervalId === null) {
      let intervalId = setInterval(this.decreaseTimer, 1000);
      this.props.onPlayStopTimer(true);

      this.setState({
        intervalId: intervalId,
      });
    }
  }

  decreaseTimer() {
    if (this.props.TimerMinute === 0 && this.state.timerSecond === 0) {
      if (this.state.isSession) {
        this.setState({
          isSession: false,
        });
        this.props.toggleInterval(false);
      } else {
        this.setState({
          isSession: true,
        });
        this.props.toggleInterval(true);
      }
    } else if (this.state.timerSecond === 0) {
      this.props.onUpdateTimerMinute();
      this.setState({
        timerSecond: 59,
      });
    } else {
      this.setState((prevState) => ({
        timerSecond: prevState.timerSecond - 1,
      }));
    }
  }

  stop() {
    clearInterval(this.state.intervalId);
    this.setState({
      intervalId: null,
    });
    this.props.onPlayStopTimer(false);
  }

  reset() {
    this.stop();
    this.props.resetTimer();
    this.setState({
      timerSecond: 0,
      isSession: true,
    });
    this.props.onPlayStopTimer(false);
  }

  onPlayStopTimer() {
    this.props.onPlayStopTimer();
  }

  render() {
    return (
      <section>
        <section className="timer-container">
          <h4>{this.state.isSession ? "Session" : "Break"}</h4>
          <span className="timer">{this.props.TimerMinute}</span>
          <span className="timer">:</span>
          <span className="timer">
            {this.state.timerSecond === 0
              ? "00"
              : this.state.timerSecond < 10
              ? "0" + this.state.timerSecond
              : this.state.timerSecond}
          </span>
        </section>
        <section className="timer-actions">
          <button onClick={this.play}>Play</button>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </section>
    );
  }
}

export default Timer;
