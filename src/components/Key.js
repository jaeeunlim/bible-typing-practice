import React from "react";
import "../css/styles.css";

export const Key = props => {
  return (
    <button
      className="Key"
      style={{
        backgroundColor: `${props.color}`,
        width: `${props.width}`,
        borderColor: `${props.borderColor}`
      }}
    >
      {props.label}
    </button>
  );
};
