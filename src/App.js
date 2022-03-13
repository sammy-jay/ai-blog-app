import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import './style.css';

export default function App() {
  const [newsArticles, setNewArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: 'ea78d0fb66a064e68b8721451295c4c92e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>Alan AI Blog Application</h1>
    </div>
  );
}
