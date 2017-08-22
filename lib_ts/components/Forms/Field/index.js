"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const dom_only_props_1 = require("helpers/dom-only-props");
const styled_components_1 = require("styled-components");
const style = require("styled");
exports.defaultFieldProps = {
    group: {
        className: "",
        style: {},
        bigLabel: false,
    },
    input: {
        className: "",
        name: "",
        value: "",
        checked: false,
        onBlur: (value) => { },
        onChange: (value) => { },
        onDragStart: (value) => { },
        onDrop: (value) => { },
        onFocus: (value) => { },
        onKeyDown: (value) => { },
        onKeyUp: (value) => { },
        onClick: (value) => { },
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
        main: "",
        invalid: "",
        title: "",
        placeholder: "",
    },
};
const BigLabel = styled_components_1.default.h3 `
    padding-left: 10px;
    border-left: 5px solid hsla(43,44%,75%,.5);
    font-size: 1.2em;
    margin: 10px 0;
`;
const LabelComponent = ({ children, name, bigLabel }) => {
    if (children === "" || children === null) {
        return null;
    }
    return (React.createElement("label", { className: `${name}__label ${config_1.form}__label` }, bigLabel ? React.createElement(BigLabel, null, children) : children));
};
exports.FieldLabel = styled_components_1.default(LabelComponent) `
    display: block;
    padding: 6px 10px 4px 2px;
`;
const FieldErrorComponent = (_a) => {
    var props = __rest(_a, []);
    if ((props.meta.error || props.labels.invalid) &&
        props.meta.invalid && (props.meta.dirty || props.meta.touched)) {
        return (React.createElement("div", { className: `${props.className}` }, props.meta.error || props.labels.invalid));
    }
    else {
        return null;
    }
};
exports.FieldError = styled_components_1.default(FieldErrorComponent) `
    background: ${style.RED};
    color: white;
    font-size: 12px;
    z-index: 1;
    padding: 1px 5px;
    position: absolute;
    top: 100%;
    left: 0px;
`;
const FieldComponent = (props) => {
    const { meta, input, labels, group } = props, others = __rest(props, ["meta", "input", "labels", "group"]);
    const isInvalid = props.meta.invalid && (props.meta.dirty || props.meta.touched);
    return (React.createElement("div", Object.assign({}, dom_only_props_1.default(props), { className: `${props.name ? props.name : ""}
                        ${props.className ? props.className : ""}
                        ${props.disabled ? props.name + `--disabled` : ""}
                        ${props.required ? props.name + `--required` : ""}
                        ${config_1.form}__group
                        `, title: props.labels.title, style: props.style }),
        React.createElement(exports.FieldError, Object.assign({}, props, { className: `${config_1.form}__validation}` })),
        React.createElement(exports.FieldLabel, { name: props.name, bigLabel: group.bigLabel }, props.label ? props.label : (others.label ? others.label : labels.main)),
        React.createElement("div", { className: `\
                    ${isInvalid ? `${config_1.form}__group--invalid` : ""}\
                ` }, props.children)));
};
FieldComponent.defaultProps = exports.defaultFieldProps;
exports.Field = styled_components_1.default(FieldComponent) `
    position: relative;
    padding: 2px;
    margin-bottom: 10px;
    .${config_1.form}__group--invalid {
        margin: -2px;
        border: 2px solid transparent;
        border-color: ${(props) => props.meta && props.meta.invalid &&
    (props.meta.dirty || props.meta.touched) ? style.RED : "transparent"}
    }
`;
//# sourceMappingURL=index.js.map