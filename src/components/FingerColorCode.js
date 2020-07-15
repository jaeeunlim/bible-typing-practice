import React from "react";
import { FaKey } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { LightTooltip } from "./Tooltip";
import FingerLabelsImg from "../images/finger-labels.jpg";

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
