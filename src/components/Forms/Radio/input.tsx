import * as React from "react"
import css from "cxs/component"
import Button from "../../../components/Forms/Button"
import {Input as LightInput} from "light-form/dist/es"

interface IInputProps {
    name: string
    value: string
    checked: boolean
    label: string | JSX.Element
    onChange: (evt: any) => void
    bigButtons: boolean
    className?: string
    hideInput?: boolean
}

const RadioInput: React.SFC<IInputProps> = ({name, value, checked, label,
                                             onChange, bigButtons, hideInput, ...props}) => {
    console.log(name)
    console.log(value)
    const Element = name ? StyledLightInput : Input
    if(bigButtons) {
        return <BigLabel className={`${name}__item ${props.className}`} key={value}>
                <Button secondary={checked ? false : true}
                        style={{display: "block"}}
                        color={checked ? "blue" : "decoration"}
                        type="void" input={{onClick: () => false }}>
                    <Element
                        name={name}
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        type="radio"
                        className={`${this.name}__item`}
                        style={{display: "none"}}
                        data-big={bigButtons}
                        />
                    {!hideInput ?
                        <span>
                            <StyledInput
                                />&nbsp;
                        </span>
                    :
                        <span />
                    }
                    <span style={{verticalAlign: "middle"}}>
                        {label}
                    </span>
               </Button>
               </BigLabel>
    }

    return <Label className={`${name}__item ${props.className}`} key={value}>
                    <Element
                        name={name}
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        type="radio"
                        className={`${this.name}__item`}
                        style={{display: "none"}}
                        data-big={bigButtons}
                        />
                    <span>
                        <StyledInput
                            />
                        &nbsp;{label}
                    </span>
        </Label>
}

const Label = css("label")({
    cursor: "pointer",
    display: "block",
    padding: "5px 0",
}, (props) => {
    const theme: any = props.theme
    return {
        ":hover span span": {
            borderColor: theme.blue,
        },
    }

})

const BigLabel = css("label")({
    display: "table-cell",
    marginRight: "5px",
    " .muk-button__item": {
        borderRadius: 0,
        margin: "0 0 0 -1px",
    },
    " span span": {
        fontWeight: "normal",
    },
}, (props) => {
    const theme: any = props.theme
    return {
        ":hover span span": {
            borderColor: `${theme.blue}`,
        },
        ":first-of-type .muk-button__item": {
            borderRadius: `${theme.radius} 0 0 ${theme.radius}`,
            margin: 0,
        },
        ":last-of-type .muk-button__item": {
            borderRadius: `0 ${theme.radius} ${theme.radius} 0`,
        },
    }
})

const styledProps = (props: any) => {
    if(props["data-big"]) {
        return {
            ":checked + span span": {
                border: `6px solid white`,
            },
        }
    } else {
        return {
            ":checked + span span": {
                border: `6px solid ${props.theme.blue}`,
            },
        }
    }
}

const Input = css("input")(styledProps)
const StyledLightInput = css(LightInput)(styledProps)


const StyledInput = css("span")({
    marginRight: "5px",
    display: "inline-block",
    background: "transparent",
    width: "18px",
    height: "18px",
    position: "relative",
    verticalAlign: "text-top !important",
    transition: "border-color 0.2s",
    borderRadius: "100%",
    ":focus": {
        outline: "none",
    },
    ":active": {
        outline: "none",
    },
}, (props: any) => {

    if(props["data-big"]) {
        return {
            border: `1px solid ${props.theme.decoration}`,
        }
    } else {
        return {
            border: `1px solid ${props.theme.decoration}`,

        }
    }
})

export default RadioInput
