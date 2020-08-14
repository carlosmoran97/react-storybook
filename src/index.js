import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme } from "./utils";
import EmojiCarousel from "./components/EmojiCarousel";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <EmojiCarousel />
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
