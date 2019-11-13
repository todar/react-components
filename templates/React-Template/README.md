# Dashboard.

This is meant to be a tool for allowance billing, mostly preaudit department.

## Setup

```
npx create-react-app .
npm install --save source-map-explorer
npm install --save react-router-dom
npm install --save react-helmet
npm install --save-dev react-snapshot
npm install --save styled-components
npm install --save-dev babel-plugin-styled-components
```

### Make Changes

#### Script Changes

```
+ "analyze": "source-map-explorer 'build/static/js/*.js'",
- "build": "react-scripts build"
+ "build": "react-scripts build && react-snapshot"
```

#### React Dom

```
- import ReactDOM from 'react-dom';
+ import { render } from 'react-snapshot';

- ReactDOM.render(
+ render(
    <App/>,
    document.getElementById('root')
  );
```

## Tools

- [Electronjs](https://electronjs.org/)
- [Create-React-App](https://create-react-app.dev/)
- [Styled-Components](https://www.styled-components.com/)

### Extensions

- [vscode-styled-components](https://github.com/styled-components/vscode-styled-components)
