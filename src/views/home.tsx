import React from 'react';
import styled from 'styled-components';
import Item from './item';

const WrapperUI = styled.div`
	width: 200px;
	height: auto;
	padding: 5px 0;
`;

const HeaderUI = styled.div`
	width: 100%;
	height: 30px;
	font-size: 14px;
	line-height: 30px;
	text-align: center;
`;

const ContentUI = styled.div`
	height: auto;
	padding: 10px;

	ul {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
	}
`;

const ItemUI = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
`;

const FooterUI = styled.div`
	display: flex;
	gap: 4px;
	align-items: center;
	justify-content: center;
	height: 25px;
	padding: 0 10px;
	cursor: pointer;

	p {
		color: #666666;
		font-size: 12px;
		transform-origin: left center;
	}

	&:hover p {
		text-decoration: underline;
	}
`;

const IconUI = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);

	&:hover {
		box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
	}
`;

const list: [string, JSX.Element][] = [
	[
		'微信',
		<svg className='icon' aria-hidden='true' key='微信'>
			<use xlinkHref='#iconweixin' />
		</svg>,
	],
	[
		'csdn',
		<svg className='icon' aria-hidden='true' key='csdn'>
			<use xlinkHref='#iconcsdn' />
		</svg>,
	],
	[
		'知乎',
		<svg className='icon' aria-hidden='true' key='知乎'>
			<use xlinkHref='#iconzhihu' />
		</svg>,
	],
	[
		'qq邮箱',
		<svg className='icon' aria-hidden='true' key='qq邮箱'>
			<use xlinkHref='#iconQQyouxiang' />
		</svg>,
	],
	[
		'微博',
		<svg className='icon' aria-hidden='true' key='微博'>
			<use xlinkHref='#iconweibo' />
		</svg>,
	],
	[
		'简书',
		<svg className='icon' aria-hidden='true' key='简书'>
			<use xlinkHref='#iconjianshu' />
		</svg>,
	],
	[
		'贴吧',
		<svg className='icon' aria-hidden='true' key='简书'>
			<use xlinkHref='#icontieba' />
		</svg>,
	],
	[
		'腾讯文档',
		<svg className='icon' aria-hidden='true' key='简书'>
			<use xlinkHref='#icontengxunwendang' />
		</svg>,
	],
];

const handleGithubClick = () => window.open('https://github.com/elegantYU/just-open-it');
const renderItemJSX = () =>
	list.map(([title, item]) => (
		<Item key={title} text={title}>
			{item}
		</Item>
	));

const App = () => (
	<WrapperUI>
		<HeaderUI>Just Open It</HeaderUI>
		<ContentUI>
			<ul>{renderItemJSX()}</ul>
		</ContentUI>
		<FooterUI onClick={handleGithubClick}>
			<IconUI className='iconfont icongit' data-text='求star' />
			<p>star支持一下~</p>
		</FooterUI>
	</WrapperUI>
);

export default App;
