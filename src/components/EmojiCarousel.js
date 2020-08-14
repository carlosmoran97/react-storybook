import React, { useState } from "react";
import { animated, useTransition } from "react-spring";

const EmojiCarousel = () => {
  const [happy, setHappy] = useState(true);
  const transition = useTransition(happy, null, {
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <div className="emoji-carousel">
      <button onClick={() => setHappy(!happy)}>Make happy</button>
      {transition.map(({ item, props }) => {
        return item ? (
          <animated.span role="img" style={props} aria-label="Happy">
            😃
          </animated.span>
        ) : (
          <animated.span role="img" style={props} aria-label="Sad">
            😭
          </animated.span>
        );
      })}
    </div>
  );
};

export default EmojiCarousel;
