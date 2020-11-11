import React, { useContext } from "react";
import "./SwipeButtons.css";
import { ThemeContext } from "./ThemeContext";
import ReplayIcon from "@material-ui/icons/Replay";
import StarRateIcon from "@material-ui/icons/StarRate";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className="swipeButtons">
      <IconButton
        className="swipeButtons_repeat"
        style={{ background: theme.btn_bg }}
      >
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton
        className="swipeButtons_left"
        style={{ background: theme.btn_bg }}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton
        className="swipeButtons_star"
        style={{ background: theme.btn_bg }}
      >
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton
        className="swipeButtons_right"
        style={{ background: theme.btn_bg }}
      >
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton
        className="swipeButtons_lightning"
        style={{ background: theme.btn_bg }}
      >
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
