import "../App.css";
import React from "react";
import BreakInterval from "./breakInterval";
import SessionLength from "./sessionLength";
import Timer from "./timer";
import QuoteGenerator from "./QuoteGenerator";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      TimerMinute: 25,
      isPlay: false,
    };

    // Binding methods
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => ({
      breakLength: prevState.breakLength + 1,
    }));
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => ({
      breakLength: prevState.breakLength - 1,
    }));
  }

  onIncreaseSessionLength() {
    this.setState((prevState) => ({
      sessionLength: prevState.sessionLength + 1,
      TimerMinute: prevState.sessionLength + 1,
    }));
  }

  onDecreaseSessionLength() {
    this.setState((prevState) => ({
      sessionLength: prevState.sessionLength - 1,
      TimerMinute: prevState.sessionLength - 1,
    }));
  }

  onUpdateTimerMinute() {
    this.setState((prevState) => ({
      TimerMinute: prevState.TimerMinute - 1,
    }));
  }

  onToggleInterval(isSession) {
    if (isSession) {
      this.setState({
        TimerMinute: this.state.sessionLength,
      });
    } else {
      this.setState({
        TimerMinute: this.state.breakLength,
      });
    }
  }

  onReset() {
    this.setState({
      TimerMinute: this.state.sessionLength,
    });
  }

  onPlayStopTimer(isPlay) {
    this.setState({
      isPlay: isPlay,
    });
  }

  render() {
    return (
      <main>
        <header className="header">
          <h1>Pomodoro Clock</h1>
        </header>
        <section className="interval-length-container">
          <BreakInterval
            isPlay={this.state.isPlay}
            breakLength={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength}
          />
          <SessionLength
            isPlay={this.state.isPlay}
            sessionLength={this.state.sessionLength}
            increaseSession={this.onIncreaseSessionLength}
            decreaseSession={this.onDecreaseSessionLength}
          />
        </section>
        <Timer
          TimerMinute={this.state.TimerMinute}
          breakLength={this.state.breakLength}
          onUpdateTimerMinute={this.onUpdateTimerMinute}
          toggleInterval={this.onToggleInterval}
          resetTimer={this.onReset}
          onPlayStopTimer={this.onPlayStopTimer}
        />
        <section className="quote-section">
          <QuoteGenerator />
        </section>
      </main>
    );
  }
}

export default App;
