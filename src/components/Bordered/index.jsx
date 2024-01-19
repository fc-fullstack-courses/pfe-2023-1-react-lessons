import React from 'react';
import styles from './bordered.module.css';

const Bordered = ({ children, bigBorder, redBorder }) => {
  return (
    <div
      className={`${styles.container} ${bigBorder ? styles.bigBorder : ''} ${
        redBorder ? styles.redBorder : ''
      }`}
    >
      {children}
    </div>
  );
};

export default Bordered;
