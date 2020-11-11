import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { btn_bg: "white", bg: "#ffff", btn_color: "#fffff" },
    dark: {
      btn_bg: "#656565",
      bg: "#1b1b1b",
      btn_color: "#fffff",
      box_shadow: "1px 2px 50px 1px rgba(255, 255, 255, 0.3)",
    },
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
    if (!this.state.isLightTheme) {
      document.getElementsByTagName(
        "body"
      )[0].style.background = this.state.light.bg;
    } else {
      document.getElementsByTagName(
        "body"
      )[0].style.background = this.state.dark.bg;
    }
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
