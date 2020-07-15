import React from "react";
import { IoMdSettings } from "react-icons/io";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  onClickExit = () => {
    this.setState({ open: false });
  };

  onClickSettings = () => {
    this.setState({ open: true });
  };

  getSettingsDialog = () => {
    return (
      <Dialog open={this.state.open}>
        <DialogTitle>
          <center>Settings</center>
        </DialogTitle>
        <DialogContent>
          <center>{this.getHighlightKeysControl()}</center>
          <center>{this.getTextareaControl()}</center>
          <center>
            <Button size="small" onClick={this.onClickExit}>
              Exit
            </Button>
          </center>
        </DialogContent>
      </Dialog>
    );
  };

  getHighlightKeysControl = () => {
    return (
      <FormControlLabel
        id="btn-control"
        control={
          <Switch
            size="small"
            checked={this.props.highlightKeys}
            onChange={this.props.onClickHighlight}
          />
        }
        label="HIGHLIGHT KEYS"
        labelPlacement="end"
      />
    );
  };

  getTextareaControl = () => {
    return (
      <FormControlLabel
        id="btn-control"
        control={
          <Switch
            size="small"
            checked={this.props.showTextarea}
            onChange={this.props.onClickShowTextarea}
          />
        }
        label="SHOW TEXTAREA"
        labelPlacement="end"
      />
    );
  };

  render() {
    return (
      <React.Fragment>
        <Tooltip title="Settings">
          <button id="btn-settings" onClick={this.onClickSettings}>
            <IoMdSettings />
          </button>
        </Tooltip>
        {this.getSettingsDialog()}
      </React.Fragment>
    );
  }
}
