function createActions(dispatch) {
  return {
    up: () => dispatch({ type: 'up' }),
    down: () => dispatch({ type: 'down' }),
    reset: () => dispatch({ type: 'reset' }),
    set: amount => dispatch({ type: 'set', payload: amount })
  };
}

export default createActions;
