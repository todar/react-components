import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components/macro";
import Navbar from "./components/Navbar";
import Fallback from "./components/Fallback";

// The pages should be lazy loaded to help with performance.
// Add any additional pages in this section.
const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));

// This is the main theme for the app.
// This theme is provided to all children components.
const theme = {
  primary: {
    main: "#09d3ac",
    contrastText: "#000"
  },
  background: {
    main: "#282c34",
    contrastText: "#fff"
  }
};

// This is where all the global style is located at.
// This is minimal on purpose. Each component should be
// taking care of it's own styling.
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${theme.background.main};
    color: ${theme.background.contrastText}
  }
`;

/**
 * The structure of this app is that each route will
 * contain all of it's own style. The one exception is then
 * Navbar. This app also provides a Theme to each child component.
 * At some point it will probably pass down state through a reducer.
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Suspense fallback={Fallback}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
