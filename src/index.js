import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => (
  <div>
    <PrimaryButton>Primary Button</PrimaryButton>
    <SecondaryButton>Secondary Button</SecondaryButton>
    <TertiaryButton>Tertiary Button</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));