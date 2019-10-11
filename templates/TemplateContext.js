/**
 * This is a template for creating a simple state management system
 * using createContext and useReducer.
 *
 * To use, Find and Replace `[template, Template]` each with the name
 * of the context name.
 *
 * @author Robert Todar <robert@roberttodar.com>
 * @license MIT
 * @property {Object} types is an Enum containing the various calls to the dispatch.
 * @function useTemplate useTemplate is a custom hook for using [state, dispath] reducer.
 * @function TemplateProvider makes [state, dispatch] accessible to child components.
 */
import React, { createContext, useReducer, useContext } from "react";

/**  The starting state. This is used by createContext and useReducer. */
const defaultInitialState = {
  value: ""
};

/**
 * An Enum containing the various calls to the dispatch.
 * @property {string} SET_VALUE Sets payload.value to state.value.
 * @example dispatch({ type: types.SET_VALUE, payload: { value: 'Test' }})
 */
export const types = {
  /** Sets payload.value to state.value. */
  SET_VALUE: "SET_VALUE"
};

/**  This is the main reducer function that will be called from the provider. */
function templateReducer(state, action) {
  switch (action.type) {
    case types.SET_VALUE:
      return {
        ...state,
        value: action.payload.value
      };
    default:
      throw new Error(`templateReducer does not have the action type: ${action.type}`);
  }
}

/**
 * The main Context. Prefer to use the custom hook `useTemplate` instead.
 * @see useTemplate
 */
export const TemplateContext = createContext(defaultInitialState);

/** The provider will make accessible the [state, dispatch] from the reducer to all child components.  */
export const TemplateProvider = ({ children, initialState = defaultInitialState }) => {
  const [state, dispatch] = useReducer(templateReducer, initialState);
  return <TemplateContext.Provider value={[state, dispatch]}>{children}</TemplateContext.Provider>;
};

/**
 * Custom hook that prevents having to import both useContext & TemplateContext.
 * @example const [state, dispatch] = useTemplate();
 */
export const useTemplate = () => useContext(TemplateContext);

// Add any custom hooks below this section:
