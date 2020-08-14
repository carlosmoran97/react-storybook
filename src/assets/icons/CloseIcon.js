import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <title>icon/mini-close-solid</title>
    <desc>Created with Sketch.</desc>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <polygon
        fill="#000000"
        points="16.2935 17.707 12.0005 13.414 7.7075 17.707 6.2935 16.293 10.5865 12 6.2935 7.707 7.7075 6.293 12.0005 10.586 16.2935 6.293 17.7075 7.707 13.4145 12 17.7075 16.293"
      />
    </g>
    <text
      x="0"
      y="39"
      fill="#000000"
      font-size="5px"
      font-weight="bold"
      font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
    >
      Created by Travis Avery
    </text>
    <text
      x="0"
      y="44"
      fill="#000000"
      font-size="5px"
      font-weight="bold"
      font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
    >
      from the Noun Project
    </text>
  </CloseIconWrapper>
);
