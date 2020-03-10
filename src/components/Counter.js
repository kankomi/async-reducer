import React, { useContext, useState } from 'react';

import { CounterContext } from '../context/CounterContext';
import LoadingText from './atoms/LoadingText';

const Counter = () => {
  const [counter, actions] = useContext(CounterContext);
  const [loading, setLoading] = useState({
    up: false,
    down: false,
    reset: false,
    set100: false
  });

  const handleAction = action => {
    if (action === actions.up) {
      setLoading(prev => ({ ...prev, up: true }));
      action().finally(() => setLoading(prev => ({ ...prev, up: false })));
    }
    if (action === actions.down) {
      setLoading(prev => ({ ...prev, down: true }));
      action().finally(() => setLoading(prev => ({ ...prev, down: false })));
    }
    if (action === actions.set) {
      setLoading(prev => ({ ...prev, set100: true }));
      action(100).finally(() => setLoading(prev => ({ ...prev, set100: false })));
    }
    if (action === actions.reset) {
      setLoading(prev => ({ ...prev, reset: true }));
      action().finally(() => setLoading(prev => ({ ...prev, reset: false })));
    }
  };

  return (
    <React.Fragment>
      <h3>Count: {counter.count}</h3>
      <button onClick={() => handleAction(actions.up)}>
        <LoadingText isLoading={loading.up}>Up</LoadingText>
      </button>
      <button onClick={() => handleAction(actions.down)}>
        <LoadingText isLoading={loading.down}>Down</LoadingText>
      </button>
      <button onClick={() => handleAction(actions.set)}>
        <LoadingText isLoading={loading.set100}>set to 100</LoadingText>
      </button>
      <button onClick={() => handleAction(actions.reset)}>
        <LoadingText isLoading={loading.reset}>Reset</LoadingText>
      </button>
    </React.Fragment>
  );
};

export default Counter;
