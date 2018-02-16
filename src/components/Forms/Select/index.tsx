import * as React from "react"
import css from "@reglendo/cxs/component"
import {Div} from "../../../components/Layout"
import * as Color from "color"
import IconChevronDown from "@reglendo/mergado-ui-icons/lib/icons/IconChevronDown"
import {prefix} from "../../../config"
import uniqueId from "../../../helpers/unique_id"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import {Select as LightSelect} from "light-form/dist/es"

export interface Props extends IFieldProps {
    options?: any
}

class Select extends React.Component<Props, {}> {

    protected readonly name = prefix + "select";

    public static defaultProps: Props = {
        ...defaultFieldProps,
        options: [],
        size: 0,
    }

    protected renderOptions() {
        return this.props.options.map( option => {
            if(React.isValidElement(option)) {
                if(option.key) {
                    return option;
                } else {
                    const object: any = Object
                    return object.assign({}, option, { key: uniqueId() })
                }
            } else {
                return(<option value={option.value} key={uniqueId()}>{option.title}</option>)
            }
        })
    }

    public render() {
        const { meta, input, labels } = this.props
        const { children, ...props } = this.props
        const isInvalid = meta.invalid && (meta.dirty || meta.touched)
        const Element = props.name ? StyledLightSelect : StyledSelect
        return (
            <Field {...props} name={this.name}>
                <Div position="relative">
                    <Element {...props}
                        {...(!props.name && input)}
                        className={`${this.name}__item ${this.props.className}`}
                        aria-invalid={isInvalid ? 1 : 0}>
                        {children ? children : this.renderOptions()}
                    </Element>
                    <IconChevronDown size={10}
                        style={{ opacity: 0.6, position: "absolute", bottom: "9px",
                                 right: "10px", pointerEvents: "none"}}/>
                </Div>
            </Field>
        )
    }
}

const styles = {
    boxSizing: "border-box",
    width: "100%",
    height: "40px",
    lineHeight: "40px",
    outline: "none",
    display: "inline-block",
    margin: "0",
    background: "white",
    color: "#333333",
    verticalAlign: "middle",
    padding: "0 10px",
    borderWidth: "1px",
    borderStyle: "solid",
    appearance: "none",
    transition: "border-color 0.2s",
    willChange: "border-color",
    ":focus": {
        outline: "none",
        border: "none",
    },
    ":active": {
        outline: "none",
        border: "none",
    },
    "::-ms-expand": {
        display: "none",
    },
    "::-moz-focusring": {
        color: "transparent",
        textShadow: "0 0 0 #000",
    },
}
const stylesProps = (props) => {
    const theme = props.theme

    let disabled = {}
    if(props.disabled) {
        disabled = {
            color: "#999",
            background: "#eee",
            borderColor: Color(theme.grey).fade(0.5).string(),
        }
    }

    return {
        borderRadius: theme.radius,
        border: props["aria-invalid"] ?  theme.input_border_error : theme.input_border,
        ":active": {
            border: theme.input_border_active,
        },
        ":focus": {
            border: theme.input_border_active,
        },
        ...disabled,
    }
}

const StyledSelect = css("select")(styles,stylesProps)
const StyledLightSelect = css(LightSelect)(styles,stylesProps)

export default Select
