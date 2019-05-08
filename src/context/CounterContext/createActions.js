function createActions(dispatch) {
  return {
    up: () => dispatch({ type: 'up' }),
    down: () => dispatch({ type: 'down' }),
    reset: () => dispatch({ type: 'reset' })
  };
}

export default createActions;
