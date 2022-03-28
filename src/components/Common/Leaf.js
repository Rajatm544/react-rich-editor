import React from 'react';
import {
	assignedColors,
	allColors,
	getSelectionCoords,
	colorTags,
	placeDiv,
} from '../Highlight/highlightUtilFunctions';

// Slate Leaf to handle style changes on single characters
const Leaf = ({ attributes, children, leaf }) => {
	if (leaf.bold) {
		children = <strong>{children}</strong>;
	}

	if (leaf.code) {
		children = <code>{children}</code>;
	}

	if (leaf.italic) {
		children = <em>{children}</em>;
	}

	if (leaf.underline) {
		children = <u>{children}</u>;
	}
	// //  according to Text The custom properties in determine the style type
	if (leaf.highlight) {
		const coords = getSelectionCoords();
		const yPos = coords.y;
		if (!assignedColors[yPos]) {
			assignedColors[yPos] = allColors.pop();
		}
		children = (
			<span
				className={`tag-highlight ${yPos}`}
				style={{
					backgroundColor: assignedColors[yPos],
					opacity: '0.7',
				}}>
				{children}
			</span>
		);
		console.log(yPos);
		setTimeout(() => {
			colorTags();
		}, 200);
		placeDiv(yPos, window.getSelection().toString());
	}
	return <span {...attributes}>{children}</span>;
};

export default Leaf;
