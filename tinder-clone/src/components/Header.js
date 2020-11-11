import React, { useContext } from "react";
import "./Header.css";
import { ThemeContext } from "./ThemeContext";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  let themeStyle = { background: theme.bg };

  return (
    <div
      className="header"
      style={{
        background: theme.bg,
        borderBottom: "0px solid " + theme.btn_bg,
      }}
    >
      <IconButton style={{ background: theme.btn_bg, color: theme.btn_color }}>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>

      <img
        src="https://www.flaticon.com/svg/static/icons/svg/408/408790.svg"
        alt="tinder_logo"
        className="header_logo"
        onClick={toggleTheme}
      />

      <IconButton style={{ background: theme.btn_bg, color: theme.btn_color }}>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
}

export default Header;
