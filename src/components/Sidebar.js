import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { GiSecretBook } from "react-icons/gi";
import { Labels } from "../utils/translations";

export default props => {
  return (
    <Menu {...props}>
      <Link to="/">
        <GiSecretBook size={30} />
        <span>&nbsp;{Labels[props.language].scriptures}</span>
      </Link>
    </Menu>
  );
};
