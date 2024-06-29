import React, { useEffect, useState } from 'react';
import { usePubSub } from '../PubSubexperiment';

function VolumenCarousel() {
  const { subscribe } = usePubSub();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleMessage = (data) => {
      setMessage(data);
    };

    subscribe('articlePublished', handleMessage);

    return () => {};
  }, [subscribe]);

  return <div>{message}</div>;
}

export default VolumenCarousel;
