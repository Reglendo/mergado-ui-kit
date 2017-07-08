"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const item_1 = require("./item");
const renderOptions = (name, options, value, input, singleChoice, showInput, labels) => {
    let allProductsOption = null;
    options.map((option, key) => {
        if (option.name === "♥ALLPRODUCTS♥") {
            allProductsOption = option.id;
        }
    });
    return options
        .map(option => {
        const index = value.indexOf(option.id);
        const handler = () => {
            let selected = [...value];
            if (index < 0) {
                if (allProductsOption !== null && value.indexOf(allProductsOption) > -1) {
                    selected.splice(value.indexOf(allProductsOption), 1);
                }
                // select item
                selected = singleChoice ? [option.id] : selected.concat(option.id);
            }
            else {
                // unselect item
                selected.splice(index, 1);
            }
            input.onChange(selected);
        };
        return React.createElement(item_1.QueryItem, { name: name, option: option, index: index, onClick: handler, checked: value.indexOf(option.id) > -1, singleChoice: singleChoice, showInput: showInput, labels: labels });
    });
};
const QueryListComponent = ({ name, className, options, value, input, singleChoice, showInput, labels }) => {
    return (React.createElement("ul", { className: `${name}__list ${className}` }, renderOptions(name, options, value, input, singleChoice, showInput, labels)));
};
exports.QueryList = styled_components_1.default(QueryListComponent) `
    list-style: none;
    margin: 0;
    padding: 0;
    border: 1px solid #dbcba3;
    height: ${props => props.height === "auto" ? props.height : props.height + "px"};
    overflow: auto;
    background: rgba(255,255,255,0.2);
`;
//# sourceMappingURL=list.js.map