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
import Loading from "./components/Loading";
import {
  BibleVersion,
  Testament as TestamentTranslation,
  ShowType as ShowTypeTranslation,
  OldTestamentBooks,
  NewTestamentBooks,
  Type
} from "./utils/translations";

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
      bibleVerses: [],
      loadingVerses: true
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.language !== this.props.language &&
      this.state.show === ShowType.VERSES
    ) {
      this.setState({ loadingVerses: true, bibleVerses: [] });
    }
  }

  reset = () => {
    this.setState({
      testament: "",
      show: ShowType.TESTAMENTS,
      book: "",
      chapter: 0,
      bibleVerses: [],
      loadingVerses: true
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
          bibleVerses: [],
          loadingVerses: true
        });
        break;
      default:
        break;
    }
  };

  getBackButton = () => {
    var button = ShowTypeTranslation[this.props.language].TESTAMENTS;
    switch (this.state.show) {
      case ShowType.CHAPTERS:
        button = ShowTypeTranslation[this.props.language].BOOKS;
        break;
      case ShowType.VERSES:
        button = ShowTypeTranslation[this.props.language].CHAPTERS;
        break;
      default:
        break;
    }

    return (
      <div className="btn-back">
        <Button onClick={this.onClickBack}>
          <BsArrowLeftShort size={20} />
          <span>&nbsp;{button}</span>
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
          {TestamentTranslation[this.props.language].OLD}
        </button>
        <button
          className="btn-testament"
          onClick={this.onClickTestament(Testament.NEW)}
        >
          <GiSecretBook size={30} />
          <br />
          <br />
          {TestamentTranslation[this.props.language].NEW}
        </button>
      </div>
    );
  };

  getBookButtons = () => {
    const books = [];
    const testament =
      this.state.testament === Testament.NEW
        ? NewTestamentBooks[this.props.language]
        : OldTestamentBooks[this.props.language];
    for (var name in testament) {
      books.push(
        <button
          key={name}
          className="btn-book"
          onClick={this.onClickBook(name)}
        >
          {testament[name]}
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
          {chapter}
        </button>
      );
    }
    return (
      <div className="btn-group-chapters">
        <div className="chapter-wrap">
          {this.getBackButton()}
          {chapters}
        </div>
      </div>
    );
  };

  getVerseButtons = () => {
    if (this.state.bibleVerses.length === 0) {
      fetchBibleVerses(
        this.state.book,
        this.state.chapter,
        BibleVersion[this.props.language]
      )
        .then(fetchedVerses => {
          this.setState({
            bibleVerses: (
              <List
                height={Math.max(
                  document.documentElement.clientHeight,
                  window.innerHeight || 0
                )}
                itemCount={fetchedVerses.length}
                itemSize={80}
                width="100%"
              >
                {({ index, style }) => (
                  <div className="verse-wrap" style={style}>
                    <button
                      className="btn-verse"
                      onClick={this.onClickVerse(index, fetchedVerses[index])}
                    >
                      {Type[this.props.language]}
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
        })
        .then(() => {
          this.setState({ loadingVerses: false });
        });
    }

    return (
      <div className="btn-group-verses">
        {this.getBackButton()}
        {this.state.bibleVerses}
      </div>
    );
  };

  render() {
    window.scrollTo(0, 0); // scroll to top of page on re-render
    switch (this.state.show) {
      case ShowType.TESTAMENTS:
        return this.getTestamentButtons();
      case ShowType.BOOKS:
        return this.getBookButtons();
      case ShowType.CHAPTERS:
        return this.getChapterButtons();
      case ShowType.VERSES:
        const verses = this.getVerseButtons();
        const testament =
          this.state.testament === Testament.NEW
            ? NewTestamentBooks[this.props.language]
            : OldTestamentBooks[this.props.language];
        const text = testament[this.state.book] + " " + this.state.chapter;
        return this.state.loadingVerses ? <Loading text={text} /> : verses;
      default:
        return this.getTestamentButtons();
    }
  }
}
