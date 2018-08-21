import * as React from "react"
import css from "@reglendo/cxs/component"
import PropTypes from "prop-types"

interface Props {
    children?: any
    col?: string
    row?: string
    name?: string

    align?: "start" | "end" | "center" | "stretch"
    valign?: "start" | "end" | "center" | "stretch"

    autoFlow?: "row" | "column"
    style?: any
    className?: string
}

const GridCell = (props: Props) => {
    const { children, style, className, ...p } = props

    return (
        <GridCellStyle className={`muk-gridcell ${className || ""}`} s={style} {...p}>
            {children}
        </GridCellStyle>
    )
}

const GridCellStyle = css("div")({

},(props: any) => {
    return {
        gridColumn: props.col ? props.col : "auto auto",
        gridRow: props.row ? props.row : "auto auto",
        gridArea: props.name ? props.name : null,
        justifySelf: props.align ? props.align : "stretch",
        alignSelf: props.valign ? props.valign : "stretch",
        ...props.s,
    }
})

GridCellStyle.propTypes = {
    col: PropTypes.string,
    row: PropTypes.string,
    name: PropTypes.string,
    align: PropTypes.string,
    valign: PropTypes.string,
    autoFlow: PropTypes.string,
    s: PropTypes.any,
}

export default GridCell