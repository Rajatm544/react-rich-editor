import React from 'react';
import SlateEditor from './SlateEditor';
import '../styles/mainContainer.css';

const MainContainer = () => {
	return (
		<main className='container'>
			<h4 className='heading'>John Doe Interview</h4>
			<SlateEditor />
		</main>
	);
};

export default MainContainer;
