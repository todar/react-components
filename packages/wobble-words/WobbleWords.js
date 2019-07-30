import React from "react";
import PropTypes from "prop-types";
import WobbleWord from "./WobbleWord";

/**
 * A cool a simple way to wobble each word on mouseEnter event.
 * See a live demo on my website: https://www.roberttodar.com
 *
 * @author Robert Todar <robert@roberttodar.com>
 * @param {children} string Text to be displayed within the root element.
 * @param {wordSpacing} string elements are inline-block and might not have white space.
 */
const WobbleWords = ({ children, wordSpacing = ".4em" }) => {
  const words = children.split(" ");
  return (
    <React.Fragment>
      {words.map((word, index) => (
        // Last element doesn't need margin (word spacing).
        <WobbleWord key={index} marginRight={index !== words.lenght ? wordSpacing : ""}>
          {word}
        </WobbleWord>
      ))}
    </React.Fragment>
  );
};

WobbleWords.propTypes = {
  children: PropTypes.string.isRequired,
  wordSpacing: PropTypes.string
};

export default WobbleWords;
