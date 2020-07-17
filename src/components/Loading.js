import React from "react";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typed: "",
      deleting: false
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    if (!this.state.deleting) {
      if (this.state.typed.length < this.props.text.length) {
        this.setState({
          typed: this.state.typed.concat(
            this.props.text.charAt(this.state.typed.length)
          )
        });
      } else {
        this.setState({ deleting: true });
      }
    } else {
      if (this.state.typed.length > 0) {
        this.setState({
          typed: this.state.typed.substr(0, this.state.typed.length - 1)
        });
      } else {
        this.setState({ deleting: false });
      }
    }
  };

  render() {
    return (
      <div id="loader-wrap">
        <span id="loader-text">{this.state.typed}|</span>
      </div>
    );
  }
}
