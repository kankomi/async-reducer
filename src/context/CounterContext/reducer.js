export const initialState = { count: 0 };

function reducer(state, action) {
  return new Promise(resolve => {
    setTimeout(() => {
      switch (action.type) {
        case 'up':
          resolve({ ...state, count: state.count + 1 });
          break;
        case 'down':
          resolve({ ...state, count: state.count - 1 });
          break;
        case 'reset':
          resolve({ ...initialState });
          break;
        default:
          resolve(state);
          break;
      }
    }, 1000);
  });
}

export default reducer;
