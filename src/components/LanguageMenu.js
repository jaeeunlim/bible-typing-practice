import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Flag from "react-world-flags";
import { Language } from "../utils/translations";

export default class LanguageMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: Language.ENGLISH,
      menuOpen: false,
      anchorEl: null
    };
  }

  onClickLanguage = event => {
    this.setState({ menuOpen: true, anchorEl: event.currentTarget });
  };

  onCloseLanguage = () => {
    this.setState({ menuOpen: false, anchorEl: null });
  };

  onClickEnglish = () => {
    this.setState({ language: Language.ENGLISH, menuOpen: false });
    this.props.setLanguage(Language.ENGLISH);
  };

  onClickKorean = () => {
    this.setState({ language: Language.KOREAN, menuOpen: false });
    this.props.setLanguage(Language.KOREAN);
  };

  getAmericanFlag = () => {
    return <Flag code="US" height="12" />;
  };

  getKoreanFlag = () => {
    return <Flag code="KR" height="16" />;
  };

  getFlag = () => {
    switch (this.state.language) {
      case Language.KOREAN:
        return this.getKoreanFlag();
      default:
        return this.getAmericanFlag();
    }
  };

  render() {
    return (
      <div id="language-menu">
        <Button
          id="btn-language"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.onClickLanguage}
        >
          {this.getFlag()}
        </Button>
        <Menu
          id="simple-menu"
          keepMounted
          anchorEl={this.state.anchorEl}
          open={this.state.menuOpen}
          onClose={this.onCloseLanguage}
        >
          <MenuItem onClick={this.onClickEnglish}>
            {this.getAmericanFlag()}
            &nbsp;{Language.ENGLISH}
          </MenuItem>
          <MenuItem onClick={this.onClickKorean}>
            {this.getKoreanFlag()}
            &nbsp;{Language.KOREAN}
          </MenuItem>
        </Menu>
      </div>
    );
  }
}
