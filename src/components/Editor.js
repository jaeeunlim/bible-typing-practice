import React from "react";
import { LargeTooltip } from "./Tooltip";

export default class Editor extends React.Component {
  render() {
    return (
      <LargeTooltip
        title={
          <p>
            This is an optional textarea to help you visualize the content of
            what you type.
          </p>
        }
        arrow
      >
        <textarea id="editor" type="text" />
      </LargeTooltip>
    );
  }
}
