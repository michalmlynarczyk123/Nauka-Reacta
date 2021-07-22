import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'}></img> 
    {/* dodałem url zamiast 'props.imageImg'*/}
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageImg: PropTypes.string,
};

export default Hero;