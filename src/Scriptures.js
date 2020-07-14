import React from "react";
import { goToTypingPage } from "./utils/router";
import Button from "@material-ui/core/Button";
import { GiSecretBook } from "react-icons/gi";
import { BsArrowLeftShort } from "react-icons/bs";
import { FixedSizeList as List } from "react-window";
import {
  oldTestamentChapters,
  newTestamentChapters,
  fetchBibleVerses,
  Testament
} from "./utils/bibleAPI";

import "./css/styles.css";

const ShowType = {
  TESTAMENTS: "testaments",
  BOOKS: "books",
  CHAPTERS: "chapters",
  VERSES: "verses"
};

export default class Scriptures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testament: "",
      show: ShowType.TESTAMENTS,
      book: "",
      chapter: 0,
      bibleVerses: []
    };
  }

  reset = () => {
    this.setState({
      testament: "",
      show: ShowType.TESTAMENTS,
      book: "",
      chapter: 0,
      bibleVerses: []
    });
  };

  onClickTestament = type => () => {
    this.setState({
      testament: type,
      show: ShowType.BOOKS,
      bibleVerses: []
    });
  };

  onClickBook = name => () => {
    this.setState({
      book: name,
      show: ShowType.CHAPTERS,
      bibleVerses: []
    });
  };

  onClickChapter = num => () => {
    this.setState({
      chapter: num,
      show: ShowType.VERSES,
      bibleVerses: []
    });
  };

  onClickVerse = (num, verse) => () => {
    goToTypingPage(this.props)(
      this.state.testament,
      this.state.book,
      this.state.chapter,
      parseInt(num, 10) + 1,
      verse
    );
  };

  onClickBack = () => {
    switch (this.state.show) {
      case ShowType.BOOKS:
        this.reset();
        break;
      case ShowType.CHAPTERS:
        this.setState({
          show: ShowType.BOOKS,
          book: "",
          bibleVerses: []
        });
        break;
      case ShowType.VERSES:
        this.setState({
          show: ShowType.CHAPTERS,
          chapter: 0,
          bibleVerses: []
        });
        break;
      default:
        break;
    }
  };

  getBackButton = () => {
    return (
      <div className="btn-back">
        <Button onClick={this.onClickBack}>
          <BsArrowLeftShort size={20} />
          <span>&nbsp;back</span>
        </Button>
      </div>
    );
  };

  getTestamentButtons = () => {
    return (
      <div className="btn-group-bible">
        <button
          className="btn-testament"
          onClick={this.onClickTestament(Testament.OLD)}
        >
          <GiSecretBook size={30} />
          <br />
          <br />
          Old Testament
        </button>
        <button
          className="btn-testament"
          onClick={this.onClickTestament(Testament.NEW)}
        >
          <GiSecretBook size={30} />
          <br />
          <br />
          New Testament
        </button>
      </div>
    );
  };

  getBookButtons = () => {
    const books = [];
    const testament =
      this.state.testament === Testament.NEW
        ? newTestamentChapters
        : oldTestamentChapters;
    for (var name in testament) {
      books.push(
        <button
          key={name}
          className="btn-book"
          onClick={this.onClickBook(name)}
        >
          {name}
        </button>
      );
    }
    return (
      <div className="btn-group-bible">
        {this.getBackButton()}
        {books}
      </div>
    );
  };

  getChapterButtons = () => {
    const chapters = [];
    const testamentChapters =
      this.state.testament === Testament.NEW
        ? newTestamentChapters
        : oldTestamentChapters;
    for (
      var chapter = 1;
      chapter < testamentChapters[this.state.book] + 1;
      ++chapter
    ) {
      chapters.push(
        <button
          className="btn-chapter"
          onClick={this.onClickChapter(chapter)}
          key={chapter}
        >
          Chapter {chapter}
        </button>
      );
    }
    return (
      <div className="btn-group-bible">
        {this.getBackButton()}
        {chapters}
      </div>
    );
  };

  getVerseButtons = () => {
    if (this.state.bibleVerses.length === 0) {
      fetchBibleVerses(this.state.book, this.state.chapter).then(
        fetchedVerses => {
          this.setState({
            bibleVerses: (
              <List
                height={Math.max(
                  document.documentElement.clientHeight,
                  window.innerHeight || 0
                )}
                itemCount={fetchedVerses.length}
                itemSize={100}
                width="100%"
              >
                {({ index, style }) => (
                  <div className="verse-wrap" style={style}>
                    <button
                      className="btn-verse"
                      onClick={this.onClickVerse(index, fetchedVerses[index])}
                    >
                      Type
                    </button>
                    <p>
                      {this.state.chapter}:{parseInt(index, 10) + 1}{" "}
                      {fetchedVerses[index]}
                    </p>
                  </div>
                )}
              </List>
            )
          });
        }
      );
    }
    return (
      <div className="btn-group-verses">
        {this.getBackButton()}
        {this.state.bibleVerses}
      </div>
    );
  };

  render() {
    switch (this.state.show) {
      case ShowType.TESTAMENTS:
        return this.getTestamentButtons();
      case ShowType.BOOKS:
        return this.getBookButtons();
      case ShowType.CHAPTERS:
        return this.getChapterButtons();
      case ShowType.VERSES:
        return this.getVerseButtons();
      default:
        return this.getTestamentButtons();
    }
  }
}
