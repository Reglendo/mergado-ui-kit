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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
require("../../../stylesheets/components/forms/_checkbox_container.sass");
var CheckboxContainer = (function (_super) {
    __extends(CheckboxContainer, _super);
    function CheckboxContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.name = config_1.prefix + "checkbox_container";
        _this.state = {
            filter: ''
        };
        return _this;
    }
    CheckboxContainer.prototype.renderBoxes = function () {
        var _this = this;
        var options = this.props.availableQueries;
        if (typeof options === "object") {
            var arr = Object.keys(options).map(function (key) { return options[key]; });
            options = arr;
        }
        var queries = this.props.input.value;
        var queriesType;
        if (!(queriesType === "array" || queriesType === "object")) {
            queries = [];
        }
        return options
            .filter(function (option) {
            var regex = new RegExp(_this.state.filter, 'i');
            return regex.test(option.name);
        })
            .map(function (option) {
            var index = queries.indexOf(option.id);
            var handler = function () {
                if (index < 0) {
                    _this.props.input.onChange(queries.concat(option.id));
                }
                else {
                    var copy = queries.slice(); // make copy to not mutate value
                    copy.splice(index, 1); // remove item at index
                    _this.props.input.onChange(copy);
                }
            };
            return (React.createElement("li", { className: _this.name + "__item " + (index >= 0 ? _this.name + "__item--active" : ''), key: option.id, onClick: handler },
                _this.props.multipleChoice == true ? (React.createElement("input", { type: "checkbox", className: _this.name + "__checkbox", checked: queries.indexOf(option.id) >= 0, onChange: handler })) : null,
                React.createElement("label", { className: _this.name + "__label" },
                    option.name === "♥ALLPRODUCTS♥" ? _this.props.labels.allProducts : option.name,
                    " ",
                    React.createElement("span", { className: _this.name + "__count" }, typeof option.productCount !== "undefined" ? "(" + option.productCount + ")" : ""))));
        });
    };
    CheckboxContainer.prototype.render = function () {
        var _this = this;
        var queries = this.props.input.value;
        return (React.createElement("div", { className: this.name },
            React.createElement("h3", { className: this.name + "__header", title: this.props.meta.invalid ? this.props.labels.invalid :
                    '' }, this.props.labels.main),
            React.createElement("div", { className: this.name + "__queries " + (this.props.meta.dirty && this.props.meta.invalid ?
                    this.name + "__queries--invalid" : '') },
                React.createElement("div", { className: this.name + "__filter" },
                    React.createElement("label", { className: this.name + "__filter_label", htmlFor: "filter" }, this.props.labels.placeholder),
                    React.createElement("input", { className: this.name + "__filter_input " + config_1.prefix + "input--text", type: "text", id: "filter", name: "filter", value: this.state.filter, onChange: function (evt) { _this.setState({ filter: evt.target.value }); } })),
                React.createElement("ul", { className: this.name + "__list" }, this.renderBoxes()))));
    };
    return CheckboxContainer;
}(React.Component));
CheckboxContainer.defaultProps = {
    input: {
        checked: false,
        name: "",
        onBlur: function (value) { },
        onChange: function (value) { },
        onDragstart: function (value) { },
        onDrop: function (value) { },
        onFocus: function (value) { },
        value: []
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
    availableQueries: [],
    labels: {
        main: "Apply on queries",
        allProducts: "All products",
        placeholder: "Filter",
        invalid: "Invalid input"
    },
    multipleChoice: true
};
exports.default = CheckboxContainer;
//# sourceMappingURL=index.js.map