import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

import { Carousel, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

function IndexPage() {
  return (
    <div>
      <div className={styles.carouWra}>
        <Carousel autoplay dots >
          <div style={{height: '5rem'}} className={styles.carousel}></div>
          <div style={{height: '5rem'}} className={styles.carousel}></div>
          <div style={{height: '5rem'}} className={styles.carousel}></div>
          <div style={{height: '5rem'}} className={styles.carousel}></div>
        </Carousel>
      </div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="讲座" key="1">Tab1</TabPane>
        <TabPane tab="活动" key="2">Tab2</TabPane>
      </Tabs>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
