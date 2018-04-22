import * as React from "react"
import cxs from "@reglendo/cxs/component"

import {prefix,form} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import { CssUniversalButton } from "./button"

export interface Props extends IFieldProps {
    type?: "button" | "submit" | "void" | "href"
    link?: string
    to?: string
    icon?: JSX.Element | string
    color?: "blue" | "gray" | "grey" | "green" | "red" | "nocolor" | "yellow" | "orange" | "transparent" | "decoration"
    size?: "small" | "smaller" | "tiny" | ""
    disabled?: boolean
    onClick?: (evt: any) => any
    secondary?: boolean
    keepColors?: boolean
}

export class Button extends React.Component<Props, {}> {
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
        const { children, style, ...props } = this.props
        if(props.type !== "submit") {
            return <CssUniversalButton {...this.props} s={style} name={this.name} />
        }
        return (
            <CssField className={`m-field  m-${props.color} ${!labels.main ? `m-notext`:``} ${props.size ? `m-${props.size}` : ``} ${this.name}--${props.type} ${props.disabled ? `m-disabled`:``}`}
                {...this.props} name={this.name} label="" labels={{...labels,main: ""}}
                s={{ marginBottom: 0, ...style, ...group.style }}
                >
                    <CssUniversalButton {...this.props} s={style} name={this.name} />
            </CssField>
        )
    }
}

const CssField = cxs(Field)({
    display: "inline-block",
    verticalAlign: "top",
}, props => ({
    ...props.s,
}))

export default Button
