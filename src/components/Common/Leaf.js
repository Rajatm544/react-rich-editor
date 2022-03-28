import React from 'react';
import { getSelectionCoords } from '../Highlight/highlightUtilFunctions';
import Tag from '../Highlight/Tag';

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

	if (leaf.highlight) {
		const coords = getSelectionCoords();
		return <Tag coords={coords}>{children}</Tag>;
	}
	return <span {...attributes}>{children}</span>;
};

export default Leaf;
