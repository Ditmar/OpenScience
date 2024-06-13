import React from 'react';
import PropTypes from 'prop-types';
import './ArticleInfo.css';

const ArticleInfo = ({ date, volume }) => (
  <div className="article-info">
    <p className="article-info__label">Fecha:</p>
    <p className="article-info__value">{date}</p>
    <p className="article-info__label">Volumen:</p>
    <p className="article-info__value">{volume}</p>
  </div>
);

ArticleInfo.propTypes = {
  date: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
};

export default ArticleInfo;
