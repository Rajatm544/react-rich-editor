import React from 'react';
import ReactDOM from 'react-dom';

// to assign different colors to the different y-positions
export const assignedColors = {};

// to color backgrounds of highlighted text
export const allColors = [
	'#FF6037',
	'#ED0A3F',
	'#E77200',
	'#33CC99',
	'#63B76C',
	'#EE34D2',
	'#CCFF00',
	'#0A7E8C',
	'#FF355E',
];

// get the x and y coordinates of selected text
export const getSelectionCoords = () => {
	const sele = window.getSelection();
	const oRange = sele.getRangeAt(0);
	const oRect = oRange.getBoundingClientRect();
	return {
		x: oRect.x,
		y: oRect.y,
	};
};

// color the tags
export const colorTags = () => {
	const highlightTags = Array.from(
		document.querySelectorAll('.tag-highlight')
	);
	highlightTags.map((tag) => {
		const index = tag.className.split(' ')[1];
		tag.style.background = assignedColors[index];
		return null;
	});
};

// place the highlight tags in the DOM
export const placeDiv = (y_pos, text) => {
	const tagsContainer = document.getElementsByClassName('tags')[0];
	const tags = Array.from(document.querySelectorAll('.tag'));

	// craete a new Tag span with the correct y position to align it to the highlighted line
	const newTag = React.createElement(
		'span',
		{
			style: {
				position: 'absolute',
				left: `${tagsContainer.getBoundingClientRect().left + 5}px`,
				top: `${y_pos}px`,
				background: `${assignedColors[y_pos]}`,
			},
			className: `tag ${y_pos}`,
			key: text,
		},
		`${text.substring(0, 15)}...`
	);

	const allTags = [];
	// fetch all previous tags and create a new Fragment to be rendered
	for (let i = 0; i < tags.length; i++) {
		// if multiple spans are selected in the same line, show tag of latest selection
		const sameLineTag = tags[i].className.includes(`${y_pos}`);

		if (!sameLineTag) {
			let newYPos = tags[i].className.split(' ')[1];
			const tag = React.createElement(
				'span',
				{
					style: {
						position: 'absolute',
						left: `${tags[i].offsetLeft}px`,
						top: `${tags[i].offsetTop}px`,
						background: `${assignedColors[newYPos]}`,
					},
					className: 'tag',
					key: i,
				},
				`${tags[i].innerText}`
			);
			allTags.push(tag);
		}
	}

	allTags.push(newTag);
	ReactDOM.hydrate(allTags, tagsContainer); //render the tags in the parent container
};
