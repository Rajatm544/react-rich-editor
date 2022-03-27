import React from 'react';
import SlateEditor from './SlateEditor';
import '../styles/mainContainer.css';

const MainContainer = () => {
	return (
		<main className='container'>
			<h4 className='heading'>Rajat Interview</h4>
			<SlateEditor />
		</main>
	);
};

export default MainContainer;
