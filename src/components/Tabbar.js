import React from 'react';
import styles from './Tabbar.css';

import { Link } from 'dva/router';

import { Row, Col, Icon } from 'antd';

const Tabbar = React.createClass({
	render() {
		return (
			<Row className="tabbar">
        <Col span={8} className={styles['f-alc']}>
        	<Link to="/">
        		<Icon type="home" />
        		<span className={styles.title}>主页</span>
        	</Link>
        </Col>
        <Col span={8} className={styles['f-alc']}>
        	<Link to="/discover">
        		<Icon type="search" />
        		<span className={styles.title}>发现</span>
        	</Link>
        </Col>
        <Col span={8} className={styles['f-alc']}>
        	<Link to="/more">
        		<Icon type="ellipsis" />
        		<span className={styles.title}>更多</span>
        	</Link>
        </Col>
      </Row>
			)
	}
})

export default Tabbar;
