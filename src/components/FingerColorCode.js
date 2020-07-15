import React from "react";
import { FaKey } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import FingerLabelsImg from "../images/finger-labels.jpg";

// LightToolTip from https://material-ui.com/components/tooltips/
const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    textAlign: "center"
  }
}))(Tooltip);

export default class FingerColorCode extends React.Component {
  render() {
    return (
      <LightTooltip
        title={
          <React.Fragment>
            <Typography>Finger Color Code</Typography>
            <img id="img-hands" src={FingerLabelsImg} alt="Finger Labels" />
          </React.Fragment>
        }
        placement="right"
      >
        <Button id="btn-hint">
          <FaKey />
        </Button>
      </LightTooltip>
    );
  }
}
