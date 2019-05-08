import React from 'react';
import createActions from './createActions';
import useAsyncReducer from '../../hooks/useAsyncReducer';
import reducer, { initialState } from './reducer';

export const CounterContext = React.createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useAsyncReducer(reducer, initialState);
  const actions = createActions(dispatch);

  return (
    <CounterContext.Provider value={[state, actions]}>
      {children}
    </CounterContext.Provider>
  );
};
