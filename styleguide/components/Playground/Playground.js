import React, { Component, PropTypes } from 'react';
import debounce from 'lodash/debounce';
import PlaygroundRenderer from './PlaygroundRenderer';
import cookie from 'react-cookie';

export default class Playground extends Component {
	static propTypes = {
		code: PropTypes.string.isRequired,
		evalInContext: PropTypes.func.isRequired,
		index: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
	};
	static contextTypes = {
		config: PropTypes.object.isRequired,
		singleExample: PropTypes.bool,
	};

	constructor(props, context) {
		super(props, context);
		const { code } = props;
        const showCode = cookie.load('show_code_' + props.name) == "1" ? true : false;
        const showHtml = cookie.load('show_html_' + props.name) == "1" ? true : false;
		this.state = {
			code,
			showCode,
            showHtml
		};
	}

	componentWillReceiveProps(nextProps) {
		const { code } = nextProps;
		this.setState({
			code,
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextState.code !== this.state.code ||
			nextState.showCode !== this.state.showCode ||
			nextState.showHtml !== this.state.showHtml
		);
	}

	componentWillUnmount() {
		// clear pending changes before unmount
		if (this.queuedChange) {
			this.queuedChange.cancel();
		}
	}

	handleChange(code) {
		// clear pending changes before proceed
		if (this.queuedChange) {
			this.queuedChange.cancel();
		}

		// stored update action
		const queuedChange = () => this.setState({
			code,
		});

		const { previewDelay } = this.context.config;

		if (previewDelay) {
			// if previewDelay is enabled debounce the code
			this.queuedChange = debounce(queuedChange, previewDelay);
			this.queuedChange();
		}
		else {
			// otherwise execute it
			queuedChange();
		}
	}

	handleCodeToggle() {
		this.setState({
			showCode: !this.state.showCode,
		});
        cookie.save('show_code_' + this.props.name, this.state.showCode == "1" ? 0 : 1, { path: '/' });
	}

	handleHtmlToggle() {
		this.setState({
			showHtml: !this.state.showHtml,
		});
        cookie.save('show_html_' + this.props.name, this.state.showHtml == "1" ? 0 : 1, { path: '/' });
	}

	render() {
		const { code, showCode,showHtml } = this.state;
		const { evalInContext, index, name } = this.props;
		const { singleExample } = this.context;
		return (
			<PlaygroundRenderer
				code={code}
				showCode={showCode}
				showHtml={showHtml}
				index={index}
				name={name}
				singleExample={singleExample}
				evalInContext={evalInContext}
				onChange={code => this.handleChange(code)}
				onCodeToggle={() => this.handleCodeToggle()}
				onHtmlToggle={() => this.handleHtmlToggle()}
			/>
		);
	}
}