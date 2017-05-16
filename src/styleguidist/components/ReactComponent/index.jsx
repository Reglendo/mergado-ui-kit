import { Component, PropTypes } from 'react';

const s = require('./ReactComponent.css');

const ReactComponentRenderer = ({ name, pathLine, description, props, examples, sidebar }) => {
	var path = pathLine.replace('src/','').replace('/index.tsx','')

    var importJsLine = 'import ' + name + ' from "mergado-ui-kit/lib/'+path+'"'
	return (
		<div className={s.root} id={name}>
			<div className={s.meta}>
				{sidebar ? 
					<a className={s.isolatedLink} href={'#!/' + name }>Open isolated ⇢</a>
					:
					<a className={s.isolatedLink} href={'#' + name}>⇽ Exit Isolation</a>
				}

				<header className={s.header}>
					<a className={s.anchor} href={'#' + name}>
						<h2 className={s.heading}>{name}</h2>
					</a>
					<p className={s.pathLine}>
						<span style={{whiteSpace: 'nowrap', fontSize: '11px'}}>
							{importJsLine}
						</span>
					</p>

					<div className={s.description}>
						{description}
					</div>
				</header>
				<div className={s.props}>
					{props}
				</div>
			</div>
			<div>

			</div>
			<div className={s.examples}>
				{examples}
			</div>
		</div>
	);
};

ReactComponentRenderer.propTypes = {
	name: PropTypes.string.isRequired,
	pathLine: PropTypes.string.isRequired,
	description: PropTypes.node,
	props: PropTypes.node,
	examples: PropTypes.node,
	sidebar: PropTypes.bool,
};


export default ReactComponentRenderer;