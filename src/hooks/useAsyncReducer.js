import { useState } from 'react';

const useAsyncReducer = (reducer, initialState = null) => {
  const [state, setState] = useState(initialState);

  const dispatch = action => {
    const result = reducer(state, action);
    if (typeof result.then === 'function') {
      return result
        .then(newState => setState(newState))
        .catch(err => setState({ ...state, error: err }));
    } else {
      setState(result);
    }
  };

  return [state, dispatch];
};

export default useAsyncReducer;
