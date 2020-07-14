import React from "react";
import "../css/styles.css";

// Component that displays the current Bible verse to be typed
export default class BibleVerse extends React.Component {
  render() {
    return (
      <div className="BibleVerse">
        <p>
          <span className="typed">{this.props.typed}</span>
          {this.props.verse}
        </p>
      </div>
    );
  }
}
