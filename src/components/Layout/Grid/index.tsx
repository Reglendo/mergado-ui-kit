import * as React from "react"
import css from "cxs/component"
import domOnlyProps from "../../../helpers/dom-only-props"

interface Props {
    inline?: boolean
    children: any
    cols?: string
    rows?: string
    gap?: number
    colgap?: number
    rowgap?: number
    align?: "start" | "end" | "center" | "stretch"
    valign?: "start" | "end" | "center" | "stretch"
    autoFlow?: "row" | "column"

    style?: any
}

const Grid = (props: Props) => {
    const { children } = props
    if(children === "" || children === null) {
        return null
    }

    return (
        <GridStyle  {...props}>
            {children}
        </GridStyle>
    )
}

const GridStyle = css("div")({

},(props: any) => {
    return {
        display: props.inline ? "inline-grid" : "grid",
        gridTemplateColumns: props.cols ? props.cols : "auto",
        gridTemplateRows: props.rows ? props.rows : "auto",
        gridGap: `${props.rowgap ? props.rowgap : props.gap} ${props.colgap ? props.colgap : props.gap}`,
        justifyItems: props.align ? props.align : "stretch",
        alignItems: props.valign ? props.valign : "stretch",
        gridAutoFlow: props.autoFlow ? props.autoFlow : "row",
    }
})

export default Grid