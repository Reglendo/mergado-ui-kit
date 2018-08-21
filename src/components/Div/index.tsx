import * as React from "react"
import css from "@reglendo/cxs/component"
import PropTypes from "prop-types"

interface Props {
    children?: any
    className?: string
    style?: any
    props?: any
    [propName: string]: any
}

class Div extends React.PureComponent<Props, {}> {
    render() {
        const {children, style, className, props, ...others} = this.props
        return <CssDiv className={`muk-div ${className || ""}`} {...props} s={{...others, ...style}}>
            {children}
        </CssDiv>
    }
}

const CssDiv = css("div")(
    (props) => {
        const { className,theme,children,s,...style } = props
        return {...s, ...style}
    })

CssDiv.propTypes = {
    s: PropTypes.any,
    style: PropTypes.any,
}


export default Div