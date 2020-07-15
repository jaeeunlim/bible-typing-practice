import React from "react";
import { FaKey } from "react-icons/fa";
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
        placement="left"
      >
        <button id="btn-hint">
          <FaKey />
        </button>
      </LightTooltip>
    );
  }
}
