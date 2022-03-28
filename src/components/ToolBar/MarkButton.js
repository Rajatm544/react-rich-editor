import React from 'react';
import { useSlate } from 'slate-react';
import { Editor } from 'slate';
import Button from '../Common/Button';
import Icon from '../Common/Icon';

// element to display button to style leafs in slate editor
export const MarkButton = ({ format, icon, title }) => {
	const editor = useSlate();
	return (
		<Button
			title={title}
			active={isMarkActive(editor, format)}
			onMouseDown={(event) => {
				event.preventDefault();
				toggleMark(editor, format);
			}}>
			<Icon>{icon}</Icon>
		</Button>
	);
};

// to control the toggling of the mark level buttons
export const toggleMark = (editor, format) => {
	const isActive = isMarkActive(editor, format);

	if (isActive) {
		Editor.removeMark(editor, format);
	} else {
		Editor.addMark(editor, format, true);
	}
};

// check if mark button is toggled currently
export const isMarkActive = (editor, format) => {
	const marks = Editor.marks(editor);
	return marks ? marks[format] === true : false;
};
