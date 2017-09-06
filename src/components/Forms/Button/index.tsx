import * as React from "react"
import {Link} from "react-router"
import styled from "styled-components"
import {prefix,form} from "../../../config"
import domOnlyProps from "../../../helpers/dom-only-props"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import {UniversalButton} from "./types"
import theme from "../../../styled/themes/default"
import { ThemeProvider } from "styled-components"

export interface Props extends IFieldProps {
    type?: "button" | "link" | "submit" | "void" | "href"
    link?: string
    to?: string
    icon?: JSX.Element | string
    color?: "blue" | "gray" | "grey" | "green" | "red" | "nocolor" | "yellow" | "orange" | "transparent"
    size?: "small" | "tiny" | ""
    disabled?: boolean
    onClick?: (evt: any) => any
    secondary?: boolean
}

const StyledField = styled(Field)`
    display: inline-block;
    vertical-align: top;
`

class Button extends React.Component<Props, {}> {
    protected readonly name = prefix + "button";

    public static defaultProps: Props = {
        ...defaultFieldProps,
        type: "button",
        icon: null,
        color: "blue",
        disabled: false,
        size: "",
        secondary: false,
    }

    public render() {
        const { meta, input, labels, group } = this.props
        const { children, ...props } = this.props
        return (
            <StyledField className={`${this.name}--${props.color}
                                        ${!labels.main ? this.name+`--notext`:``}
                                        ${props.size ? this.name+`--`+props.size:``}
                                        ${this.name}--${props.type}
                                        ${props.disabled ? this.name+`--disabled`:``}
                `}
                {...this.props} name={this.name} label="" labels={{...labels,main: ""}}
                style={{ marginBottom: 0, padding: 0, ...group.style }}
                >
                    <UniversalButton {...this.props} name={this.name} />
            </StyledField>
        )
    }
}

export default Button
