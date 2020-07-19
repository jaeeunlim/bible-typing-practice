import React from "react";
import { Key } from "./Key";
import { KeyboardLayout, KeyMap } from "../utils/translations";

import "../css/styles.css";

const TOTALKEYS = 63;

export const mapSymbolToKey = symbol => {
  switch (symbol) {
    case "’":
    case "‘":
      return "'";
    case "“":
    case "”":
      return '"';
    default:
      return symbol;
  }
};

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColors: Array(TOTALKEYS).fill("#d0d3d4"),
      prevKey: -1,
      highlightKeys: true,
      labels: {
        ROW0: [
          "~ `",
          "! 1",
          "@ 2",
          "# 3",
          "$ 4",
          "% 5",
          "^ 6",
          "& 7",
          "* 8",
          "( 9",
          ") 0",
          "_ -",
          "+ =",
          "del"
        ],
        ROW1: [
          "tab",
          KeyboardLayout[this.props.language]["Q"],
          KeyboardLayout[this.props.language]["W"],
          KeyboardLayout[this.props.language]["E"],
          KeyboardLayout[this.props.language]["R"],
          KeyboardLayout[this.props.language]["T"],
          KeyboardLayout[this.props.language]["Y"],
          KeyboardLayout[this.props.language]["U"],
          KeyboardLayout[this.props.language]["I"],
          KeyboardLayout[this.props.language]["O"],
          KeyboardLayout[this.props.language]["P"],
          "{ [",
          "} ]",
          "| \\"
        ],
        ROW2: [
          "caps lock",
          KeyboardLayout[this.props.language]["A"],
          KeyboardLayout[this.props.language]["S"],
          KeyboardLayout[this.props.language]["D"],
          KeyboardLayout[this.props.language]["F"],
          KeyboardLayout[this.props.language]["G"],
          KeyboardLayout[this.props.language]["H"],
          KeyboardLayout[this.props.language]["J"],
          KeyboardLayout[this.props.language]["K"],
          KeyboardLayout[this.props.language]["L"],
          ": ;",
          "\" '",
          "return"
        ],
        ROW3: [
          "shift",
          KeyboardLayout[this.props.language]["Z"],
          KeyboardLayout[this.props.language]["X"],
          KeyboardLayout[this.props.language]["C"],
          KeyboardLayout[this.props.language]["V"],
          KeyboardLayout[this.props.language]["B"],
          KeyboardLayout[this.props.language]["N"],
          KeyboardLayout[this.props.language]["M"],
          "< ,",
          "> .",
          "? /",
          "shift"
        ],
        ROW4: ["fn", "ctrl", "alt", "cmd", "", "cmd", "alt", "", "", ""]
      }
    };
  }

  BackgroundColor = {
    ROW0: [
      "#F1948A",
      "#F1948A",
      "#F5B041",
      "#F7DC6F",
      "#ABEBC6",
      "#ABEBC6",
      "#45B39D",
      "#45B39D",
      "#85C1E9",
      "#5499C7",
      "#BB8FCE",
      "#BB8FCE",
      "#BB8FCE",
      "#BB8FCE"
    ],
    ROW1: [
      "#F1948A",
      "#F1948A",
      "#F5B041",
      "#F7DC6F",
      "#ABEBC6",
      "#ABEBC6",
      "#45B39D",
      "#45B39D",
      "#85C1E9",
      "#5499C7",
      "#BB8FCE",
      "#BB8FCE",
      "#BB8FCE",
      "#BB8FCE"
    ],
    ROW2: [
      "#F1948A",
      "#F1948A",
      "#F5B041",
      "#F7DC6F",
      "#ABEBC6",
      "#ABEBC6",
      "#45B39D",
      "#45B39D",
      "#85C1E9",
      "#5499C7",
      "#BB8FCE",
      "#BB8FCE",
      "#BB8FCE"
    ],
    ROW3: [
      "#F1948A",
      "#F1948A",
      "#F5B041",
      "#F7DC6F",
      "#ABEBC6",
      "#ABEBC6",
      "#45B39D",
      "#45B39D",
      "#85C1E9",
      "#5499C7",
      "#BB8FCE",
      "#BB8FCE"
    ],
    ROW4: [
      "white",
      "white",
      "white",
      "white",
      "#EAEDED",
      "white",
      "white",
      "white",
      "white",
      "white"
    ]
  };

  KeyWidth = {
    ROW0: [
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "9vw"
    ],
    ROW1: [
      "9vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw"
    ],
    ROW2: [
      "10.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "10.6vw"
    ],
    ROW3: [
      "14vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "14vw"
    ],
    ROW4: [
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "7.4vw",
      "32vw",
      "7.4vw",
      "5.6vw",
      "5.6vw",
      "5.6vw",
      "5.6vw"
    ]
  };

  componentDidUpdate(prevProps) {
    if (prevProps.highlight !== this.props.highlight) {
      const borderColors = this.getUnhighlightedBorderColors();
      this.setState({
        highlightKeys: this.props.highlight,
        borderColors: borderColors
      });
    }

    if (prevProps.language !== this.props.language) {
      this.setState({
        labels: {
          ROW0: [
            "~ `",
            "! 1",
            "@ 2",
            "# 3",
            "$ 4",
            "% 5",
            "^ 6",
            "& 7",
            "* 8",
            "( 9",
            ") 0",
            "_ -",
            "+ =",
            "del"
          ],
          ROW1: [
            "tab",
            KeyboardLayout[this.props.language]["Q"],
            KeyboardLayout[this.props.language]["W"],
            KeyboardLayout[this.props.language]["E"],
            KeyboardLayout[this.props.language]["R"],
            KeyboardLayout[this.props.language]["T"],
            KeyboardLayout[this.props.language]["Y"],
            KeyboardLayout[this.props.language]["U"],
            KeyboardLayout[this.props.language]["I"],
            KeyboardLayout[this.props.language]["O"],
            KeyboardLayout[this.props.language]["P"],
            "{ [",
            "} ]",
            "| \\"
          ],
          ROW2: [
            "caps lock",
            KeyboardLayout[this.props.language]["A"],
            KeyboardLayout[this.props.language]["S"],
            KeyboardLayout[this.props.language]["D"],
            KeyboardLayout[this.props.language]["F"],
            KeyboardLayout[this.props.language]["G"],
            KeyboardLayout[this.props.language]["H"],
            KeyboardLayout[this.props.language]["J"],
            KeyboardLayout[this.props.language]["K"],
            KeyboardLayout[this.props.language]["L"],
            ": ;",
            "\" '",
            "return"
          ],
          ROW3: [
            "shift",
            KeyboardLayout[this.props.language]["Z"],
            KeyboardLayout[this.props.language]["X"],
            KeyboardLayout[this.props.language]["C"],
            KeyboardLayout[this.props.language]["V"],
            KeyboardLayout[this.props.language]["B"],
            KeyboardLayout[this.props.language]["N"],
            KeyboardLayout[this.props.language]["M"],
            "< ,",
            "> .",
            "? /",
            "shift"
          ],
          ROW4: ["fn", "ctrl", "alt", "cmd", "", "cmd", "alt", "", "", ""]
        }
      });
    }

    if (
      this.state.highlightKeys &&
      this.props.value !== -1 &&
      this.props.value !== this.state.prevKey
    ) {
      const newBorderColors = this.getUnhighlightedBorderColors();
      for (var j of KeyMap[this.props.language][this.props.value]) {
        newBorderColors[j] = "red"; // highlight current key
      }

      this.setState({
        borderColors: newBorderColors,
        prevKey: this.props.value
      });
    } else if (
      this.props.value === -1 &&
      this.props.value !== this.state.prevKey
    ) {
      const newBorderColors = this.getUnhighlightedBorderColors();
      this.setState({
        borderColors: newBorderColors,
        prevKey: this.props.value
      });
    }
  }

  getUnhighlightedBorderColors = () => {
    const newBorderColors = [...this.state.borderColors];
    if (this.state.prevKey !== -1)
      for (var i of KeyMap[this.props.language][this.state.prevKey]) {
        newBorderColors[i] = "#d0d3d4"; // unhighlight previous key
      }
    return newBorderColors;
  };

  getRowButtons = (backgroundColors, keyWidths, labels, offset) => {
    // param offset: index of the row's first key
    const row = [];
    for (var i = 0; i < labels.length; ++i) {
      row.push(
        <Key
          borderColor={this.state.borderColors[offset + i]}
          color={backgroundColors[i]}
          width={keyWidths[i]}
          label={labels[i]}
          key={offset + i}
        />
      );
    }
    return row;
  };

  render() {
    const row0 = this.getRowButtons(
      this.BackgroundColor.ROW0,
      this.KeyWidth.ROW0,
      this.state.labels.ROW0,
      0
    );

    const row1 = this.getRowButtons(
      this.BackgroundColor.ROW1,
      this.KeyWidth.ROW1,
      this.state.labels.ROW1,
      this.state.labels.ROW0.length
    );

    const row2 = this.getRowButtons(
      this.BackgroundColor.ROW2,
      this.KeyWidth.ROW2,
      this.state.labels.ROW2,
      this.state.labels.ROW0.length + this.state.labels.ROW1.length
    );

    const row3 = this.getRowButtons(
      this.BackgroundColor.ROW3,
      this.KeyWidth.ROW3,
      this.state.labels.ROW3,
      this.state.labels.ROW0.length +
        this.state.labels.ROW1.length +
        this.state.labels.ROW2.length
    );

    const row4 = this.getRowButtons(
      this.BackgroundColor.ROW4,
      this.KeyWidth.ROW4,
      this.state.labels.ROW4,
      this.state.labels.ROW0.length +
        this.state.labels.ROW1.length +
        this.state.labels.ROW2.length +
        this.state.labels.ROW3.length
    );

    return (
      <div className="Keyboard">
        <div className="row">{row0}</div>
        <div className="row">{row1}</div>
        <div className="row">{row2}</div>
        <div className="row">{row3}</div>
        <div className="row">{row4}</div>
      </div>
    );
  }
}
