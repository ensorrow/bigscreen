import React from 'react';
import { connect } from 'dva';
import styles from './Discover.css';

function Discover() {
  return (
    <div className={styles.normal}>
      Route Component: Discover
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Discover);
