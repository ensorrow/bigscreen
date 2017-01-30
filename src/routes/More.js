import React from 'react';
import { connect } from 'dva';
import styles from './More.css';

function More() {
  return (
    <div className={styles.normal}>
      Route Component: More
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(More);
