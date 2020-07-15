import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

export const LargeTooltip = withStyles(theme => ({
  tooltip: {
    fontSize: 20,
    fontWeight: 1,
    textAlign: "center"
  }
}))(Tooltip);

// LightToolTip from https://material-ui.com/components/tooltips/
export const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    textAlign: "center"
  }
}))(Tooltip);
