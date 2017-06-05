"use strict";

var _this = this;

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../../config");
exports.Input = function (_a) {
    var props = __rest(_a, []);
    return React.createElement("div", { className: props.name + "\n                     " + (props.disabled ? _this.name + "--" + props.disabled : "") + "\n                     " + (props.required ? _this.name + "--" + props.required : "") + "\n                     " + (props.addClass ? props.addClass : "") + "\n                     " + config_1.form + "__group\n                     " + (props.meta.invalid && (props.meta.dirty || props.meta.touched) ? config_1.form + "__group--invalid" : "") + "\n                 ", title: props.labels.title, style: props.style }, props.children);
};
exports.InputLabel = function (_ref) {
    var children = _ref.children,
        name = _ref.name;
    return React.createElement("label", { className: name + "__label " + config_1.form + "__label " + config_1.form + "__input" }, children);
};
exports.InputError = function (_a) {
    var props = __rest(_a, []);
    if (props.labels.invalid && props.meta.invalid && (props.meta.dirty || props.meta.touched)) {
        return React.createElement("div", { className: config_1.form + "__validation" }, props.labels.invalid);
    } else {
        return null;
    }
};
//# sourceMappingURL=index.js.map