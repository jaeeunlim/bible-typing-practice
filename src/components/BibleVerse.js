import React from "react";
import "../css/styles.css";

// Component that displays the current Bible verse to be typed
export default class BibleVerse extends React.Component {
  render() {
    return (
      <div className="BibleVerse">
        <p>
          <span id="typed">{this.props.typed}</span>
          <span id="typed-incorrect">{this.props.typedIncorrect}</span>
          <span id="untyped">{this.props.verse}</span>
        </p>
      </div>
    );
  }
}
