import * as React from "react"
import IconCheck from "@reglendo/mergado-ui-icons/lib/icons/IconCheck"
import css from "@reglendo/cxs/component"
import {Span} from "../../../components/Layout/Span"

import {prefix,form} from "../../../config"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import {Input as LightInput} from "light-form/dist/es"
import {Div} from "../../Layout/Div"
export interface Props extends IFieldProps {
    halfway?: boolean
}

class Checkbox extends React.Component<Props, {}> {
    protected readonly name = prefix + "input-checkbox"

    public static defaultProps: Props = {
        ...defaultFieldProps,
        halfway: false,
    }

    protected renderLabel() {
        const { input, labels,...props } = this.props
        const label = this.props.label ? this.props.label : labels.main
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)
        const Element = props.name ? StyledLightInput : Input
        return <Label  className={`${isInvalid ? `${form}__group--invalid` : ""}`}>
                    <Div position="relative" display="inline-block" verticalAlign="middle">
                        <Element
                            {...props}
                            {...(!props.name && { checked: input.value })}
                            {...(!props.name && input)}
                            type="checkbox"
                            className={`${this.name}__item ${input.className}`}
                            s={{display: "none !important"}}
                            />
                        <StyledInput label={label} className={"muk-checkbox-input"}
                            />
                        <IconCheck size={14} />
                    </Div>
                    <Span fontSize={"16px"} fontWeight={"normal"}>
                    {label && " " }{label}
                    </Span>
                </Label>
    }

    public render() {
        return <StyledField {...this.props} s={{ marginBottom: 0, padding: 0, ...this.props.style }}
                label={this.renderLabel()} />
    }
}

const Label = css("div")({
    cursor: "pointer",
}, (props: any) => {
    const theme: any = props.theme
    return {
        ":hover .muk-checkbox-input": {
            borderColor: theme.blue,
        },
    }
})

const StyledField = css(Field)({
    "> .muk-form__group--invalid": {
        border: "none !important",
    },

    " svg": {
        // verticalAlign: "initial",
    },

}, props => ({
    ...props.s,
}))

const styles = {
    ":checked + span + span.muk-icon--check": {
        display: "inline-block",
    },
}

const stylesProps =  (props) => {
    return {
        ":checked + span": {
            borderColor: `${props.theme.blue}`,
            background: `${props.theme.blue}`,
        },
        ...props.s,
    }
}

const Input = css("input")(styles , stylesProps)
const StyledLightInput = css(LightInput)(styles , stylesProps)

const StyledInput = css("span")({
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    transition: "border-color 0.2s",
    " + span.muk-icon--check": {
        display: "none",
        position: "absolute",
        left: "2px",
        top: "-3px",
    },
    " + span.muk-icon--check path": {
        fill: "white !important",
    },

}, (props: any) => { return {
    marginRight: props.label ? "5px" : "0px",
    borderRadius: `${props.theme.radius}`,
    border: `1px solid ${props.theme.decoration}`,
    ":hover": {
        borderColor: `${props.theme.blue}`,
    },
}})

export default Checkbox
