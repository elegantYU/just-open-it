import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const scaleIn = keyframes`
	0% {
		transform: scale(0.8) translateX(-50%);
		opacity: 0.6;
	}
	100% {
		transform: scale(1) translateX(-50%);
		opacity: 1;
	}
`;

const WrapperUI = styled.div`
	position: fixed;
	padding: 0 2px;
	color: #ffffff;
	font-size: 12px;
	white-space: nowrap;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 4px;
	transform: scale(0.8) translateX(-50%);
	transform-origin: center top;
	opacity: 0.6;
	animation: ${scaleIn} 0.15s forwards;
`;

interface Props {
	text: string;
	offset: number[];
}

const Tip = (props: Props) => {
	const { text, offset } = props;
	const [left, top] = offset;
	const style = { left: `${left}px`, top: `${top}px` };

	return <WrapperUI style={style}>{text}</WrapperUI>;
};

export default Tip;
