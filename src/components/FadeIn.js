import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

const FadeIn = () => {
  const [showText, setShowText] = useState(true);
  const animation = useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? `translateY(0)` : `translateY(-30%)`,
  });
  return (
    <div
      style={{
        height: 300,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button
        onClick={() => {
          console.log(showText);
          setShowText(!showText);
        }}
      >
        Click to animate
      </button>
      <animated.p style={animation}>This is an animated text</animated.p>
    </div>
  );
};

export default FadeIn;
