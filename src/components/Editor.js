import React from "react";
import { LargeTooltip } from "./Tooltip";
import { Labels } from "../utils/translations";

export default class Editor extends React.Component {
  render() {
    if (this.props.show) {
      return (
        <LargeTooltip
          title={<p>{Labels[this.props.language].textarea}</p>}
          arrow
        >
          <textarea id="editor" type="text" />
        </LargeTooltip>
      );
    } else {
      return <></>;
    }
  }
}
