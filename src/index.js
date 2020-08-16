import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme } from "./utils";
import { SignUpModal } from "./components";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ThemeProvider theme={defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setShowModal(!showModal)}
      >
        Show modal
      </button>
      <div>
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
