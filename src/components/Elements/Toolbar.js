import React from 'react';
import Menu from './Menu';
import '../../styles/toolbar.css';
import { cx, css } from '@emotion/css';

const Toolbar = React.forwardRef(({ className, ...props }, ref) => (
	<Menu
		{...props}
		ref={ref}
		className={cx(
			className,
			'toolbar',
			css`
				position: relative;
				padding: 1em;
				margin: 0;
				border-bottom: 2px solid #eee;
				margin-bottom: 20px;
			`
		)}
	/>
));

export default Toolbar;
