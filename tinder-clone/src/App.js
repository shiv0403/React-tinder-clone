import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";

import ThemeContextProvider, { ThemeContext } from "./components/ThemeContext";

function App() {
  // const { isLightTheme, light, dark } = useContext(ThemeContext);
  // const theme = isLightTheme ? light : dark;
  return (
    <div className="app">
      <ThemeContextProvider>
        <Header />
        <TinderCards />
        <SwipeButtons />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
