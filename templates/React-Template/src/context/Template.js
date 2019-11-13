/**
 * This is a template for simple state magment system
 * using createContext and useReducer.
 *
 * @author Robert Todar <robert@roberttodar.com>
 * @license MIT
 * @property {Object} types is an Enum containing the various calls to the dispatch.
 * @function useCalculator useCalculator is a custom hook for using [state, dispath] reducer.
 * @function CalculatorProvider makes [state, dispatch] accessible to child components.
 */
import React, { createContext, useReducer, useContext } from "react";

// The starting state. This is used by createContext and useReducer.
const initialState = {
  value: ""
};

/**
 * An Enum containing the various calls to the dispatch.
 * @property {string} SET_VALUE Sets.value to state.value.
 * @example dispatch({ type: types.SET_VALUE, value: 'Test' })
 */
export const types = {
  SET_VALUE: "SET_VALUE"
};

// This is the main reducer function that will be called from the provider.
function appReducer(state, action) {
  switch (action.type) {
    case types.SET_VALUE:
      return { ...state, value: action.value };

    default:
      throw new Error(`appReducer does not have the action type: ${action.type}`);
  }
}

/**
 * The main Context. Prefer to use the custom hook `useApp` instead.
 * @see useApp
 */
export const AppContext = createContext(initialState);

/**
 * The provider will make accessible the [state, dispatch] from the reducer to all child components.
 */
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>;
};

/**
 * Custom hook that prevents having to import both useContext & CalculatorContext.
 * @example const [state, dispatch] = useApp();
 */
export const useApp = () => useContext(AppContext);

// Add any custom hooks below this section:
