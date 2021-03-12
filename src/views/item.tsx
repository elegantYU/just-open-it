import React from 'react';
import styled, { keyframes } from 'styled-components';

const scaleIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const WrapperUI = styled.div`
	display: grid;
	grid-template-columns: 20px 1fr;
	gap: 10px;
	padding: 5px 10px;
	color: #333333;
	font-size: 12px;
	white-space: nowrap;
	border-radius: 4px;
	box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
	opacity: 0;
	animation: ${scaleIn} 0.15s forwards;
`;

interface Props {
	text: string;
}

const Tip: React.FC<Props> = ({ children, text }) => (
	<WrapperUI>
		{children}
		{text}
	</WrapperUI>
);

export default Tip;
