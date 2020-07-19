import React from "react";
import { goToScripturesPage, goToTypingPage } from "./utils/router";
import { getNextVerseInfo, getBibleVerse } from "./utils/bibleAPI";
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
import {
  OldTestamentBooks,
  NewTestamentBooks,
  Labels,
  getAccuracyMessage,
  getSpeedMessage,
  getDurationMessage,
  BibleVersion,
  decomposeChar,
  composeChar,
  Language,
  getTotalLetterCount
} from "./utils/translations";

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
      typedIncorrect: "",
      totalKeyStrokes: 0,
      countDown: 5,
      timeElapsed: 0,
      endOfBible: false,
      highlightKeys: true,
      showTextarea: true,
      decomposedChar: [], // For languages like Korean, one character decomposes into multiple ordered letters.
      decomposedIndex: 0 // 'decomposedIndex' indicates which letter of the character currently needs to be typed.
    };
  }

  componentDidUpdate(prevProps) {
    if (this.isVerseAllTyped() && !this.state.typeFinished) {
      this.setState({ typeFinished: true });
    }

    if (prevProps.language !== this.props.language) {
      this.reset();
      getBibleVerse(
        this.props.match.params.book,
        this.props.match.params.chapter,
        this.props.match.params.verse,
        BibleVersion[this.props.language]
      ).then(text => {
        goToTypingPage(this.props)(
          this.props.match.params.testament,
          this.props.match.params.book,
          this.props.match.params.chapter,
          this.props.match.params.verse,
          text
        );
        this.setState({ verse: text });
      });
    }
  }

  componentDidMount() {
    window.addEventListener("keypress", this.onKeyPress);
    window.addEventListener("keydown", this.onKeyDown);
    this.setState({
      verse: this.props.match.params.text,
      decomposedChar: decomposeChar(
        this.props.language,
        mapSymbolToKey(this.props.match.params.text.charAt(0))
      )
    });
    this.timerID = setInterval(() => this.tick(), 500);
  }

  componentWillUnmount() {
    window.removeEventListener("keypress", this.onKeyPress);
    window.removeEventListener("keyDown", this.onKeyDown);
    clearInterval(this.timerID);
  }

  reset = () => {
    this.setState({
      typeBegin: false,
      typeFinished: false,
      countDownBegin: false,
      verse: this.props.match.params.text,
      typed: "",
      typedIncorrect: "",
      totalKeyStrokes: 0,
      countDown: 5,
      timeElapsed: 0,
      endOfBible: false,
      decomposedChar: decomposeChar(
        this.props.language,
        mapSymbolToKey(this.props.match.params.text.charAt(0))
      ),
      decomposedIndex: 0
    });
  };

  onKeyDown = event => {
    // for detecting delete
    if (event.keyCode === 8) {
      if (this.state.typeBegin) {
        if (this.state.typedIncorrect.length > 0) {
          var char =
            this.state.typedIncorrect.substr(-1) === "_"
              ? " "
              : this.state.typedIncorrect.substr(-1);
          this.setState({
            verse: char.concat(this.state.verse),
            typedIncorrect: this.state.typedIncorrect.substr(
              0,
              this.state.typedIncorrect.length - 1
            )
          });
        } else if (this.state.typed.length > 0) {
          this.setState({
            decomposedIndex: 0,
            decomposedChar: decomposeChar(
              this.props.language,
              mapSymbolToKey(
                this.state.typed.charAt(this.state.typed.length - 1)
              )
            ),
            verse: this.state.typed.substr(-1).concat(this.state.verse),
            typed: this.state.typed.substr(0, this.state.typed.length - 1)
          });
        }
      }
    }
  };

  onKeyPress = event => {
    const letter = String.fromCharCode(event.keyCode);

    this.setState({
      totalKeyStrokes: this.state.totalKeyStrokes + 1
    });

    if (
      this.state.typeBegin &&
      (this.state.typedIncorrect.length > 0 ||
        this.state.decomposedChar[this.state.decomposedIndex] !== letter)
    ) {
      var char = this.state.verse.charAt(0);
      if (char === " ") {
        char = "_";
      }
      this.setState({
        typedIncorrect: this.state.typedIncorrect.concat(char),
        verse: this.state.verse.substr(1, this.state.verse.length)
      });
    } else if (
      this.state.decomposedChar[this.state.decomposedIndex] === letter
    ) {
      if (!this.state.typeBegin && !this.state.countDownBegin) {
        this.setState({
          typeBegin: true,
          countDownBegin: true,
          countDown: -1
        });
      }
      if (this.state.typeBegin) {
        if (
          this.state.decomposedIndex ===
          this.state.decomposedChar.length - 1
        ) {
          this.setState({
            typed: this.state.typed.concat(
              composeChar(this.props.language, this.state.decomposedChar)
            ),
            decomposedIndex: 0,
            decomposedChar: decomposeChar(
              this.props.language,
              mapSymbolToKey(this.state.verse.charAt(1))
            ),
            verse: this.state.verse.substr(1, this.state.verse.length)
          });
        } else {
          this.setState({
            decomposedIndex: this.state.decomposedIndex + 1
          });
        }
      }
    }
  };

  getSpeed = () => {
    switch (this.props.language) {
      case Language.KOREAN:
        return Math.round(
          (getTotalLetterCount(this.props.language, this.state.typed) * 60.0) /
            this.state.timeElapsed
        ); // CPM
      default:
        return Math.round(
          ((this.state.typed.length / 5.0) * 60.0) / this.state.timeElapsed
        ); // WPM
    }
  };

  getAccuracy = () => {
    return Math.round(
      (getTotalLetterCount(this.props.language, this.state.typed) /
        this.state.totalKeyStrokes) *
        100.0
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
      this.props.match.params.verse,
      BibleVersion[this.props.language]
    ).then(nextVerseInfo => {
      if (nextVerseInfo !== null) {
        this.setState({
          verse: nextVerseInfo.text,
          decomposedChar: decomposeChar(
            this.props.language,
            mapSymbolToKey(nextVerseInfo.text.charAt(0))
          )
        });
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
      this.setState({ countDown: Labels[this.props.language].go });
    } else if (
      this.state.countDown === Labels[this.props.language].go &&
      !this.state.typeBegin
    ) {
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
        <LargeTooltip title={<p>{Labels[this.props.language].begin}</p>} arrow>
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
            <center>{Labels[this.props.language].endOfBible}</center>
          </DialogTitle>
          <DialogContent>
            <center>
              <Button
                color="secondary"
                size="small"
                onClick={() => this.setState({ endOfBible: false })}
              >
                {Labels[this.props.language].retry}
              </Button>
              <Button size="small" onClick={goToScripturesPage(this.props)}>
                {Labels[this.props.language].scriptures}
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
              {getSpeedMessage(this.props.language, this.getSpeed())}
            </center>
            <center>
              {getAccuracyMessage(this.props.language, this.getAccuracy())}
            </center>
          </DialogTitle>
          <DialogContent>
            <center>
              {getDurationMessage(
                this.props.language,
                this.getMinutes(),
                this.getSeconds()
              )}
            </center>
            <br />
            <center>
              <Button color="secondary" size="small" onClick={this.reset}>
                {Labels[this.props.language].retry}
              </Button>
              <Button color="primary" size="small" onClick={this.goToNextVerse}>
                {Labels[this.props.language].nextVerse}
              </Button>
              <Button size="small" onClick={goToScripturesPage(this.props)}>
                {Labels[this.props.language].scriptures}
              </Button>
            </center>
          </DialogContent>
        </Dialog>
      );
    } else {
      return <></>;
    }
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

  getVerseInfo = () => {
    const testament =
      this.props.match.params.testament === "new"
        ? NewTestamentBooks[this.props.language]
        : OldTestamentBooks[this.props.language];
    return (
      <p className="verse-info">
        <BsBookHalf size={20} />
        <span>
          &nbsp;
          {testament[this.props.match.params.book]}{" "}
          {this.props.match.params.chapter}:{this.props.match.params.verse}
        </span>
      </p>
    );
  };

  getNextchar = () => {
    if (this.state.typedIncorrect.length > 0) {
      return "del";
    }

    return this.state.typeBegin && !this.isVerseAllTyped()
      ? this.state.decomposedChar[this.state.decomposedIndex]
      : -1;
  };

  getResetButton = () => {
    if (this.state.typeBegin) {
      return (
        <Button id="btn-reset" onClick={this.reset}>
          {Labels[this.props.language].reset}
        </Button>
      );
    } else {
      return <></>;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="Typing">
          {this.getVerseInfo()}
          <div id="begin">
            {this.getTypingManager()}
            <BibleVerse
              typed={this.state.typed}
              verse={this.state.verse}
              typedIncorrect={this.state.typedIncorrect}
            />
            <Editor
              show={this.state.showTextarea}
              language={this.props.language}
            />
          </div>
          {this.getResetButton()}
          <FingerColorCode language={this.props.language} />
          <Settings
            onClickHighlight={this.onClickHighlight}
            highlightKeys={this.state.highlightKeys}
            onClickShowTextarea={this.onClickShowTextarea}
            showTextarea={this.state.showTextarea}
            language={this.props.language}
          />
          <Keyboard
            value={this.getNextchar()}
            highlight={this.state.highlightKeys}
            language={this.props.language}
          />
        </div>
        {this.getSummary()}
      </React.Fragment>
    );
  }
}

export default Typing;
