import React from 'react';
import styled from 'styled-components';

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
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
`;

const ItemUI = styled.div`
	height: 28px;
	padding: 0 12px;
	color: #0059ff;
	line-height: 28px;
	text-align: center;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const list: string[] = ['微信', 'csdn', '知乎', 'qq 邮箱', '微博', '简书', '贴吧', '腾讯文档', '掘金'];

const handleGithubClick = () => window.open('https://github.com/elegantYU/just-open-it');
const renderItemJSX = () => list.map((title) => <ItemUI key={title}>{title}</ItemUI>);

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
