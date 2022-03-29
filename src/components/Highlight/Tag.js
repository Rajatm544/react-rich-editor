import React, { useEffect, useState } from 'react';
import { allColors, assignedColors, placeDiv } from './highlightUtilFunctions';
import '../../styles/editor.css';

const Tag = ({ children, coords }) => {
	const [yPos, setYPos] = useState(0);
	useEffect(() => {
		if (coords.y) {
			setYPos(coords.y);
			if (!assignedColors[yPos]) {
				assignedColors[yPos] = allColors.pop();
			}
		}
	}, [coords, yPos]);

	useEffect(() => {
		if (yPos) {
			placeDiv(yPos, window.getSelection().toString());
		}
	}, [yPos]);
	return (
		<span
			style={{
				background: allColors[yPos],
			}}
			className={`tag-highlight ${yPos > 0 ? yPos : ''}`}>
			{children}
		</span>
	);
};

export default Tag;
