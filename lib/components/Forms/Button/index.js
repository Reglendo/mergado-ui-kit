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
exports.__esModule = true;
var React = require("react");
var config_1 = require("../../../config");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = config_1.prefix + "button";
        _this.form = config_1.prefix + "form";
        return _this;
    }
    Button.prototype.renderInvalid = function () {
        return (React.createElement("div", { className: "form-validation-box" }, this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? this.props.labels.invalid : ""));
    };
    Button.prototype.renderButton = function () {
        var _a = this.props, input = _a.input, labels = _a.labels, icon = _a.icon, onClick = _a.onClick;
        return (React.createElement("button", { className: this.name + "__item", onClick: onClick, name: input.name, title: labels.title },
            icon,
            labels.main));
    };
    Button.prototype.renderLink = function () {
        var _a = this.props, link = _a.link, labels = _a.labels, icon = _a.icon, onClick = _a.onClick;
        return (React.createElement("a", { href: link, className: this.name + "__item", onClick: onClick, title: labels.title },
            icon,
            labels.main));
    };
    Button.prototype.renderSubmit = function () {
        var _a = this.props, meta = _a.meta, input = _a.input, labels = _a.labels, onClick = _a.onClick;
        var inputId = meta.form + "-" + input.name;
        return (React.createElement("input", { type: "submit", className: this.name + "__item", value: "" + labels.main, id: inputId, name: input.name, title: labels.title, onClick: onClick }));
    };
    Button.prototype.render = function () {
        var _a = this.props, type = _a.type, color = _a.color, state = _a.state, size = _a.size;
        return (React.createElement("div", { className: this.name + " " + this.name + "--" + color + " " + (!this.props.labels.main ? this.name + "--notext" : "") + " " + (size ? this.name + "--" + size : "") + " " + (state ? this.name + "--" + state : "") + " " + this.form + "__group ", title: this.props.labels.title },
            this.renderInvalid(),
            type == 'button' && this.renderButton(),
            type == 'link' && this.renderLink(),
            type == 'submit' && this.renderSubmit()));
    };
    return Button;
}(React.Component));
Button.defaultProps = {
    type: "button",
    onClick: function (event) {
        return true;
    },
    icon: null,
    color: "blue",
    state: "",
    size: "",
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
exports["default"] = Button;
//# sourceMappingURL=index.js.map