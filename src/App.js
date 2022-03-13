import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';

import { NewsCards, Modal } from './components';
import useStyles from './styles';

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: 'ea78d0fb66a064e68b8721451295c4c92e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Open article number [4]
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Go back
              </Typography>
            </div>
          </div>
        ) : null}
        <img
          src="data:image/jpeg;base64,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"
          className={classes.alanLogo}
          alt="logo"
        />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      {!newsArticles.length ? (
        <div className={classes.footer}>
          <Typography variant="body1" component="h2">
            Created by
            <a
              className={classes.link}
              href="https://www.linkedin.com/in/tolulope-soneye/"
            >
              {' '}
              Tolulope Soneye
            </a>
          </Typography>
        </div>
      ) : null}
    </div>
  );
};

export default App;
