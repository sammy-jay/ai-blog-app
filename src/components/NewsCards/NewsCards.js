import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import Masonry from 'react-masonry-css';
import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  {
    color: '#1565c0',
    title: 'News by Categories',
    info: 'Business, Sports, Technology',
    text: 'Give me the latest Technology news',
  },
  {
    color: '#4527a0',
    title: 'News by Terms',
    info: 'Bitcoin, Smartphones, Covid-19...',
    text: "What's up with Smartphones",
  },
  {
    color: '#283593',
    title: 'News by Sources',
    info: 'CNN, BBC News, The Punch, ABC News...',
    text: 'Give me the news from CNN',
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5" component="h5">
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="h6" component="h6">
                    <strong>{infoCard.title.split(' ')[2]}</strong>: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6" component="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
