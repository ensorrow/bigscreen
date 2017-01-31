import React from 'react';
import { connect } from 'dva';
import styles from './Cardlist.css';
import { routerRedux } from 'dva/router';

let dataList = [
	{
		'title': '测试标题',
		'imgurl': 'http://lvzheyang.top/images/avatar.jpg',
		'date': '2014-10-11',
		'address': '宪梓堂',
		'author': '学生会',
		'tags': ['学生会','可盖章','交大之星']
	},
	{
		'title': '测试标题2',
		'imgurl': 'http://lvzheyang.top/images/avatar.jpg',
		'date': '2014-10-11',
		'address': '宪梓堂',
		'author': '学生会',
		'tags': ['学生会','可盖章','交大之星']
	},
	{
		'title': '测试标题3',
		'imgurl': 'http://lvzheyang.top/images/avatar.jpg',
		'date': '2014-10-11',
		'address': '宪梓堂',
		'author': '学生会',
		'tags': ['学生会','可盖章','交大之星']
	}
]

function Cardlist({ dispatch }) {
	function getDetail(i) {
		dispatch(routerRedux.push({
			pathname: '/discover',
			query: { i },
		}));
	}

	let cards = [];
	dataList.forEach(function(data, index) {
		let tags = [];
		data.tags.forEach(function(tag, index2) {
			tags.push(
				<span className={styles.tag} key={index2}>{tag}</span>
			);
		});
		cards.push(
			<div onClick={getDetail.bind(null, index)} className={styles.card} key={index}>
				<div className={styles.imgWra}><img src={data.imgurl} style={{maxWidth: '90%'}}/></div>
				<div className="detail">
					<h1>{data.title}</h1>
					<div>{tags}</div>
					<h2>{data.date}</h2>
					<h2>{data.address}</h2>
					<h2>{data.author}</h2>
				</div>
			</div>
		);
	});
  return (
    <div className={styles.cardlist}>
			{cards}
    </div>
  );
}

export default connect()(Cardlist);
