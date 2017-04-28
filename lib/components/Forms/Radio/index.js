"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var config_1 = require("../../../config");
var Radio = (function (_super) {
    __extends(Radio, _super);
    function Radio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "input-checkbox";
        _this.form = config_1.prefix + "form";
        return _this;
    }
    Radio.prototype.renderInvalid = function () {
        return (React.createElement("div", { className: "form-validation-box" }, this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? this.props.labels.invalid : ""));
    };
    Radio.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, required = _a.required, addClass = _a.addClass, style = _a.style, input = _a.input, id = _a.id;
        var inputId = this.props.meta.form + "-" + input.name;
        return (React.createElement("div", { className: this.name + " " + (disabled && this.name + "--" + disabled) + "  " + (required && this.name + "--" + required) + " " + (addClass ? addClass : "") + " " + this.form + "__group ", title: this.props.labels.title, style: style },
            React.createElement("label", { className: this.name + "__label " + this.form + "__label" },
                React.createElement("input", __assign({ className: this.name + "__item", id: id ? id : inputId, type: "radio", required: !!required, disabled: !!disabled }, this.props.input)),
                " ",
                this.props.labels.main)));
    };
    return Radio;
}(React.Component));
Radio.defaultProps = {
    disabled: false,
    required: false,
    style: null,
    addClass: null,
    id: null,
    input: {
        checked: false,
        name: "",
        onBlur: function (value) {
        },
        onChange: function (value) {
        },
        onDragStart: function (value) {
        },
        onDrop: function (value) {
        },
        onFocus: function (value) {
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
        main: null,
        invalid: "Invalid input",
        title: ""
    }
};
exports["default"] = Radio;
//# sourceMappingURL=index.js.map