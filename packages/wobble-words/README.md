# Todar Wobble Words [![GitHub issues](https://img.shields.io/github/issues/todar/react-components)](https://github.com/todar/react-components/issues) [![GitHub stars](https://img.shields.io/github/stars/todar/react-components)](https://github.com/todar/react-components/stargazers) [![GitHub license](https://img.shields.io/github/license/todar/react-components)](https://github.com/todar/react-components/blob/master/LICENSE) [![Twitter](https://img.shields.io/twitter/url/https/github.com/todar/react-components/tree/master/packages/wobble-words?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Ftodar%2Freact-components%2Ftree%2Fmaster%2Fpackages%2Fwobble-words)

A cool a simple way to wobble each word on `mouseEnter` event. See a live demo on my website: [roberttodar.com](https://roberttodar.com/)

![Demo](https://github.com/todar/react-components/blob/master/packages/wobble-words/wobble.gif)

[![Edit todar-react-wobble-words](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/epic-kirch-ob30k?fontsize=14)

## Installation

`npm install @todar/react-wobble-words`

## Javascript Instantiation

```js
import React from "react";
import WobbleWords from "@todar/react-wobble-words";

const App = () => {
  return (
    <div className="App">
      <WobbleWords>Each word should wobble on mouseEnter</WobbleWords>
    </div>
  );
};
```

## Props

| Prop Name   | Type   | Default | Description                                      |
| ----------- | ------ | ------- | ------------------------------------------------ |
| children    | String |         | Text to be displayed within the root element.    |
| wordSpacing | String | `.4em`  | Adjusts margin since elements are `inline-block` |
