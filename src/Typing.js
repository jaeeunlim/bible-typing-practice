import React from "react";
import { goToScripturesPage, goToTypingPage } from "./utils/router";
import { getNextVerseInfo } from "./utils/bibleAPI";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { BsBookHalf } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import BibleVerse from "./components/BibleVerse";
import Keyboard, { mapSymbolToKey } from "./components/Keyboard";
import FingerColorCode from "./components/FingerColorCode";
import Settings from "./components/Settings";
import { LargeTooltip } from "./components/Tooltip";
import Editor from "./components/Editor";

import "./css/styles.css";

class Typing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeBegin: false,
      typeFinished: false,
      countDownBegin: false,
      verse: "",
      typed: "",
      totalKeyStrokes: 0,
      countDown: 5,
      timeElapsed: 0,
      endOfBible: false,
      highlightKeys: true,
      showTextarea: true
    };
  }

  componentDidUpdate() {
    if (this.isVerseAllTyped() && !this.state.typeFinished) {
      this.setState({ typeFinished: true });
    }
  }

  componentDidMount() {
    window.addEventListener("keypress", this.pressKey);
    this.setState({ verse: this.props.match.params.text });
    this.timerID = setInterval(() => this.tick(), 500);
  }

  componentWillUnmount() {
    window.removeEventListener("keypress", this.pressKey);
    clearInterval(this.timerID);
  }

  reset = () => {
    this.setState({
      typeBegin: false,
      typeFinished: false,
      countDownBegin: false,
      verse: this.state.typed,
      typed: "",
      totalKeyStrokes: 0,
      countDown: 5,
      timeElapsed: 0,
      endOfBible: false
    });
  };

  pressKey = event => {
    const letter = String.fromCharCode(event.keyCode);
    this.setState({
      totalKeyStrokes: this.state.totalKeyStrokes + 1
    });
    if (mapSymbolToKey(this.state.verse.charAt(0)) === letter) {
      if (!this.state.typeBegin && !this.state.countDownBegin) {
        this.setState({
          typeBegin: true,
          countDownBegin: true,
          countDown: -1
        });
      }
      if (this.state.typeBegin) {
        this.setState({
          typed: this.state.typed.concat(letter),
          verse: this.state.verse.substr(1, this.state.verse.length)
        });
      }
    }
  };

  getSpeed = () => {
    return Math.round(
      ((this.state.typed.length / 5.0) * 60.0) / this.state.timeElapsed
    );
  };

  getAccuracy = () => {
    return Math.round(
      (this.state.typed.length / this.state.totalKeyStrokes) * 100.0
    );
  };

  getMinutes = () => {
    return Math.floor((this.state.timeElapsed + 0.5) / 60);
  };

  getSeconds = () => {
    return Math.round(this.state.timeElapsed) % 60;
  };

  goToNextVerse = () => {
    this.reset();
    getNextVerseInfo(
      this.props.match.params.testament,
      this.props.match.params.book,
      this.props.match.params.chapter,
      this.props.match.params.verse
    ).then(nextVerseInfo => {
      if (nextVerseInfo !== null) {
        this.setState({ verse: nextVerseInfo.text });
        goToTypingPage(this.props)(
          nextVerseInfo.testament,
          nextVerseInfo.book,
          nextVerseInfo.chapter,
          nextVerseInfo.verse,
          nextVerseInfo.text
        );
      } else {
        // reached end of Bible!
        this.setState({ endOfBible: true });
      }
    });
  };

  tick = () => {
    if (this.state.countDownBegin) {
      if (Number.isFinite(this.state.countDown) && this.state.countDown >= 0) {
        this.setState({ countDown: this.state.countDown - 0.5 });
      } else if (!this.state.typeFinished) {
        this.setState({
          timeElapsed: this.state.timeElapsed + 0.5
        });
      }
    }
    if (Number.isFinite(this.state.countDown) && this.state.countDown === 0) {
      this.setState({ countDown: "GO!" });
    } else if (this.state.countDown === "GO!" && !this.state.typeBegin) {
      this.setState({ typeBegin: true });
    }
  };

  onClickBegin = () => {
    this.setState({ countDownBegin: true });
  };

  getTypingManager = () => {
    if (this.state.countDownBegin) {
      if (!this.state.typeBegin) {
        return (
          <span className="countdown">
            {Number.isFinite(this.state.countDown)
              ? Math.round(this.state.countDown)
              : this.state.countDown}
          </span>
        );
      } else {
        return (
          <span className="timer">
            {Math.floor((this.state.timeElapsed + 0.5) / 60)}:
            {Math.round(this.state.timeElapsed) % 60}
          </span>
        );
      }
    } else {
      return (
        <LargeTooltip
          title={
            <p>
              Click to begin timer with a countdown. Or type first character to
              begin timer automatically.
            </p>
          }
          arrow
        >
          <button onClick={this.onClickBegin}>
            <FaPlay size={17} />
          </button>
        </LargeTooltip>
      );
    }
  };

  getSummary = () => {
    if (this.state.endOfBible) {
      return (
        <Dialog open={this.state.endOfBible}>
          <DialogTitle>
            <center>You have reached the end of the Bible!</center>
          </DialogTitle>
          <DialogContent>
            <center>
              <Button
                color="secondary"
                size="small"
                onClick={() => this.setState({ endOfBible: false })}
              >
                Retry
              </Button>
              <Button size="small" onClick={goToScripturesPage(this.props)}>
                Scriptures
              </Button>
            </center>
          </DialogContent>
        </Dialog>
      );
    } else if (this.state.typeFinished) {
      return (
        <Dialog open={this.state.typeFinished}>
          <DialogTitle>
            <center>
              Your speed is <b>{this.getSpeed()} WPM</b>
            </center>
            <center>
              Your accuracy is <b>{this.getAccuracy()} %</b>
            </center>
          </DialogTitle>
          <DialogContent>
            <center>
              Your typed for {this.getMinutes()} minutes and {this.getSeconds()}{" "}
              seconds
            </center>
            <br />
            <center>
              <Button color="secondary" size="small" onClick={this.reset}>
                Retry
              </Button>
              <Button color="primary" size="small" onClick={this.goToNextVerse}>
                Next Verse
              </Button>
              <Button size="small" onClick={goToScripturesPage(this.props)}>
                Scriptures
              </Button>
            </center>
          </DialogContent>
        </Dialog>
      );
    } else {
      return <></>;
    }
  };

  getVerseInfo = () => {
    return (
      <p className="verse-info">
        <BsBookHalf size={20} />
        <span>
          &nbsp;
          {this.props.match.params.book} {this.props.match.params.chapter}:
          {this.props.match.params.verse}
        </span>
      </p>
    );
  };

  onClickHighlight = () => {
    this.setState({ highlightKeys: !this.state.highlightKeys });
  };

  onClickShowTextarea = () => {
    this.setState({ showTextarea: !this.state.showTextarea });
  };

  isVerseAllTyped = () => {
    return this.state.verse.length <= 0;
  };

  render() {
    const currChar =
      this.state.typeBegin && !this.isVerseAllTyped()
        ? mapSymbolToKey(this.state.verse.charAt(0))
        : -1;

    return (
      <React.Fragment>
        <div className="Typing">
          {this.getVerseInfo()}
          <div id="begin">
            {this.getTypingManager()}
            <BibleVerse typed={this.state.typed} verse={this.state.verse} />
            <Editor show={this.state.showTextarea} />
          </div>
          <FingerColorCode />
          <Settings
            onClickHighlight={this.onClickHighlight}
            highlightKeys={this.state.highlightKeys}
            onClickShowTextarea={this.onClickShowTextarea}
            showTextarea={this.state.showTextarea}
          />
          <Keyboard value={currChar} highlight={this.state.highlightKeys} />
        </div>
        {this.getSummary()}
      </React.Fragment>
    );
  }
}

export default Typing;
