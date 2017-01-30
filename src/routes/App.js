import React from 'react';
import { connect } from 'dva';
import styles from './App.css';

import Tabbar from '../components/Tabbar';

import Navbar from '../components/Navbar';

function App({ location, children }) {
	return (
		<div>
			<div className={styles.header}>
				<Navbar location={location} />
			</div>
	    <div className={styles.content}>
				{children}
	    </div>
	    <div className={styles.footer}>
				<Tabbar />
	    </div>
	  </div>
		);
}

function mapStateToProps() {
	return {};
}

export default connect(mapStateToProps)(App);
