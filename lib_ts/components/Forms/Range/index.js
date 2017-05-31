"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Input_1 = require("components/Forms/Input");
class Range extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "input-range";
        this.form = config_1.prefix + "form";
        this.state = {
            value: props.input.value,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({ value: evt.target.value });
        return this.props.input.onChange(evt.target.value);
    }
    renderInvalid() {
        if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (React.createElement("div", { className: `${this.form}__validation` }, this.props.labels.invalid));
        }
    }
    render() {
        const { id, meta, input } = this.props;
        const inputId = `${meta.form}-${input.name}`;
        const outputId = `${meta.form}-${input.name}_output`;
        const outputWidth = document.getElementById(outputId) ? document.getElementById(outputId).offsetWidth : 10;
        const addProps = Object.assign({}, this.props.addProps);
        delete addProps.addClass;
        const props = this.props;
        return (React.createElement(Input_1.Input, Object.assign({ name: this.name }, props),
            React.createElement(Input_1.InputError, Object.assign({}, props)),
            React.createElement("div", { style: { position: "relative" } },
                React.createElement(Input_1.InputLabel, { name: this.name }, this.props.labels.main),
                React.createElement("input", Object.assign({ className: `${this.name}__item ${this.form}__input--text ${this.form}__input--range
                                    ${meta.invalid && (meta.dirty || meta.touched) ? "invalid" : ""}`, id: id ? id : inputId, type: "range", placeholder: this.props.labels.placeholder }, this.props.input, { max: this.props.max, min: this.props.min, step: this.props.step, onChange: this.handleChange, onInput: (evt) => {
                        const target = evt.target;
                        const output = document.getElementById(outputId);
                        output.value = target.value;
                    }, value: this.state.value }, addProps)),
                React.createElement("output", { className: `${this.form}__input--range__output`, style: { left: "calc(" + ((this.state.value / this.props.max) * 100) + "% - " + outputWidth / 2 + "px)" }, id: outputId }, this.state.value))));
    }
}
Range.defaultProps = {
    max: 50,
    min: 0,
    step: 1,
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
        value: "",
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
        warning: "",
    },
    labels: {
        main: "Text",
        placeholder: "Fill out here...",
        invalid: "Invalid input",
        title: "",
    },
};
exports.default = Range;
//# sourceMappingURL=index.js.map