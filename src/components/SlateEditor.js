import React, { useCallback, useMemo, useState } from 'react';
import isHotkey from 'is-hotkey';
import { Editable, withReact, Slate } from 'slate-react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';

import Leaf from './Common/Leaf';
import Toolbar from './ToolBar/Toolbar';
import { MarkButton, toggleMark } from './ToolBar/MarkButton';
import { BlockButton } from './ToolBar/BlockButton';
import Elements from './Common/Elements';

import { withImages, InsertImageButton } from './Image/InsertImageButton';

import '../styles/editor.css';

// for all rich editor hot keys
const HOTKEYS = {
	'mod+b': 'bold',
	'mod+i': 'italic',
	'mod+u': 'underline',
	'mod+`': 'code',
};

const SlateEditor = () => {
	// to store the styled text as html
	const [value, setValue] = useState(initialValue);

	// renderElement is used to render custom elements
	const renderElement = useCallback((props) => {
		return <Elements {...props} />;
	}, []);

	// to handle rendering leaves
	const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

	// the slate editor object
	const editor = useMemo(
		() => withImages(withHistory(withReact(createEditor()))),
		[]
	);

	return (
		<div className='editor-container'>
			<Slate
				className='rich-editor'
				editor={editor}
				value={value}
				onChange={(value) => setValue(value)}>
				<Toolbar style={{ width: '90%' }}>
					{/* add all toolbar options */}
					<MarkButton format='bold' icon='format_bold' title='bold' />
					<MarkButton
						format='italic'
						icon='format_italic'
						title='italic'
					/>
					<MarkButton
						format='underline'
						icon='format_underlined'
						title='underline'
					/>
					<MarkButton format='code' icon='code' title='code' />
					<BlockButton
						format='heading-one'
						icon='looks_one'
						title='heading 1'
					/>
					<BlockButton
						format='heading-two'
						icon='looks_two'
						title='heading 2'
					/>
					<BlockButton
						format='block-quote'
						icon='format_quote'
						title='quote'
					/>
					<BlockButton
						format='numbered-list'
						icon='format_list_numbered'
						title='numbered list'
					/>
					<BlockButton
						format='bulleted-list'
						icon='format_list_bulleted'
						title='bulletted list'
					/>
					<BlockButton
						format='left'
						icon='format_align_left'
						title='left align'
					/>
					<BlockButton
						format='center'
						icon='format_align_center'
						title='center align'
					/>
					<BlockButton
						format='right'
						icon='format_align_right'
						title='right align'
					/>
					<BlockButton
						format='justify'
						icon='format_align_justify'
						title='justify'
					/>
					<InsertImageButton title='image' />
				</Toolbar>
				{/* the slate editor */}
				<Editable
					className='rich-editor'
					renderElement={renderElement}
					renderLeaf={renderLeaf}
					placeholder='Enter some rich text…'
					spellCheck
					autoFocus
					// check if hotkeys are pressed and then toggle the correct option from toolbar
					onKeyDown={(event) => {
						for (const hotkey in HOTKEYS) {
							if (isHotkey(hotkey, event)) {
								event.preventDefault();
								const mark = HOTKEYS[hotkey];
								toggleMark(editor, mark);
							}
						}
					}}
				/>
			</Slate>
		</div>
	);
};

// to display some intial text
const initialValue = [
	{
		type: 'paragraph',
		children: [
			{ text: 'This is editable ' },
			{ text: 'rich', bold: true },
			{ text: ' text, ' },
			{ text: 'much', italic: true },
			{ text: ' better than a ' },
			{ text: '<textarea>', code: true },
			{ text: '!' },
		],
	},
	{
		type: 'paragraph',
		children: [
			{
				text: "Since it's rich text, you can do things like turn a selection of text ",
			},
			{ text: 'bold', bold: true },
			{
				text: ', or add a semantically rendered block quote in the middle of the page, like this:',
			},
		],
	},
	{
		type: 'block-quote',
		children: [{ text: 'A wise quote.' }],
	},
	{
		type: 'paragraph',
		align: 'center',
		children: [{ text: 'Try it out for yourself!' }],
	},
];

export default SlateEditor;
