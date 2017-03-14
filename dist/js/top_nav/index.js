"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class TopNav extends React.Component {
    renderLinks() {
        const { links } = this.props;
        return (React.createElement("ul", null, links));
    }
    render() {
        return (React.createElement("nav", { id: "submenu", style: { margin: "15px 0" } },
            React.createElement("div", { className: "wrapper" }, this.renderLinks())));
    }
}
exports.default = TopNav;
//# sourceMappingURL=index.js.map