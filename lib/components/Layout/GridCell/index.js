import * as React from "react";
import css from "cxs/component";
const GridCell = (props) => {
    const { children } = props;
    if (children === "" || children === null) {
        return null;
    }
    return (React.createElement(GridCellStyle, Object.assign({}, props), children));
};
const GridCellStyle = css("div")({}, (props) => {
    return {
        gridColumn: props.col ? props.col : "auto auto",
        gridRow: props.row ? props.row : "auto auto",
        gridArea: props.name ? props.name : null,
        justifySelf: props.align ? props.align : "stretch",
        alignSelf: props.valign ? props.valign : "stretch",
    };
});
export default GridCell;