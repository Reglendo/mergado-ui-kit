// CodeMirror
import 'codemirror/mode/jsx/jsx';
import 'codemirror/lib/codemirror.css';
import 'rsg-codemirror-theme.css';

import React, { Component, PropTypes } from 'react';
import debounce from 'lodash/debounce';
import Codemirror from 'react-codemirror';
import EditorRenderer from 'rsg-components/Editor/EditorRenderer';

const codemirrorOptions = {
	mode: 'jsx',
	lineNumbers: false,
	lineWrapping: true,
	smartIndent: true,
	matchBrackets: true,
	viewportMargin: Infinity,
};

const UPDATE_DELAY = 10;

export default class Editor extends Component {
	static propTypes = {
		code: PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired,
	};
    
    static config;

	constructor() {
		super();
        this.config =  { highlightTheme: "base16-light", previewDelay: 500, showCode: true }
		this.handleChange = debounce(this.handleChange.bind(this), UPDATE_DELAY);
	}

	shouldComponentUpdate() {
		return false;
	}

	handleChange(newCode) {
		this.props.onChange(newCode);
	}

	render() {

		const { code } = this.props;
		const { highlightTheme } = this.config;
		const options = {
			...codemirrorOptions,
			theme: highlightTheme,
		};

		return (
			<EditorRenderer>
				<Codemirror value={code} onChange={this.handleChange} options={options} />
			</EditorRenderer>
		);
	}
}