import React, { MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import Tip from './tip';

const WrapperUI = styled.div`
	width: 200px;
	height: auto;
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

	.title {
		margin-bottom: 10px;
		font-size: 14px;
		text-align: left;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		align-items: center;
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
	align-items: center;
	justify-content: flex-end;
	height: 25px;
	padding: 0 10px;
`;

const IconUI = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 14px;
	height: 14px;
	font-size: 12px;
	border-radius: 50%;
	box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
	cursor: pointer;

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
];

const handleGithubClick = () => window.open('https://github.com/elegantYU/just-open-it');
const renderItemJSX = () =>
	list.map(([title, item]) => (
		<ItemUI key={title} data-text={title}>
			{item}
		</ItemUI>
	));

const App = () => {
	const [hoverText, setHoverText] = useState<string | null>('');
	const [offset, setOffset] = useState([0, 0]);
	const [tempEl, setTempEl] = useState<EventTarget | null>(null);

	const renderTipJSX = () => (hoverText ? <Tip text={hoverText} offset={offset} /> : undefined);

	const handleRootHover: MouseEventHandler = (e) => {
		const { target } = e;
		const text = (target as HTMLElement)?.getAttribute('data-text');
		const { x, y, width } = (target as HTMLElement)?.getBoundingClientRect();
		const nodeOffset = [x + width / 2, y - 20];

		if (text) {
			setTempEl(target);
			setOffset(nodeOffset);
			setHoverText(text);
		}
	};
	const handleRootOut: MouseEventHandler = (e) => {
		const { target } = e;

		if (tempEl && target !== tempEl && !(tempEl as HTMLElement).contains(target as HTMLElement)) {
			setHoverText(null);
		}
	};

	return (
		<WrapperUI onMouseOver={handleRootHover} onMouseOut={handleRootOut}>
			<HeaderUI>Just Open It</HeaderUI>
			<ContentUI>
				<ul>{renderItemJSX()}</ul>
			</ContentUI>
			<FooterUI>
				<IconUI className='iconfont icongit' data-text='求 star' onClick={handleGithubClick} />
			</FooterUI>
			{renderTipJSX()}
		</WrapperUI>
	);
};

export default App;
