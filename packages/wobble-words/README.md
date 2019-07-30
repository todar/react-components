# Todar Wobble Words

A cool a simple way to wobble each word on `mouseEnter` event. See a demo on my website: [roberttodar.com](https://roberttodar.com/)

## Installation

`npm install @todar/react-wobble-words`

## Javascript Instantiation

```js
import React from "react";
import WobbleWords from "@todar/react-wobble-words";

const App = ()=> {
  return (
    <div className="App">
      <WobbleWords>Each word should wobble on mouseEnter</WobbleWords>
    </div>
  );
}
```

## Props

| Prop Name | Type | Description |
| ----------| ---- | ----------- |
| children  | String | Text to be displayed within the root element. |
| wordSpacing | String | Default is `.3em`, needed since elements are `inline-block` |
