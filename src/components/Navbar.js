import React from 'react';
import styles from './Navbar.css';

function filterTitle(pathname) {
	let titleObj = {
		'/': '主页',
		'/discover': '发现',
		'/more': '更多'
	};
	return titleObj[pathname] || '未知路径';
}

function Navbar({ location }) {
  return (
    <div className={styles.navbar}>
      {filterTitle(location.pathname)}
    </div>
  );
}

export default Navbar;
