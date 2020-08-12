import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => (
  <div>
    <PrimaryButton modifiers="small">Primary Button</PrimaryButton>
    <SecondaryButton modifiers={["large"]}>Secondary Button</SecondaryButton>
    <TertiaryButton>Tertiary Button</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));