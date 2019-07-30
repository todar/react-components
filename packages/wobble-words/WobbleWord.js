import React from "react";
import PropTypes from "prop-types";
import "./WobbleWord.css";

/**
 * A cool a simple way to wobble each word on mouseEnter event.
 * See a live demo on my website: https://www.roberttodar.com
 * This is the single word component, is used with Wobble-words component.
 *
 * @author Robert Todar <robert@roberttodar.com>
 * @param {children} string Text to be displayed within the root element.
 * @param {marginRight} string elements are inline-block and might not have white space.
 */
const WobbleWord = ({ children, marginRight = "" }) => {
  const animate = e => {
    e.target.classList.add("Todar-Wobble");
  };

  const clearAnimationClass = e => {
    e.target.classList.remove("Todar-Wobble");
  };

  return (
    <span onMouseEnter={animate} onAnimationEnd={clearAnimationClass} style={{ display: "inline-block", marginRight: marginRight }}>
      {children}
    </span>
  );
};

WobbleWord.propTypes = {
  children: PropTypes.string.isRequired,
  marginRight: PropTypes.string
};

export default WobbleWord;
