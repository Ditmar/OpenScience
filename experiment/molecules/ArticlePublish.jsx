import React from 'react';
import { usePubSub } from '../PubSubexperiment';

function ArticlePublish() {
  const { publish } = usePubSub();

  const handlePublish = () => {
    publish('articlePublished', 'New article published!');
  };

  return <button onClick={handlePublish}>Publish Article</button>;
}

export default ArticlePublish;
