import React from "react";
import "../css/styles.css";

import { Key } from "./Key";

const TOTALKEYS = 63;

const BackgroundColor = {
  ROW0: [
    "#EC7063",
    "#EC7063",
    "#F39C12",
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
    "#EC7063",
    "#EC7063",
    "#F39C12",
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
    "#EC7063",
    "#EC7063",
    "#F39C12",
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
    "#EC7063",
    "#EC7063",
    "#F39C12",
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

const KeyWidth = {
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

const Label = {
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
    "Q ㅂ",
    "W ㅈ",
    "E ㄷ",
    "R ㄱ",
    "T ㅅ",
    "Y ㅛ",
    "U ㅕ",
    "I ㅑ",
    "O ㅐ",
    "P ㅔ",
    "{ [",
    "} ]",
    "| \\"
  ],
  ROW2: [
    "caps lock",
    "A ㅁ",
    "S ㄴ",
    "D ㅇ",
    "F ㄹ",
    "G ㅎ",
    "H ㅗ",
    "J ㅓ",
    "K ㅏ",
    "L ㅣ",
    ": ;",
    "\" '",
    "return"
  ],
  ROW3: [
    "shift",
    "Z ㅋ",
    "X ㅌ",
    "C ㅊ",
    "V ㅍ",
    "B ㅠ",
    "N ㅜ",
    "M ㅡ",
    "< ,",
    "> .",
    "? /",
    "shift"
  ],
  ROW4: ["fn", "ctrl", "alt", "cmd", "", "cmd", "alt", "", "", ""]
};

const KeyMap = {
  "~": [0, 52],
  "`": [0],
  "!": [1, 52],
  "1": [1],
  "@": [2, 52],
  "2": [2],
  "#": [3, 52],
  "3": [3],
  $: [4, 52],
  "4": [4],
  "%": [5, 52],
  "5": [5],
  "^": [6, 41],
  "6": [6],
  "&": [7, 41],
  "7": [7],
  "*": [8, 41],
  "8": [8],
  "(": [9, 41],
  "9": [9],
  ")": [10, 41],
  "0": [10],
  _: [11, 41],
  "-": [11],
  "+": [12, 41],
  "=": [12],
  Q: [15, 52],
  q: [15],
  W: [16, 52],
  w: [16],
  E: [17, 52],
  e: [17],
  R: [18, 52],
  r: [18],
  T: [19, 52],
  t: [19],
  Y: [20, 41],
  y: [20],
  U: [21, 41],
  u: [21],
  I: [22, 41],
  i: [22],
  O: [23, 41],
  o: [23],
  P: [24, 41],
  p: [24],
  "{": [25, 41],
  "[": [25],
  "}": [26, 41],
  "]": [26],
  "|": [27, 41],
  "\\": [27],
  A: [29, 52],
  a: [29],
  S: [30, 52],
  s: [30],
  D: [31, 52],
  d: [31],
  F: [32, 52],
  f: [32],
  G: [33, 52],
  g: [33],
  H: [34, 41],
  h: [34],
  J: [35, 41],
  j: [35],
  K: [36, 41],
  k: [36],
  L: [37, 41],
  l: [37],
  ":": [38, 41],
  ";": [38],
  '"': [39, 41],
  "'": [39],
  Z: [42, 52],
  z: [42],
  X: [43, 52],
  x: [43],
  C: [44, 52],
  c: [44],
  V: [45, 52],
  v: [45],
  B: [46, 52],
  b: [46],
  N: [47, 41],
  n: [47],
  M: [48, 41],
  m: [48],
  "<": [49, 41],
  ",": [49],
  ">": [50, 41],
  ".": [50],
  "?": [51, 41],
  "/": [51],
  " ": [57]
};

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
      prevKey: -1
    };
  }

  componentDidUpdate() {
    if (this.props.value !== -1 && this.props.value !== this.state.prevKey) {
      const newBorderColors = this.getUnhighlightedBorderColors();
      for (var j of KeyMap[this.props.value]) {
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
      for (var i of KeyMap[this.state.prevKey]) {
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
      BackgroundColor.ROW0,
      KeyWidth.ROW0,
      Label.ROW0,
      0
    );

    const row1 = this.getRowButtons(
      BackgroundColor.ROW1,
      KeyWidth.ROW1,
      Label.ROW1,
      Label.ROW0.length
    );

    const row2 = this.getRowButtons(
      BackgroundColor.ROW2,
      KeyWidth.ROW2,
      Label.ROW2,
      Label.ROW0.length + Label.ROW1.length
    );

    const row3 = this.getRowButtons(
      BackgroundColor.ROW3,
      KeyWidth.ROW3,
      Label.ROW3,
      Label.ROW0.length + Label.ROW1.length + Label.ROW2.length
    );

    const row4 = this.getRowButtons(
      BackgroundColor.ROW4,
      KeyWidth.ROW4,
      Label.ROW4,
      Label.ROW0.length +
        Label.ROW1.length +
        Label.ROW2.length +
        Label.ROW3.length
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
