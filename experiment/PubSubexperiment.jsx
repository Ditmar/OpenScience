import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

const PubSubContext = createContext();

export const usePubSub = () => useContext(PubSubContext);

export function PubSubProvider({ children }) {
  const [subscribers, setSubscribers] = useState({});

  const subscribe = useCallback((event, callback) => {
    setSubscribers((prev) => ({
      ...prev,
      [event]: [...(prev[event] || []), callback],
    }));
  }, []);

  const publish = useCallback(
    (event, data) => {
      if (subscribers[event]) {
        subscribers[event].forEach((callback) => callback(data));
      }
    },
    [subscribers],
  );

  const value = useMemo(() => ({ subscribe, publish }), [subscribe, publish]);

  return <PubSubContext.Provider value={value}>{children}</PubSubContext.Provider>;
}

PubSubProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
