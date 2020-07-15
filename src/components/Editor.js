import React from "react";
import { LargeTooltip } from "./Tooltip";

export default class Editor extends React.Component {
  render() {
    if (this.props.show) {
      return (
        <LargeTooltip
          title={
            <p>
              This is an optional textarea to help you visualize the content of
              what you type. You can turn off this feature from settings.
            </p>
          }
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
