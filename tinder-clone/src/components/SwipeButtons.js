import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import StarRateIcon from "@material-ui/icons/StarRate";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons_repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
