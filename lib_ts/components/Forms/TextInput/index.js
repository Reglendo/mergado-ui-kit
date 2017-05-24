"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
class TextInput extends React.Component {
    constructor() {
        super(...arguments);
        this.name = config_1.prefix + "input-text";
        this.form = config_1.prefix + "form";
    }
    renderInvalid() {
        if (this.props.meta.error && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (React.createElement("div", { className: `${this.form}__validation` }, this.props.meta.error));
        }
    }
    render() {
        const { id, type, meta, input, addClass } = this.props;
        const inputId = id ? id : `${meta.form}-${input.name}`;
        let addProps = Object.assign({}, this.props.addProps);
        delete addProps['addClass'];
        return (React.createElement("div", { className: `${this.name} ${addClass} ${this.form}__group ${meta.invalid && (meta.dirty || meta.touched) ? `${this.form}__group--invalid` : ''}`, title: this.props.labels.title, style: this.props.style },
            this.renderInvalid(),
            this.props.labels.main !== '' &&
                React.createElement("label", { className: `${this.name}__label ${this.form}__label`, htmlFor: inputId }, this.props.labels.main),
            React.createElement("input", Object.assign({ id: inputId, type: type, placeholder: this.props.labels.placeholder, ref: "input" }, this.props.input, addProps, { className: `${this.name}__input ${this.form}__input--text ${this.form}__input--${type} ${meta.invalid && (meta.dirty || meta.touched) ? 'invalid' : ''} ${this.props.addProps ? this.props.addProps.addClass : ''}` }))));
    }
}
TextInput.defaultProps = {
    type: "text",
    style: null,
    addClass: "",
    id: "",
    input: {
        checked: false,
        name: "",
        onBlur: (value) => {
        },
        onChange: (value) => {
        },
        onDragStart: (value) => {
        },
        onDrop: (value) => {
        },
        onFocus: (value) => {
        },
        value: ""
    },
    meta: {
        active: false,
        asyncValidating: false,
        autofilled: false,
        dirty: false,
        dispatch: Function,
        error: "",
        form: "",
        invalid: false,
        pristine: true,
        submitting: false,
        submitFailed: false,
        touched: false,
        valid: true,
        visited: false,
        warning: ""
    },
    labels: {
        main: "",
        placeholder: "",
        invalid: "",
        title: ""
    }
};
exports.default = TextInput;
//# sourceMappingURL=index.js.map