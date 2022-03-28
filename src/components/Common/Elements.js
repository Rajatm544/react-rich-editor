import Image from '../Image/Image';

// function to handle all toolbar elements and to return the correct html element for rich editor
const Elements = ({ attributes, children, element }) => {
	const props = { attributes, children, element };
	if (element) {
		const style = { textAlign: element.align };
		switch (element.type) {
			case 'block-quote':
				return (
					<blockquote style={style} {...attributes}>
						{children}
					</blockquote>
				);

			case 'heading-one':
				return (
					<h1 style={style} {...attributes}>
						{children}
					</h1>
				);
			case 'heading-two':
				return (
					<h2 style={style} {...attributes}>
						{children}
					</h2>
				);
			case 'list-item':
				return (
					<li style={style} {...attributes}>
						{children}
					</li>
				);
			case 'bulleted-list':
				return (
					<ol
						style={{ ...style, listStyleType: 'circle' }}
						{...attributes}>
						{children}
					</ol>
				);
			case 'numbered-list':
				return (
					<ol style={style} {...attributes}>
						{children}
					</ol>
				);
			case 'image':
				return <Image {...props} />;

			default:
				return (
					<p style={style} {...attributes}>
						{children}
					</p>
				);
		}
	}
};

export default Elements;
